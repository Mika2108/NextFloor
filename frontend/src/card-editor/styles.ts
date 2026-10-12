import { css } from "lit";

/** The look of the editor: it follows Home Assistant's colours, as the dialog is light or dark with the user's theme. */
export const editorStyles = css`
  :host {
    display: block;
    color: var(--primary-text-color);
  }
  h3 {
    margin: 18px 0 8px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--secondary-text-color);
  }
  h3:first-child {
    margin-top: 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 12px;
  }
  [hidden] {
    display: none;
  }
  .wide {
    grid-column: 1 / -1;
  }
  .field {
    display: grid;
    gap: 4px;
    font-size: 13px;
    color: var(--secondary-text-color);
  }
  select,
  input[type="number"],
  input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    min-height: 40px;
    padding: 8px 10px;
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
    border-radius: 8px;
    background: var(--card-background-color, transparent);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 14px;
  }
  .toggle {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    font-size: 14px;
    cursor: pointer;
  }
  .toggle input {
    flex: none;
    width: 18px;
    height: 18px;
    margin: 1px 0 0;
    accent-color: var(--primary-color);
  }
  .sub {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
    margin: -2px 0 6px 28px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    cursor: pointer;
  }
  .chip input {
    width: 16px;
    height: 16px;
    margin: 0;
    accent-color: var(--primary-color);
  }
  .toggle small,
  .hint {
    display: block;
    margin: 2px 0 0;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  @media (max-width: 450px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
