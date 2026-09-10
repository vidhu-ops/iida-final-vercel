"use client";

import Link from "next/link";

const PANELS = [
  {
    id: "planning",
    title: "Planning and Content",
    body: "Brand narrative, messaging, and content planning — delivered by partner studios when you want hands-on help.",
    image: "/marketing/wix/panel-planning.jpg",
  },
  {
    id: "media",
    title: "Media Design",
    body: "Social posts, websites, apps, and digital media — optional partner services, separate from the IIDATECH platform.",
    image: "/marketing/wix/panel-media.jpg",
  },
  {
    id: "print",
    title: "Print Design",
    body: "Packaging, posters, and physical collateral — available through our execution partner network.",
    image: "/marketing/wix/panel-print.jpg",
  },
] as const;

export function WixBrandSections() {
  return (
    <section id="execution-support" className="mkt-wix-execute mkt-wix-execute-partner" aria-labelledby="wix-execute-heading">
      <div className="mkt-wrap mkt-wix-execute-head">
        <p className="mkt-wix-execute-eyebrow">Optional partner services</p>
        <h2 id="wix-execute-heading" className="mkt-wix-execute-title">
          Need hands-on <span>execution support?</span>
        </h2>
        <p className="mkt-wix-execute-sub">
          IIDATECH is software first — research, plans, and AI employees in your workspace. If you also want websites, brand design, or campaign production, our partner network can help separately.
        </p>
        <Link href="/partners" className="iid-btn iid-btn-ghost mkt-wix-partner-link">
          Meet execution partners →
        </Link>
      </div>
      <div className="mkt-wix-panels">
        {PANELS.map((panel) => (
          <article key={panel.id} className="mkt-wix-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mkt-wix-panel-image" src={panel.image} alt="" loading="lazy" />
            <div className="mkt-wix-panel-scrim" />
            <div className="mkt-wix-panel-copy">
              <h3>{panel.title}</h3>
              <p>{panel.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
