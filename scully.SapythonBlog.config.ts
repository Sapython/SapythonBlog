import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer'
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
const { MinifyHtml } = require('scully-plugin-minify-html');
/** this loads the default render plugin, remove when switching to something else. */
require('scully-plugin-amp-css');
require('scully-plugin-canonical');
require('@notiz/scully-plugin-lazy-images');
setPluginConfig('md', { enableSyntaxHighlighting: true });
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "SapythonBlog",
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