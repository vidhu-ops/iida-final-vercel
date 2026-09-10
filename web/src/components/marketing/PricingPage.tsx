"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { CREDIT_GUIDE } from "./audienceContent";
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
            <article className="mkt-price-card is-featured">
              <span className="mkt-price-badge">Available now</span>
              <h2 className="mkt-feature-title">{featured.display_name}</h2>
              <p className="mkt-price">
                <span className="mkt-price-currency">&#8377;</span>0<small>to begin</small>
              </p>
              <p className="mkt-feature-body">
                {signupCredits} signup credits, demo workspace, and pay-per-use across research depth, plans, Mentor, and Employee OS.
              </p>
              <ul className="mkt-price-list">
                {(featured.perks ?? []).slice(0, 4).map((perk) => (
                  <li key={perk}>
                    <Check className="h-4 w-4 shrink-0" aria-hidden />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Link href="/login?mode=register" className="iid-btn iid-btn-primary mkt-price-cta">
                Start free
              </Link>
            </article>
          ) : null}

          {paidPlans.map((plan) => (
            <article key={plan.id} className="mkt-price-card">
              <span className="mkt-price-badge">{plan.billable ? "Self-serve" : "Coming soon"}</span>
              <h2 className="mkt-feature-title">{plan.display_name}</h2>
              <p className="mkt-price">
                <span>{plan.price_label}</span>
                {plan.period ? <small>{plan.period}</small> : null}
              </p>
              <p className="mkt-feature-body">
                {plan.unlimited_usage ? "Unlimited in-app usage on core tools." : "Credit-based usage with higher limits."}
              </p>
              <ul className="mkt-price-list">
                {(plan.perks ?? []).slice(0, 5).map((perk) => (
                  <li key={perk}>
                    <Check className="h-4 w-4 shrink-0" aria-hidden />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              {plan.checkout_href ? (
                <Link href={plan.checkout_href} className="iid-btn iid-btn-primary mkt-price-cta">
                  Choose {plan.display_name}
                </Link>
              ) : (
                <a href={SITE_WHATSAPP} target="_blank" rel="noreferrer" className="iid-btn iid-btn-primary mkt-price-cta">
                  WhatsApp to join waitlist
                </a>
              )}
            </article>
          ))}

          {enterprise ? (
            <article className="mkt-price-card">
              <span className="mkt-price-badge">Enterprise</span>
              <h2 className="mkt-feature-title">{enterprise.display_name}</h2>
              <p className="mkt-price">
                <span className="mkt-price-coming">Custom</span>
                <small>Scope, SLA, and integrations</small>
              </p>
              <p className="mkt-feature-body">Custom workflows, security review, dedicated delivery, and invoice billing.</p>
              <ul className="mkt-price-list">
                {(enterprise.perks ?? []).slice(0, 4).map((perk) => (
                  <li key={perk}>
                    <Check className="h-4 w-4 shrink-0" aria-hidden />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a href={SITE_PHONE_TEL} className="iid-btn iid-btn-ghost mkt-price-cta">
                Call {SITE_PHONE}
              </a>
            </article>
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
