import { Controller } from 'egg';
import * as path from 'path';
import * as fs from 'fs';

const vueSSR = require('vue-server-renderer');

export default class RenderCtrl extends Controller {

  public async index( ) {

    try {

      const { ctx } = this;
      let matchedPath = '';
      const serverBundle = require( path.join( __dirname, '../../../public/vue-ssr-server-bundle.json'));
      const clientManifest = require( path.join( __dirname, '../../../public/vue-ssr-client-manifest.json'));

      const renderer = vueSSR.createBundleRenderer( serverBundle, {
        clientManifest,
        runInNewContext: false,
        template: fs.readFileSync( path.join( __dirname, '../../web/index.html'), 'utf-8'),
      });

      const extendsLinks = '';

      const html = await renderer.renderToString({
        url: ctx.url,
        title: 'CVTE - EHR',
        links: extendsLinks,
        cb: matchedData => {
          matchedPath = matchedData;
        },
      });

      ctx.body = html;

    } catch ( e ) {
      this.ctx.body = e;
    }
  }
}
