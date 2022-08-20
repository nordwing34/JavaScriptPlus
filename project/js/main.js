const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        catalogLocal: 'getProducts.json',
        basketUrl: '/getBasket.json',
        products: [],
        filtered: [],
        basket: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        showBasket: false,
        strSearch: ''
    },

    methods: {
        filter(){
            const regexp = new RegExp(this.strSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            console.log(this.filtered);
            console.log(this.products);
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            console.log(product.product_name);
        },
        remove(item){
            console.log(item);
        }
    },

    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filtered.push(el);
               }
           });

        this.getJson(`${API + this.basketUrl}`)
           .then(data => {
               for(let el of data.contents){
                   this.basket.push(el);
               }
           });

       this.getJson(`${this.catalogLocal}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filtered.push(el);
               }
           });
    }
})

