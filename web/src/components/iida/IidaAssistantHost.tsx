"use client";

import { IidaAssistant } from "@/components/iida/IidaAssistant";
import { IidaThemeWelcome } from "@/components/iida/IidaThemeWelcome";

/** Always mounted from the root layout — every page, signed-in or not. */
export function IidaAssistantHost() {
  return (
    <>
      <IidaThemeWelcome />
      <IidaAssistant />
    </>
  );
}
