import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'demo-child',
  styleUrl: 'demo-child.css',
  shadow: true
})
export class DemoChild {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return (
      <div>
      {this.format()}
      </div>
    );
  }
}
