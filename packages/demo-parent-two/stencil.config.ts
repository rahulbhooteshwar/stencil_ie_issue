import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'demoparenttwo',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
