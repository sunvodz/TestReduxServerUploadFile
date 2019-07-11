// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  InsertAssets,
} from './';

export default {
  path: 'assets',
  name: 'Assets',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'insert', name: 'Insert assets', component: InsertAssets },
  ],
};
