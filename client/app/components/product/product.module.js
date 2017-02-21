import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import productComponent from './product.component.js';

let productModule = angular.module('product', [
    ngResource,
    uiRouter
  ])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('product-details', {
        url: '/product/:productId',
        template: '<product></product>'
      });
  })
  .component('product', productComponent);

export default productModule;
