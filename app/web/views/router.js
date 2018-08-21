import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';
Vue.use(Router);
export var createRouter = function () {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Home,
            },
            {
                path: '/about',
                component: function () { return import('./About.vue'); },
            },
        ],
    });
};
//# sourceMappingURL=router.js.map