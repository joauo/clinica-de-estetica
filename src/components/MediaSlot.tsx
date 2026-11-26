import { useEffect, useState } from "react";

interface MediaSlotProps {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
}

export function MediaSlot({
  src,
  alt,
  className = "",
  imgClassName = "",
  width = 800,
  height = 600,
  srcSet,
  sizes,
}: MediaSlotProps) {
  const [failed, setFailed] = useState(false);
  const cleanSrc = src?.trim() ?? "";

  useEffect(() => {
    setFailed(false);
  }, [cleanSrc]);

  const resolvedSizes =
    sizes ??
    (srcSet || cleanSrc.startsWith("/images/")
      ? "(max-width: 767px) 100vw, 50vw"
      : undefined);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {cleanSrc && !failed && (
        <img
          src={cleanSrc}
          srcSet={srcSet}
          sizes={resolvedSizes}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover rounded-[inherit] ${imgClassName}`}
        />
      )}
    </div>
  );
}
