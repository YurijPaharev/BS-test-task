import angular from 'angular';
import Product from './product/product.module';
import ProductList from './product-list/product-list.module';
import ProductCreate from './product-create/product-create.module'

let componentModule = angular.module('app.components', [
    Product.name,
    ProductList.name,
    ProductCreate.name
]);

export default componentModule;
