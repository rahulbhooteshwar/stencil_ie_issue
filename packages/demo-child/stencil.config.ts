import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'demochild',
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
