import { useEffect, useState } from "react";

interface MediaSlotProps {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export function MediaSlot({
  src,
  alt,
  className = "",
  imgClassName = "",
}: MediaSlotProps) {
  const [failed, setFailed] = useState(false);
  const cleanSrc = src?.trim() ?? "";

  useEffect(() => {
    setFailed(false);
  }, [cleanSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {cleanSrc && !failed && (
        <img
          src={cleanSrc}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover rounded-[inherit] ${imgClassName}`}
        />
      )}
    </div>
  );
}
