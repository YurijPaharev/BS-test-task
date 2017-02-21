class ProductCreateController {
    constructor($state, $stateParams, store, DEF_URL) {
        this.$state = $state;
        this.DEF_URL = DEF_URL;
        this.store = store;
        this.products = this.store.get('products');
        this.product = angular.copy(this.products.find(a => a.id == $stateParams.productId)) || {};
    }

    submit() {
        let modifiedProducts;
        if (this.product.id) {
            modifiedProducts = this.products.map(a => a.id === this.product.id ? this.product : a);
        } else {
            this.product.id = Math.round(Math.random() * 100000);
            this.products.push(this.product);
            modifiedProducts = this.products;
        }
        this.product.image = this.product.image || this.DEF_URL;
        this.store.set('products', modifiedProducts);
        this.$state.go('product-list', modifiedProducts);
    }
}

ProductCreateController.$inject = ['$state', '$stateParams', 'store', 'DEF_URL'];
export default ProductCreateController;