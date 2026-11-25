import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === "production";

const VALID_IMAGE_SIZES = ["1K", "2K", "4K"] as const;
const VALID_LOGO_ASPECT_RATIOS = ["1:1", "4:3", "3:4", "16:9", "9:16"] as const;
const VALID_VIDEO_ASPECT_RATIOS = ["16:9", "9:16"] as const;
const VALID_DURATIONS = ["5s", "8s", "10s"] as const;

type ImageSize = (typeof VALID_IMAGE_SIZES)[number];
type LogoAspectRatio = (typeof VALID_LOGO_ASPECT_RATIOS)[number];
type VideoAspectRatio = (typeof VALID_VIDEO_ASPECT_RATIOS)[number];
type VideoDuration = (typeof VALID_DURATIONS)[number];

function createAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    throw new Error("GEMINI_API_KEY_NOT_CONFIGURED");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function parseGeminiError(error: unknown): { status: number; message: string } {
  const rawMessage =
    error instanceof Error ? error.message : typeof error === "string" ? error : "Erro inesperado ao comunicar com a API.";

  if (rawMessage.includes("GEMINI_API_KEY_NOT_CONFIGURED")) {
    return {
      status: 500,
      message:
        "Chave GEMINI_API_KEY não configurada no ambiente do servidor. Configure uma chave válida em Settings > Secrets.",
    };
  }

  if (
    rawMessage.includes("PERMISSION_DENIED") ||
    rawMessage.includes("API_KEY_INVALID") ||
    rawMessage.includes("403")
  ) {
    return {
      status: 403,
      message:
        "Permissão negada ou chave de API inválida. Verifique se uma chave de API com faturamento ativo foi configurada em Settings > Secrets.",
    };
  }

  if (rawMessage.includes("RESOURCE_EXHAUSTED") || rawMessage.includes("429")) {
    return {
      status: 429,
      message:
        "Limite de cota excedido para este modelo. Os modelos gemini-3-pro-image-preview e gemini-omni-1.2-flash exigem uma chave de API paga em Settings > Secrets.",
    };
  }

  if (rawMessage.includes("NOT_FOUND") || rawMessage.includes("404")) {
    return {
      status: 404,
      message:
        "Modelo solicitado não encontrado ou indisponível para esta conta. Verifique o acesso ao modelo em Settings > Secrets.",
    };
  }

  return {
    status: 500,
    message: rawMessage,
  };
}

function stripDataUrlPrefix(input: string): { base64: string; detectedMime?: string } {
  const match = input.match(/^data:([^;]+);base64,(.+)$/);
  if (match) {
    return { detectedMime: match[1], base64: match[2] };
  }
  return { base64: input };
}

async function startServer() {
  const app = express();

  app.use(express.json({ limit: "35mb" }));

  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  app.post("/api/logo/generate", async (req: Request, res: Response) => {
    try {
      const {
        companyName = "",
        description = "",
        style = "Minimalista Editorial",
        palette = "Dourado champagne, marrom profundo e marfim",
        imageSize = "1K",
        aspectRatio = "1:1",
      } = req.body ?? {};

      if (typeof description !== "string" || description.trim().length < 3) {
        res.status(400).json({
          error: "Descreva sua empresa ou conceito visual com pelo menos 3 caracteres.",
        });
        return;
      }

      const validImageSize: ImageSize = VALID_IMAGE_SIZES.includes(imageSize)
        ? imageSize
        : "1K";
      const validAspectRatio: LogoAspectRatio = VALID_LOGO_ASPECT_RATIOS.includes(aspectRatio)
        ? aspectRatio
        : "1:1";

      const cleanName = typeof companyName === "string" ? companyName.trim() : "";
      const cleanStyle = typeof style === "string" ? style.trim() : "Minimalista Editorial";
      const cleanPalette = typeof palette === "string" ? palette.trim() : "";

      const promptParts = [
        "Design a high-craft, bespoke commercial brand logo mark presented cleanly on a uniform solid minimalist studio background.",
        cleanName ? `Company / Brand Name: "${cleanName}".` : "",
        `Brand Concept & Description: ${description.trim()}.`,
        `Visual Direction & Aesthetic Style: ${cleanStyle}.`,
        cleanPalette ? `Color Palette: ${cleanPalette}.` : "",
        "Composition Rules: Perfectly centered emblem and/or refined wordmark, crisp geometric vector-like edges, balanced negative space, luxury editorial precision, timeless memorability, zero clutter, zero watermarks, zero mockup frames or angled desk scenes—render only the clean flat-lay graphic logo composition ready for brand identity presentation and motion animation.",
      ]
        .filter(Boolean)
        .join("\n");

      const ai = createAiClient();

      const response = await ai.models.generateContent({
        model: "gemini-3-pro-image-preview",
        contents: {
          parts: [{ text: promptParts }],
        },
        config: {
          imageConfig: {
            aspectRatio: validAspectRatio,
            imageSize: validImageSize,
          },
        },
      });

      let imageBase64: string | undefined;
      let mimeType = "image/png";
      let captionText = "";

      const parts = response.candidates?.[0]?.content?.parts ?? [];
      for (const part of parts) {
        if (part.inlineData?.data && !imageBase64) {
          imageBase64 = part.inlineData.data;
          mimeType = part.inlineData.mimeType ?? "image/png";
        } else if (part.text) {
          captionText += part.text;
        }
      }

      if (!imageBase64) {
        res.status(502).json({
          error: "O modelo não retornou uma imagem válida. Tente refinar a descrição da marca.",
        });
        return;
      }

      res.json({
        imageDataUrl: `data:${mimeType};base64,${imageBase64}`,
        imageBase64,
        mimeType,
        imageSize: validImageSize,
        aspectRatio: validAspectRatio,
        captionText: captionText.trim(),
      });
    } catch (error) {
      const parsed = parseGeminiError(error);
      res.status(parsed.status).json({ error: parsed.message });
    }
  });

  app.post("/api/logo/animate", async (req: Request, res: Response) => {
    try {
      const {
        imageData,
        mimeType = "image/png",
        companyName = "",
        motionPrompt = "",
        aspectRatio = "16:9",
        duration = "6s",
      } = req.body ?? {};

      if (typeof imageData !== "string" || imageData.trim().length === 0) {
        res.status(400).json({
          error: "Envie ou gere uma imagem antes de iniciar a animação em vídeo.",
        });
        return;
      }

      const validAspectRatio: VideoAspectRatio = VALID_VIDEO_ASPECT_RATIOS.includes(aspectRatio)
        ? aspectRatio
        : "16:9";

      const validDuration: VideoDuration = VALID_DURATIONS.includes(duration)
        ? duration
        : "5s";

      const { base64, detectedMime } = stripDataUrlPrefix(imageData.trim());
      const resolvedMime = detectedMime || (typeof mimeType === "string" ? mimeType : "image/png");
      const allowedMimes = ["image/png", "image/jpeg", "image/webp"];
      const safeMimeType = allowedMimes.includes(resolvedMime) ? resolvedMime : "image/png";

      const cleanMotion = typeof motionPrompt === "string" ? motionPrompt.trim() : "";
      const cleanName = typeof companyName === "string" ? companyName.trim() : "";

      const animationPrompt = [
        "Transform this logo/image into an ultra-refined, smooth luxury brand reveal animation.",
        cleanName ? `Brand name featured: "${cleanName}".` : "",
        cleanMotion
          ? `Motion direction: ${cleanMotion}`
          : "Motion direction: Gentle architectural light sweep across the emblem, subtle metallic shimmer, delicate floating micro-particles of warm dust, smooth camera push-in with steady framing so the brand mark remains crisp, legible, and centered throughout.",
        "Keep the original logo shapes, proportions, and colors faithful and undistorted. Seamless, high-production-value studio lighting, silky 24fps motion, no jarring cuts.",
      ]
        .filter(Boolean)
        .join(" ");

      const ai = createAiClient();

      const interaction = await ai.interactions.create(
        {
          model: "gemini-omni-1.2-flash",
          input: [
            {
              type: "image",
              mime_type: safeMimeType,
              data: base64,
            },
            {
              type: "text",
              text: animationPrompt,
            },
          ],
          background: false,
          store: false,
          stream: false,
          response_format: {
            type: "video",
            aspect_ratio: validAspectRatio,
            duration: validDuration,
            resolution: "720p",
          },
        },
        { timeout: 300000 }
      );

      let videoPart = interaction.output_video;

      if (!videoPart && Array.isArray(interaction.steps)) {
        for (const step of interaction.steps) {
          if (step.type === "model_output" && Array.isArray(step.content)) {
            const found = step.content.find((c) => c.type === "video");
            if (found && found.type === "video") {
              videoPart = found;
            }
          }
        }
      }

      if (videoPart?.data) {
        const videoMime = videoPart.mime_type || "video/mp4";
        res.json({
          videoDataUrl: `data:${videoMime};base64,${videoPart.data}`,
          mimeType: videoMime,
          aspectRatio: validAspectRatio,
          duration: validDuration,
        });
        return;
      }

      if (videoPart?.uri) {
        res.json({
          videoUri: videoPart.uri,
          mimeType: videoPart.mime_type || "video/mp4",
          aspectRatio: validAspectRatio,
          duration: validDuration,
        });
        return;
      }

      res.status(502).json({
        error: "O modelo de vídeo não retornou dados reproduzíveis. Tente novamente.",
      });
    } catch (error) {
      const parsed = parseGeminiError(error);
      res.status(parsed.status).json({ error: parsed.message });
    }
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Atelier Lumina server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
