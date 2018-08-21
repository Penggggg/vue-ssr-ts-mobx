import RenderCtrl from './controller/render';
import PersonalCtrl from './controller/personal';

declare module 'egg' {

    export interface IController {

        render: {
            index: RenderCtrl
        }

        personal: {
            index: PersonalCtrl
        }

    }

}