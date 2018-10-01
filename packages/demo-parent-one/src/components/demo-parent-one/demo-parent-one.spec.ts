import { DemoParentOne } from './demo-parent-one';

describe('demo-parent-one', () => {
  it('builds', () => {
    expect(new DemoParentOne()).toBeTruthy();
  });

  describe('formatting', () => {
    it('returns empty string for no names defined', () => {
      const component = new DemoParentOne();
      expect(component.format()).toEqual('');
    });

    it('formats just first names', () => {
      const component = new DemoParentOne();
      component.first = 'Joseph';
      expect(component.format()).toEqual('Joseph');
    });

    it('formats first and last names', () => {
      const component = new DemoParentOne();
      component.first = 'Joseph';
      component.last = 'Publique';
      expect(component.format()).toEqual('Joseph Publique');
    });

    it('formats first, middle and last names', () => {
      const component = new DemoParentOne();
      component.first = 'Joseph';
      component.middle = 'Quincy';
      component.last = 'Publique';
      expect(component.format()).toEqual('Joseph Quincy Publique');
    });
  });
});
