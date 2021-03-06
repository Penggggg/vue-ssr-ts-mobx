import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';

Vue.use( Router );

export const createRouter = ( ) => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/about',
        component: () => import('./About.vue'),
      },
    ],
  });
};
