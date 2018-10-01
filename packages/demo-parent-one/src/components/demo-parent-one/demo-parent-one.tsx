import { Component, Prop } from '@stencil/core';
import 'demo-child';

@Component({
  tag: 'demo-parent-one',
  styleUrl: 'demo-parent-one.css',
  shadow: true
})
export class DemoParentOne {
  @Prop()
  first: string;
  @Prop()
  middle: string;
  @Prop()
  last: string;

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
        Hello, World! I'm {this.format()} from <h1>Demo Parent One</h1>
        I am holding following Component
        <demo-child first="hello from" last="nested demo-child inside parent one"></demo-child>
      </div>
    );
  }
}
