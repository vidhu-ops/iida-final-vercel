"use client";

import { useEffect, useRef } from "react";

export function SectionVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!el.src) {
              el.src = src;
              el.load();
            }
            void el.play().catch(() => {
              /* muted autoplay usually works once in view */
            });
          } else {
            el.pause();
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <div className="mkt-section-video" aria-hidden="true">
      <video
        ref={ref}
        className="mkt-section-video-el"
        muted
        loop
        playsInline
        preload="none"
        data-src={src}
      />
      <div className="mkt-section-video-scrim" />
    </div>
  );
}
