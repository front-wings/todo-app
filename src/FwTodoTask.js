import { css, html, LitElement } from 'lit-element';
import { TodoService } from './todo.service.js';
import './fw-checkbox.js';

export class FwTodoTask extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      isDone: { type: Boolean },
    };
  }

  static get styles() {
    return [
      css`
        .todo-task {
          color: #6b6f75;
          border: 1px solid #e4edf7;
          align-items: center;
          background-color: white;
          display: flex;
          padding: 0.75em 1.5em;
        }

        .todo-task__label {
          font-size: 18px;
          font-weight: bold;
          width: 100%;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.title = undefined;
    this.isDone = false;
  }

  __markAsDone(event) {
    const {
      detail: { checked },
    } = event;

    TodoService.markAsDone(this.title, checked);
  }

  render() {
    const { __markAsDone, isDone, title } = this;

    return html`
      <div class="todo-task">
        <fw-checkbox
          .isDone=${isDone}
          .title=${title}
          @onCheckboxClick=${__markAsDone}
        ></fw-checkbox>
        <label class="todo-task__label" for="checkbox">${title}</label>
      </div>
    `;
  }
}
