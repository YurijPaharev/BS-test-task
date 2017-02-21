import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularLoadingBar from 'angular-loading-bar';
import store from 'angular-storage';
import Components from './components/components.module';
import AppComponent from './app.component';
import MOCK_PRODUCTS from './mock';

import 'bootstrap/dist/css/bootstrap.css'
import 'angular-loading-bar/build/loading-bar.css'

angular
    .module('app', [
        uiRouter,
        angularLoadingBar,
        store,
        Components.name
    ])
    .component('app', AppComponent)
    .constant('Products', MOCK_PRODUCTS)
    .constant('DEF_URL', 'http://previews.123rf.com/images/tribalium123/tribalium1231302/tribalium123130200097/17919887-Money-bag-with-dollar-sign-in-pixels-Stock-Vector.jpg');