import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer'
const { MinifyHtml } = require('scully-plugin-minify-html');
/** this loads the default render plugin, remove when switching to something else. */
require('scully-plugin-amp-css');
require('scully-plugin-canonical');
require('@notiz/scully-plugin-lazy-images');

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "SapythonBlog",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  },
  defaultPostRenderers: ['combineStylesAmpPlugin','setCanonicalLinkPlugin','lazyImages','MinifyHtml'],
};