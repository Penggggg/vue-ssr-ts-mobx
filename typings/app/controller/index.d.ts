// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Home from '../../../app/controller/home';
import PersonalIndex from '../../../app/controller/personal/index';
import PersonalRouter from '../../../app/controller/personal/router';
import RenderIndex from '../../../app/controller/render/index';
import RenderRouter from '../../../app/controller/render/router';

declare module 'egg' {
  interface IController {
    home: Home;
    personal: {
      index: PersonalIndex;
      router: PersonalRouter;
    };
    render: {
      index: RenderIndex;
      router: RenderRouter;
    };
  }
}
