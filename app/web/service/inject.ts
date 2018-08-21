
import { Observer } from 'mobx-vue';

export const inject = ( storeObj = { }) => {
    return view => {

        Object.keys( storeObj ).map( key => {
            view.prototype[ key ] = storeObj[ key ];
        });

        return Observer( view );
    };
};
