"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { restartDemoWalkthrough } from "@/components/DemoCaseStudyWalkthrough";
import { api, type User } from "@/lib/api";

export function DemoBanner() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api.me().then(setUser).catch(() => setUser(null));
  }, []);

  if (!user?.is_demo) return null;

  return (
    <div className="demo-banner-bar">
      <p className="demo-banner-copy">
        <strong>Demo mode</strong> — browse a finished Pune healthy-snack case study. Generate, hire, and save unlock with a free account.
      </p>
      <div className="demo-banner-actions">
        <button type="button" className="iid-btn iid-btn-ghost demo-banner-replay" onClick={restartDemoWalkthrough}>
          Replay guided tour
        </button>
        <Link href="/login?mode=register" className="iid-btn iid-btn-primary demo-banner-signup">
          Create free account
        </Link>
      </div>
    </div>
  );
}