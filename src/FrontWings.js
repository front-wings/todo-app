import { LitElement, html, css } from 'lit-element';
import './fw-todo-task.js';
import './fw-card.js';
import './fw-footer.js';

export class FrontWings extends LitElement {
  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--front-wings-background-color, #e0e9f5);
      }

      main {
        flex-grow: 1;
      }

      h1 {
        color: #313336;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = `FrontWings Todo's`;
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <fw-card></fw-card>
      </main>

      <fw-footer></fw-footer>
    `;
  }
}
