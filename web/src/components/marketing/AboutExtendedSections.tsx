"use client";

import Link from "next/link";
import { CreditsGuideSection } from "./FirstVisitorSections";
import { buildHomePricingCards } from "./homePricingCards";
import { HumanScene, MarketingPhoto } from "./illustrations";
import { IconClock, IconGlobe, IconSearch, IconUser } from "./icons";
import { IndustryBanner } from "./IndustryBanner";
import { LogoMarquee } from "./LogoMarquee";
import { PricingDropdownCard } from "./PricingDropdownCard";
import { SectionVideo } from "./SectionVideo";
import { WixDetailCards } from "./WixDetailCards";
import {
  AUDIENCE,
  INTEGRATION_LOGOS,
  PROCESS_STEPS,
  PROBLEM,
  SECTION_VIDEOS,
  SOLUTION,
  WHY_US,
  type Audience,
} from "./audienceContent";

type Props = {
  audience: Audience;
  signupCredits: number;
};

export function AboutExtendedSections({ audience, signupCredits }: Props) {
  const copy = AUDIENCE[audience];
  const problem = PROBLEM[audience];
  const solution = SOLUTION[audience];

  return (
    <>
      <section
        id="integrations"
        className="mkt-band mkt-band-full mkt-band-integrations mkt-band-has-video mkt-band-has-video-light"
        aria-labelledby="integrations-heading"
      >
        <SectionVideo src={SECTION_VIDEOS.integrations} />
        <div className="mkt-wrap mkt-section mkt-band-content">
          <div className="mkt-section-head mkt-section-head-center">
            <span className="mkt-label">Connect your stack</span>
            <h2 id="integrations-heading" className="mkt-h2">
              Integrations vs AI models
            </h2>
            <p className="mkt-sub">
              Optional OAuth apps connect your workspace to tools you already use. Model logos show which AI providers can
              power research and agents — not separate product logins.
            </p>
          </div>
          <p className="mkt-integrations-group-label">Workspace integrations (OAuth)</p>
          <LogoMarquee
            items={INTEGRATION_LOGOS.filter((logo) => logo.group === "apps")}
            ariaLabel="IIDATECH workspace integrations"
            itemClassName="mkt-logo-marquee-item-integration"
          />
          <p className="mkt-integrations-group-label">AI models powering IIDATECH</p>
          <LogoMarquee
            items={INTEGRATION_LOGOS.filter((logo) => logo.group === "models")}
            ariaLabel="AI models available in IIDATECH"
            itemClassName="mkt-logo-marquee-item-integration"
          />
        </div>
      </section>

      <section id="about-story" className="mkt-band mkt-band-full mkt-band-about" aria-labelledby="about-story-heading">
        <div className="mkt-wrap mkt-section mkt-section-about-human mkt-band-content">
          <div className="mkt-about-human-grid">
            <div className="mkt-section-head">
              <span className="mkt-label">All about us</span>
              <h2 id="about-story-heading" className="mkt-h2">
                Structured plans in minutes — not months.
              </h2>
              <p className="mkt-sub">
                We built IIDATECH for people who need professional business plans but do not have weeks to research
                markets, create financial models, or write 30-page documents.
              </p>
              <p className="mkt-sub" style={{ marginTop: "0.75rem" }}>
                {copy.aboutBody}
              </p>
              <ul className="mkt-about-list">
                <li>Research your industry and competitors</li>
                <li>Validate your idea with real market data</li>
                <li>Create detailed financial projections</li>
                <li>Build step-by-step execution roadmaps</li>
                <li>Generate professional documents for individuals and teams</li>
              </ul>
              <div className="mkt-about-actions">
                <Link href="/topics" className="iid-btn iid-btn-primary">
                  Browse topics
                </Link>
                <Link href="/how-it-works" className="iid-btn iid-btn-ghost">
                  See walkthrough
                </Link>
              </div>
            </div>
            <div className="mkt-about-people" aria-label="People building with IIDATECH">
              <figure className="mkt-about-people-hero">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/marketing/people/about-1.jpg" alt="Founders collaborating on a business plan" loading="lazy" />
              </figure>
              <figure className="mkt-about-people-side">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/marketing/people/about-2.jpg" alt="Founder working on a laptop" loading="lazy" />
              </figure>
              <figure className="mkt-about-people-side">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/marketing/people/about-3.jpg" alt="Team collaborating around a laptop" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mkt-band mkt-band-full mkt-band-process mkt-band-has-video mkt-band-has-video-light">
        <SectionVideo src={SECTION_VIDEOS.process} />
        <div className="mkt-wrap mkt-section mkt-section-process mkt-band-content">
          <div className="mkt-section-head mkt-section-head-center">
            <span className="mkt-label">Process</span>
            <h2 className="mkt-h2">It&apos;s as easy as 1, 2, 3</h2>
          </div>
          <div className="mkt-process mkt-process-3 mkt-process-human">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="mkt-process-step mkt-process-step-human">
                <p className="mkt-step-big">{s.step}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mkt-section-cta-row">
            <Link href="/how-it-works" className="iid-btn iid-btn-primary">
              See the full walkthrough →
            </Link>
          </div>
        </div>
      </section>

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

      <IndustryBanner />

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
