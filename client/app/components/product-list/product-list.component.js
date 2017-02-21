import template from './product-list.html';
import controller from './product-list.controller';
import './product-list.scss';

let productListComponent = {
  transclude: true,
  template,
  controller
};

export default productListComponent;
