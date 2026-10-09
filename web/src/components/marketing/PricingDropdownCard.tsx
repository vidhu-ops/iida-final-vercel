"use client";

import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

export type PricingDropdownCardProps = {
  badge?: string;
  title: string;
  price: ReactNode;
  summary?: string;
  perks: string[];
  checkHref: string;
  checkExternal?: boolean;
  featured?: boolean;
  className?: string;
};

export function PricingDropdownCard({
  badge,
  title,
  price,
  summary,
  perks,
  checkHref,
  checkExternal = false,
  featured = false,
  className = "",
}: PricingDropdownCardProps) {
  const cardClass = `mkt-price-card mkt-price-card-dropdown${featured ? " is-featured" : ""}${className ? ` ${className}` : ""}`;
  const useAnchor =
    checkExternal || checkHref.startsWith("tel:") || checkHref.startsWith("mailto:") || checkHref.startsWith("http");

  const checkButton = useAnchor ? (
    <a
      href={checkHref}
      target={checkHref.startsWith("http") ? "_blank" : undefined}
      rel={checkHref.startsWith("http") ? "noreferrer" : undefined}
      className="iid-btn iid-btn-primary mkt-price-cta"
    >
      Check it
    </a>
  ) : (
    <Link href={checkHref} className="iid-btn iid-btn-primary mkt-price-cta">
      Check it
    </Link>
  );

  return (
    <article className={cardClass}>
      {badge ? <span className="mkt-price-badge">{badge}</span> : null}
      <h3 className="mkt-feature-title">{title}</h3>
      <div className="mkt-price">{price}</div>
      {summary ? <p className="mkt-feature-body">{summary}</p> : null}
      <details className="mkt-price-details">
        <summary className="mkt-price-details-summary">
          <span>What you get</span>
          <ChevronDown className="mkt-price-details-chevron" aria-hidden />
        </summary>
        <ul className="mkt-price-list mkt-price-list-details">
          {perks.map((perk) => (
            <li key={perk}>
              <Check className="h-4 w-4 shrink-0" aria-hidden />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </details>
      {checkButton}
    </article>
  );
}
