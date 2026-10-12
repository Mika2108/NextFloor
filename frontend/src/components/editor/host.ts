import type { I18nKey } from "../../i18n.ts";
import type { Building, Floor } from "../../model.ts";
import type { HomeAssistant } from "../../types.ts";

/** What the editor's forms may use of the editor: the plan, the selected floor, translation, and the two ways of changing the plan. */
export interface EditorHost {
  readonly hass: HomeAssistant | undefined;
  readonly doc: Building;
  readonly floor: Floor | undefined;
  /** Whether the user may change the plan; forms are read-only otherwise. */
  readonly admin: boolean;
  t(key: I18nKey, vars?: Record<string, string | number>): string;
  /** Changes a copy of the plan (with the selected floor at hand) and stores it as one undoable step. */
  change(mutate: (doc: Building, floor: Floor) => void): void;
  /** Replaces the whole plan as one undoable step. */
  replace(next: Building): void;
}
