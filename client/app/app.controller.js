class appController {
    constructor(Products, store) {
       this.Products = Products;
       this.store = store;
    }

    $onInit() {
        this.store.get('products') || this.store.set('products', this.Products);
    }
}

appController.$inject = ['Products', 'store'];
export default appController;