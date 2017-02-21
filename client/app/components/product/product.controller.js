class ProductController {
  constructor($stateParams, store, $state) {
    this.$state = $state;
    this.store = store;
    this.products = this.store.get('products');
    this.product = this.products.find(a => a.id == $stateParams.productId);
  }

    editProduct(product) {
        this.$state.go('product-edit', {productId: product.id});
    }
}

ProductController.$inject = ['$stateParams', 'store', '$state'];
export default ProductController;
