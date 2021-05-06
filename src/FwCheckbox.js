import { css, html, LitElement } from 'lit-element';

export class FwCheckbox extends LitElement {
  static get properties() {
    return {
      isDone: { type: Boolean },
    };
  }

  static get styles() {
    return [
      css`
        .fw-checkbox-container {
          position: relative;
          display: block;
          height: 22px;
          width: 22px;
          margin-right: 1rem;
        }

        #checkbox {
          position: absolute;
          left: 0;
          opacity: 0;
          cursor: pointer;
          height: 1rem;
          width: 1rem;
          z-index: 1;
        }

        #checkbox:hover ~ .fw-checkbox {
          border-color: #bfd4de;
        }

        #checkbox:checked ~ .fw-checkbox:after {
          opacity: 1;
        }

        .fw-checkbox {
          position: absolute;
          top: 0;
          left: 0;
          width: 1rem;
          height: 1rem;
          border: 0.2rem solid #e0e9f5;
          border-radius: 5px;
          transition: border-color 0.5s;
        }

        .fw-checkbox::after {
          content: '✔';
          color: var(--checkbox-color, #50498f);
          font-size: 1rem;
          opacity: 0;
          display: block;
          height: 1rem;
        }
      `,
    ];
  }

  constructor() {
    super();

    this.isDone = false;
  }

  __onCheckboxClick(event) {
    const {
      target: { checked },
    } = event;

    this.dispatchEvent(
      new CustomEvent('onCheckboxClick', { detail: { checked } })
    );
  }

  render() {
    const { __onCheckboxClick, isDone } = this;

    return html`
      <div class="fw-checkbox-container">
        <input
          id="checkbox"
          type="checkbox"
          .checked=${isDone}
          @click=${__onCheckboxClick}
        />
        <div class="fw-checkbox"></div>
      </div>
    `;
  }
}
