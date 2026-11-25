import { useState } from "react";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { SITE_CONFIG } from "../config";

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as
  | string
  | undefined;

function ClinicPinMarker() {
  const { brand, contact } = SITE_CONFIG;
  const [infoOpen, setInfoOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={contact.coordinates}
        title={brand.name}
        onClick={() => setInfoOpen((prev) => !prev)}
      >
        <Pin
          background={SITE_CONFIG.colors.brown}
          borderColor={SITE_CONFIG.colors.primary}
          glyphColor={SITE_CONFIG.colors.champagne}
        />
      </AdvancedMarker>

      {infoOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={240}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div className="p-0.5 text-[#252321]">
            <p className="text-[13px] font-semibold leading-snug">
              {brand.name}
            </p>
            <p className="text-[12px] text-[#3E3A36] mt-0.5 leading-snug">
              {contact.address}
            </p>
            <p className="text-[11px] text-[#55504B] mt-0.5">
              {contact.cityState} · {contact.zipCode}
            </p>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export function ClinicLocationMap() {
  const { brand, contact } = SITE_CONFIG;

  if (MAPS_API_KEY && MAPS_API_KEY !== "MY_GOOGLE_MAPS_API_KEY") {
    return (
      <div className="w-full h-full min-h-[280px] bg-[var(--color-white)]">
        <APIProvider
          apiKey={MAPS_API_KEY}
          libraries={["marker"]}
          language="pt-BR"
          region="BR"
        >
          <GoogleMap
            mapId="DEMO_MAP_ID"
            defaultCenter={contact.coordinates}
            defaultZoom={16}
            disableDefaultUI={true}
            gestureHandling="cooperative"
            internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
            className="w-full h-full"
          >
            <ClinicPinMarker />
          </GoogleMap>
        </APIProvider>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[280px] bg-[var(--color-white)]">
      <iframe
        title={`Mapa de localização — ${brand.name}`}
        src={contact.googleMapsEmbedUrl}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full border-0"
      />
    </div>
  );
}
