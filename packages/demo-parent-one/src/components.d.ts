/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'demo-child';


export namespace Components {

  interface DemoParentOne {
    'first': string;
    'last': string;
    'middle': string;
  }
  interface DemoParentOneAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DemoParentOne': Components.DemoParentOne;
  }

  interface StencilIntrinsicElements {
    'demo-parent-one': Components.DemoParentOneAttributes;
  }


  interface HTMLDemoParentOneElement extends Components.DemoParentOne, HTMLStencilElement {}
  var HTMLDemoParentOneElement: {
    prototype: HTMLDemoParentOneElement;
    new (): HTMLDemoParentOneElement;
  };

  interface HTMLElementTagNameMap {
    'demo-parent-one': HTMLDemoParentOneElement
  }

  interface ElementTagNameMap {
    'demo-parent-one': HTMLDemoParentOneElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
