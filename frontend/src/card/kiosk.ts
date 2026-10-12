// The wall-tablet behaviour of the card, as plain timers: the clean view (bars hidden after a quiet spell), the return to the start
// view after being idle (and the screensaver turn that may follow), and the night dimming that follows a time range.

import type { CardConfig } from "../card-config.ts";
import type { HomeAssistant } from "../types.ts";
import { nightActive } from "../kiosk.ts";

/** What the timers change on the card. */
export interface KioskHost {
  config(): CardConfig | undefined;
  hass(): HomeAssistant | undefined;
  /** Whether the bars are hidden (the clean view). */
  setClean(clean: boolean): void;
  isClean(): boolean;
  /** The screensaver turn runs or stops. */
  setOrbit(on: boolean): void;
  isOrbit(): boolean;
  setNight(night: boolean): void;
  /** Back to the start view after the idle time. */
  goHome(): void;
}

export class KioskTimers {
  private readonly host: KioskHost;
  private cleanTimer: ReturnType<typeof setTimeout> | undefined;
  private idleTimer: ReturnType<typeof setTimeout> | undefined;
  private nightTimer: ReturnType<typeof setInterval> | undefined;

  constructor(host: KioskHost) {
    this.host = host;
  }

  /** controls_hide_after: the bars come back on a touch and go again after the quiet spell. */
  armClean(touched = false): void {
    clearTimeout(this.cleanTimer);
    const seconds = this.host.config()?.controls_hide_after ?? 0;
    if (!(seconds > 0)) return;
    if (touched && this.host.isClean()) this.host.setClean(false);
    this.cleanTimer = setTimeout(() => this.host.setClean(true), seconds * 1000);
  }

  stopClean(): void {
    clearTimeout(this.cleanTimer);
  }

  /** idle_return: after the quiet spell the card goes back to its start view. */
  armIdle(): void {
    clearTimeout(this.idleTimer);
    const seconds = this.host.config()?.idle_return ?? 0;
    if (seconds > 0) this.idleTimer = setTimeout(() => this.host.goHome(), seconds * 1000);
  }

  /** Any touch ends the screensaver and restarts the idle clock. */
  touched(): void {
    if (this.host.isOrbit()) this.host.setOrbit(false);
    this.armIdle();
    this.armClean(true);
  }

  /** A time range for the night needs a look at the clock now and then. */
  start(): void {
    this.armIdle();
    this.nightTimer = setInterval(() => this.host.setNight(nightActive(this.host.config()?.night, this.host.hass())), 60000);
  }

  stop(): void {
    clearTimeout(this.cleanTimer);
    clearTimeout(this.idleTimer);
    clearInterval(this.nightTimer);
  }
}
