import { newSpecPage } from '@stencil/core/testing';
import { AppAuth } from '../app-auth';

describe('app-auth', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppAuth],
      html: `<app-auth></app-auth>`,
    });
    expect(page.root).toEqualHtml(`
      <app-auth>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-auth>
    `);
  });
});
