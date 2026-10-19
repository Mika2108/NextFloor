import { html, nothing, type TemplateResult } from "lit";
import { LIGHT_ANIMATIONS, type LightEffectConfig } from "../../light-effects.ts";
import type { EditorHost } from "./host.ts";

/** A small local-only mapping editor. Unknown stored identifiers remain untouched until edited. */
export function lightEffectFields(host: EditorHost, config: LightEffectConfig, effects: unknown, update: (patch: LightEffectConfig) => void): TemplateResult {
  const mapping = config.effect_animations ?? {};
  const names = [...new Set([...Object.keys(mapping), ...(Array.isArray(effects) ? effects.filter((s): s is string => typeof s === "string") : [])])];
  const set = (name: string, animation: string, input: HTMLInputElement | HTMLSelectElement, adding = false): boolean => {
    const exists = Object.prototype.hasOwnProperty.call(mapping, name);
    const nameLength = Array.from(name).length; // Match Python len(), not UTF-16 code units.
    const error = adding && exists ? "light_effect_exists"
      : animation !== "" && (nameLength < 1 || nameLength > 255) ? "light_effect_name_limit"
      : animation !== "" && !exists && Object.keys(mapping).length >= 100 ? "light_effect_count_limit" : undefined;
    input.setCustomValidity?.(error ? host.t(error) : "");
    if (error) {
      const feedback = input.closest?.("details")?.querySelector<HTMLElement>("[data-effect-feedback]");
      if (feedback) feedback.textContent = host.t(error);
      input.reportValidity?.();
      if (!adding) input.value = exists ? mapping[name] : "";
      return false;
    }
    const next = { ...mapping };
    if (animation === "") delete next[name];
    else Object.defineProperty(next, name, { value: animation, enumerable: true, configurable: true, writable: true });
    update({ effect_animations: next });
    return true;
  };
  return html`<details class="nf-wide">
    <summary>${host.t("light_effects")}</summary>
    <p class="nf-sub">${host.t("light_effects_hint")}</p>
    <label class="nf-check"><input type="checkbox" .checked=${config.animations_enabled !== false} ?disabled=${!host.admin}
      @change=${(e: Event) => update({ animations_enabled: (e.target as HTMLInputElement).checked })} />${host.t("light_effects_enabled")}</label>
    ${names.map((name) => html`<label class="nf-field nf-wide">${name}
      <select ?disabled=${!host.admin} @change=${(e: Event) => { const input = e.target as HTMLSelectElement; set(name, input.value, input); }}>
        <option value="" ?selected=${!Object.prototype.hasOwnProperty.call(mapping, name)}>${host.t("light_effect_unmapped")}</option>
        ${Object.prototype.hasOwnProperty.call(mapping, name) && !LIGHT_ANIMATIONS.includes(mapping[name] as typeof LIGHT_ANIMATIONS[number])
          ? html`<option selected value=${mapping[name]}>${mapping[name]} (${host.t("light_effect_unmapped")})</option>` : nothing}
        ${LIGHT_ANIMATIONS.map((animation) => html`<option value=${animation} ?selected=${Object.prototype.hasOwnProperty.call(mapping, name) && mapping[name] === animation}>${host.t(`light_animation_${animation}`)}</option>`)}
      </select></label>`)}
    <label class="nf-field nf-wide">${host.t("light_effect_add")}<input type="text" ?disabled=${!host.admin} placeholder="Regenbogen"
      @input=${(e: Event) => (e.target as HTMLInputElement).setCustomValidity("")}
      @change=${(e: Event) => { const input = e.target as HTMLInputElement; if (set(input.value, "none", input, true)) input.value = ""; }} /></label>
    <p class="nf-sub" data-effect-feedback role="status" aria-live="polite">${host.t("light_effect_name_limit")} ${host.t("light_effect_count_limit")}</p>
  </details>`;
}
