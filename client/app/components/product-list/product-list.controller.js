class ProductListController {
  constructor(store, $state, $stateParams) {
    this.store = store;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.products = this.$stateParams ? this.$stateParams.products : this.store.get('products');
  }

  editProduct(product) {
      this.$state.go('product-edit', {productId: product.id});
  }

  deleteProduct(product) {
    let confirmation = confirm('Are you sure you want to delete this item?');
    if (confirmation) {
        this.products.splice(this.products.indexOf(product), 1);
        this.store.set('products', this.products);
    }
  }
}

ProductListController.$inject = ['store', '$state'];
export default ProductListController;