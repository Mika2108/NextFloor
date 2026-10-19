// The "Extensions" page of the panel: uploading your own 3D models, plugins, plus the links to the project.
// It lives in the editor bundle (loaded with it) and is shown to admins only.

import { css, html, LitElement } from "lit";
import { REPO_URL } from "../features.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { FurniturePack } from "../packs.ts";
import "./model-upload.ts";
import "./plugin-manager.ts";
import type { PluginRef } from "../plugins/api.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

export class Extensions extends LitElement {
  static properties = {
    hass: { attribute: false },
    packs: { attribute: false },
    plugins: { attribute: false },
  };

  declare hass: HomeAssistant | undefined;
  declare packs: FurniturePack[] | undefined;
  declare plugins: PluginRef[] | undefined;
  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected render() {
    return html`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${REPO_URL}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${REPO_URL}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${REPO_URL}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <nf-model-upload .hass=${this.hass} .packs=${this.packs}></nf-model-upload>
      <nf-plugin-manager .hass=${this.hass} .plugins=${this.plugins}></nf-plugin-manager>
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        overflow: auto;
      }
      .nf-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .nf-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .nf-ext-head a {
        text-decoration: none;
      }
      .nf-ext-actions,
      .nf-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .nf-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .nf-sub {
        color: var(--nf-soft);
        font-size: 13px;
      }
    `,
  ];
}

if (!customElements.get("nf-extensions")) customElements.define("nf-extensions", Extensions);
