"use client";

import Link from "next/link";
import { CreditsGuideSection } from "./FirstVisitorSections";
import { buildHomePricingCards } from "./homePricingCards";
import { HumanScene, MarketingPhoto } from "./illustrations";
import { IconClock, IconGlobe, IconSearch, IconUser } from "./icons";
import { PricingDropdownCard } from "./PricingDropdownCard";
import { SectionVideo } from "./SectionVideo";
import { WixDetailCards } from "./WixDetailCards";
import { PROBLEM, SECTION_VIDEOS, SOLUTION, WHY_US, type Audience } from "./audienceContent";

type Props = {
  audience: Audience;
  signupCredits: number;
};

/** Sections from “Want more details?” through pricing — lives on About only. */
export function AboutExtendedSections({ audience, signupCredits }: Props) {
  const problem = PROBLEM[audience];
  const solution = SOLUTION[audience];

  return (
    <>
      <WixDetailCards />

      <section id="why-us" className="mkt-band mkt-band-full mkt-band-why">
        <div className="mkt-wrap mkt-section mkt-band-content">
          <div className="mkt-section-head mkt-section-head-center">
            <span className="mkt-label">Why us</span>
            <h2 className="mkt-h2">For a seamless business experience</h2>
          </div>
          <div className="mkt-why-grid">
            {WHY_US.map((item) => (
              <article key={item.title} className="mkt-why-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CreditsGuideSection signupCredits={signupCredits} />

      <section id="market-problem" className="mkt-wrap mkt-section">
        <div className="mkt-split mkt-split-problem">
          <div className="mkt-split-copy">
            <span className="mkt-label">The problem</span>
            <h2 className="mkt-h2">{problem.title}</h2>
            <p className="mkt-sub">{problem.sub}</p>
          </div>
          <HumanScene
            variant="founder"
            photoId="msme-business"
            cardA={{ label: "MSMEs worldwide (approx.)", value: "~78M" }}
            cardB={{ label: "India-first focus today", value: "Local" }}
          />
        </div>
        <div className="mkt-pain-row">
          <div className="mkt-pain-tile">
            <span className="mkt-icon-ring">
              <IconSearch />
            </span>
            <strong>No research bench</strong>
            <p>Founders and MSMEs rarely have in-house analysts.</p>
          </div>
          <div className="mkt-pain-tile">
            <span className="mkt-icon-ring">
              <IconClock />
            </span>
            <strong>Slow consulting</strong>
            <p>Weeks of back-and-forth before you can act.</p>
          </div>
          <div className="mkt-pain-tile">
            <span className="mkt-icon-ring">
              <IconUser />
            </span>
            <strong>Teams stretched thin</strong>
            <p>Research, planning, and outreach compete for the same hours.</p>
          </div>
          <div className="mkt-pain-tile">
            <span className="mkt-icon-ring">
              <IconGlobe />
            </span>
            <strong>Local context missing</strong>
            <p>Global tools miss regulation, pricing, and buyer reality.</p>
          </div>
        </div>
      </section>

      <section id="platform-solution" className="mkt-wrap mkt-section">
        <div className="mkt-features-split">
          <div className="mkt-section-head">
            <span className="mkt-label">The solution</span>
            <h2 className="mkt-h2">{solution.title}</h2>
            <p className="mkt-sub">{solution.body}</p>
          </div>
          <MarketingPhoto id="analytics" className="mkt-features-visual" rounded="lg" />
        </div>
      </section>

      <section id="pricing" className="mkt-band mkt-band-full mkt-band-pricing mkt-band-has-video">
        <SectionVideo src={SECTION_VIDEOS.services} />
        <div className="mkt-wrap mkt-section mkt-band-content mkt-section-pricing-band">
          <div className="mkt-section-head mkt-section-head-center">
            <span className="mkt-label">Pricing</span>
            <h2 className="mkt-h2">Start free. Grow when you are ready.</h2>
            <p className="mkt-sub">
              {signupCredits} free credits to try research, plans, Mentor, and Employee OS. Self-serve Starter from
              ₹4,999/mo — or talk to us for Growth and Enterprise.
            </p>
          </div>
          <div className="mkt-pricing-grid mkt-pricing-grid-3 mkt-pricing-cards-band">
            {buildHomePricingCards(signupCredits).map((card) => (
              <PricingDropdownCard key={card.title} {...card} />
            ))}
          </div>
          <div className="mkt-pricing-home-actions">
            <Link href="/pricing" className="iid-btn iid-btn-primary mkt-price-cta">
              Full pricing details →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
