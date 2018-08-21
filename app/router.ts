import { Application } from 'egg';
import { renderRouter } from './controller/render/router';
import { personalRouter } from './controller/personal/router';

export default (app: Application) => {
  const { controller, router } = app;

  renderRouter( app );
  personalRouter( app );

};
