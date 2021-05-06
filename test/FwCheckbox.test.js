import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import '../src/fw-checkbox.js';

describe('FwCheckbox', () => {
  it('should fire onCheckboxClick event when the checkbox is clicked', async () => {
    const element = await fixture(
      html`<fw-checkbox title="Label"></fw-checkbox>`
    );

    const checkbox = element.shadowRoot.querySelector('input');

    setTimeout(() => checkbox.click());
    const { detail } = await oneEvent(element, 'onCheckboxClick');

    expect(detail.checked).to.be.true;
  });
});
