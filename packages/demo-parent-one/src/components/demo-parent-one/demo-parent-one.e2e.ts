import { newE2EPage } from '@stencil/core/testing';

describe('demo-parent-one', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<demo-parent-one></demo-parent-one>');
    const element = await page.find('demo-parent-one');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<demo-parent-one></demo-parent-one>');
    const component = await page.find('demo-parent-one');
    const element = await page.find('demo-parent-one >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
