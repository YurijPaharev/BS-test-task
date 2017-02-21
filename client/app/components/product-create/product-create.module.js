import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import productCreateComponent from './product-create.component';
import productCreateDirectives from './product-create.directive'

let productCreateModule = angular.module('productCreate', [
    ngResource,
    uiRouter
])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('product-create', {
                url: '/product-create',
                template: '<product-create></product-create>'
            })
            .state('product-edit', {
                url: '/product-edit/:productId',
                template: '<product-create></product-create>'
            });
    })
    .component('productCreate', productCreateComponent)
    .directive('hasErrors', productCreateDirectives.hasErrors)
    .directive('validData', productCreateDirectives.validData);

export default productCreateModule;