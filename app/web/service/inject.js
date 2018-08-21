import { Observer } from 'mobx-vue';
export var inject = function (storeObj) {
    if (storeObj === void 0) { storeObj = {}; }
    return function (view) {
        Object.keys(storeObj).map(function (key) {
            view.prototype[key] = storeObj[key];
        });
        return Observer(view);
    };
};
//# sourceMappingURL=inject.js.map