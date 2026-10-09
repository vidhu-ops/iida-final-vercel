"use client";

import Link from "next/link";
import { CREDIT_GUIDE } from "./audienceContent";
import { PricingDropdownCard } from "./PricingDropdownCard";
import { WorkspaceEntryLink } from "@/components/WorkspaceEntryLink";
import { usePricingCatalog } from "@/hooks/usePricingCatalog";
import { SITE_PHONE, SITE_PHONE_TEL, SITE_WHATSAPP } from "@/lib/site";

type CatalogPlan = {
  id: string;
  display_name: string;
  price_label: string;
  period?: string;
  billable?: boolean;
  unlimited_usage?: boolean;
  perks?: string[];
  checkout_href?: string | null;
};

const FAQ = [
  {
    q: "What do credits buy?",
    a: "Quick research ≈ 5 credits, business plan ≈ 5 credits, Mentor turn ≈ 1 credit, Employee OS task ≈ 1 credit. Your 30 signup credits can cover several research runs or a mix of tools.",
  },
  {
    q: "Can I still use the product today?",
    a: "Yes. Start free, run the demo, and spend free credits on research, plans, Mentor, and Employee OS exploration.",
  },
  {
    q: "Do I need my own API keys?",
    a: "No for free and demo use — IIDATECH credits cover core research, plan, Mentor, and Employee OS exploration. Bring-your-own LLM keys and OAuth (Gmail, LinkedIn, HubSpot) are optional for advanced live outreach.",
  },
  {
    q: "How is my data handled?",
    a: "Project data stays in your workspace for the features you use. We do not sell personal data and do not use your business data to train public AI models. See the Privacy Policy for retention and deletion.",
  },
  {
    q: "What powers the outputs?",
    a: "IIDATECH combines structured product workflows with large language models and sourced research pipelines — with citations and project context ChatGPT does not provide out of the box.",
  },
  {
    q: "How do I get a custom quote?",
    a: `Call or WhatsApp ${SITE_PHONE} for Growth, Business, or Enterprise scopes.`,
  },
];

export function PricingPage() {
  const { catalog } = usePricingCatalog();
  const signupCredits = catalog?.signup_credits ?? 30;
  const plans = (catalog?.plans ?? []) as CatalogPlan[];

  const featured = plans.find((p) => p.id === "starter") ?? plans[0];
  const paidPlans = plans.filter((p) => p.billable);
  const enterprise = plans.find((p) => p.id === "enterprise");

  return (
    <>
      <section className="mkt-wrap mkt-page-hero mkt-page-hero-human">
        <p className="mkt-eyebrow">Pricing</p>
        <h1 className="mkt-page-title">Start free. Upgrade when outputs earn their keep.</h1>
        <p className="mkt-lead mkt-page-lead">
          {signupCredits} free credits on signup — no credit card. Self-serve Starter at ₹4,999/mo for unlimited research and plans. Higher tiers add automation, onboarding, and custom scope.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/login?mode=register" className="iid-btn iid-btn-primary">
            Analyze my business
          </Link>
          <WorkspaceEntryLink className="iid-btn iid-btn-ghost">See demo</WorkspaceEntryLink>
        </div>
      </section>

      <section className="mkt-wrap mkt-section">
        <div className="mkt-section-head mkt-section-head-center">
          <span className="mkt-label">Credits</span>
          <h2 className="mkt-h2">What one credit buys (approximate)</h2>
        </div>
        <div className="mkt-credits-grid mkt-credits-grid-page">
          {CREDIT_GUIDE.map((row) => (
            <div key={row.action} className="mkt-credit-row">
              <span>{row.action}</span>
              <strong>{row.credits} credits</strong>
            </div>
          ))}
        </div>
        <p className="mkt-credits-footnote mkt-sub">
          {signupCredits} signup credits ≈ up to {Math.floor(signupCredits / 5)} quick research runs, or a mix of research, plans, Mentor, and Employee OS tasks.
        </p>
      </section>

      <section className="mkt-wrap mkt-section">
        <div className="mkt-pricing-grid mkt-pricing-grid-wide">
          {featured ? (
            <PricingDropdownCard
              badge="Available now"
              title={featured.display_name}
              featured
              price={
                <>
                  <span className="mkt-price-currency">&#8377;</span>0<small>to begin</small>
                </>
              }
              summary={`${signupCredits} signup credits, demo workspace, and pay-per-use across research depth, plans, Mentor, and Employee OS.`}
              perks={featured.perks ?? []}
              checkHref="/login?mode=register"
            />
          ) : null}

          {paidPlans.map((plan) => (
            <PricingDropdownCard
              key={plan.id}
              badge={plan.billable ? "Self-serve" : "Coming soon"}
              title={plan.display_name}
              price={
                <>
                  <span>{plan.price_label}</span>
                  {plan.period ? <small>{plan.period}</small> : null}
                </>
              }
              summary={
                plan.unlimited_usage ? "Unlimited in-app usage on core tools." : "Credit-based usage with higher limits."
              }
              perks={plan.perks ?? []}
              checkHref={plan.checkout_href ?? SITE_WHATSAPP}
              checkExternal={!plan.checkout_href}
            />
          ))}

          {enterprise ? (
            <PricingDropdownCard
              badge="Enterprise"
              title={enterprise.display_name}
              price={
                <>
                  <span className="mkt-price-coming">Custom</span>
                  <small>Scope, SLA, and integrations</small>
                </>
              }
              summary="Custom workflows, security review, dedicated delivery, and invoice billing."
              perks={enterprise.perks ?? []}
              checkHref={SITE_PHONE_TEL}
            />
          ) : null}
        </div>
        <p className="mkt-pricing-note">
          India (INR) is the default. USD and other regions available on request via WhatsApp.
        </p>
      </section>

      <section className="mkt-wrap mkt-section mkt-section-last">
        <div className="mkt-section-head">
          <span className="mkt-label">FAQ</span>
          <h2 className="mkt-h2">Common questions</h2>
        </div>
        <div className="mkt-faq-grid mkt-faq-grid-2">
          {FAQ.map((item) => (
            <article key={item.q} className="mkt-faq-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
        <p className="mkt-pricing-contact">
          Call / WhatsApp: <a href={SITE_PHONE_TEL}>{SITE_PHONE}</a> ·{" "}
          <a href={SITE_WHATSAPP} target="_blank" rel="noreferrer">
            Open WhatsApp
          </a>
        </p>
      </section>
    </>
  );
}
