// The round markers for devices that float over the 3D view: an icon, a state text, a power reading and a caption. They are plain
// buttons, so they can be tapped, held (details) and reached with the keyboard.

/** What a pin needs to know of the viewer, and what it tells it. */
export interface PinHooks {
  /** Furnishing is on: a press starts dragging the device instead of acting on it. */
  furnishing(): boolean;
  /** The device was pressed while furnishing; the controls see the pointer as well and start the drag. */
  pressedWhileFurnishing(entityId: string): void;
  selectWhileFurnishing(entityId: string): void;
  /** The pin's centre relative to the viewer, in pixels. */
  centre(pin: HTMLElement): { x: number; y: number };
  tap(entityId: string, x: number, y: number): void;
  hold(entityId: string, x: number, y: number): void;
}

/** How long a press must last to count as a hold. */
export const HOLD_MS = 500;

const part = (klass: string) => Object.assign(document.createElement("span"), { className: klass });

export function createDevicePin(entityId: string, hooks: PinHooks): HTMLButtonElement {
  const pin = Object.assign(document.createElement("button"), { className: "nf-dev" });
  pin.dataset.entity = entityId;
  pin.append(part("nf-dev-icon"), part("nf-dev-text"), part("nf-dev-watt"), part("nf-dev-name"));

  let holdTimer: ReturnType<typeof setTimeout> | undefined;
  let wasHeld = false;
  const reportAt = (report: (id: string, x: number, y: number) => void) => {
    const { x, y } = hooks.centre(pin);
    report(entityId, x, y);
  };
  const stopTimer = () => clearTimeout(holdTimer);

  pin.addEventListener("pointerdown", (e) => {
    if (hooks.furnishing()) return hooks.pressedWhileFurnishing(entityId);
    e.stopPropagation();
    wasHeld = false;
    stopTimer();
    holdTimer = setTimeout(() => {
      wasHeld = true;
      reportAt(hooks.hold);
    }, HOLD_MS);
  });
  for (const ending of ["pointerleave", "pointercancel", "pointerup"] as const) pin.addEventListener(ending, stopTimer);
  pin.addEventListener("contextmenu", (e) => e.preventDefault());
  pin.addEventListener("click", (e) => {
    e.stopPropagation();
    if (hooks.furnishing()) return hooks.selectWhileFurnishing(entityId);
    if (!wasHeld) reportAt(hooks.tap);
  });
  // from the keyboard Enter acts like a tap, and Shift+Enter or the context-menu key opens the details
  pin.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" && e.shiftKey) || e.key === "ContextMenu") {
      e.preventDefault();
      reportAt(hooks.hold);
    }
  });
  return pin;
}
