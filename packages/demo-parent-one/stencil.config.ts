import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'demoparentone',
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
