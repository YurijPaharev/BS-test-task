import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import productListComponent from './product-list.component';
import store from 'angular-storage';

let productListModule = angular.module('productList', [
    ngResource,
    uiRouter,
    store
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('product-list', {
        url: '/',
        template: '<product-list></product-list>'
      });
  })
    .component('productList', productListComponent);

export default productListModule;
