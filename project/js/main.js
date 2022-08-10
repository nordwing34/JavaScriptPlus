const API  = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];        //массив товаров из JSON документа
        this._getProducts()
            .then(data => {
                 this.goods = data;
                 this.#render()
            });
    }

    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }


    #render(){
        const block = document.querySelector(this.container);
        const sumProducts = document.querySelector(".sumProducts");
        let allCost = 0;

        for (let product of this.goods){
            const productObj = new ProductItem(product);
            allCost += product.price;
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        sumProducts.insertAdjacentHTML('beforeend', `Общая стоимость: <span>${allCost}</span> рублей`);
    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`
    }
}


class BasketList{
    constructor(contBask = '.basket'){
        this.contBask = contBask;
        this.goodsBask = [];
        this._getBask()
            .then(data => {
                 this.goodsBask = data;
                 this.#render()
            });
    }

    _getBask(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    #render(){
        const block = document.querySelector(this.contBask);

        for (let product of this.goodsBask.contents){
            const basketObj = new BasketItem(product);
            block.insertAdjacentHTML('beforeend', basketObj.render());
        }
    }
}


class BasketItem{
    constructor(product){
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
    }

    render(){
        return `<div class="basket_item">
            <p>ID: ${this.id}</p>
            <h3>Название: ${this.title}</h3>
            <p>Цена: ${this.price} $</p>
            <p>Количество: ${this.quantity}</p>
        </div>`
    }
}



let list = new ProductsList();
let bask = new BasketList();


// ---------------------------------------------------
window.addEventListener('load', () => {
    const basketButton = document.querySelector('.btn-cart');
    const basketWindow = document.querySelector('.basket');
    const basketWindowClose = document.querySelector('.basket_close');

    basketButton.addEventListener('click', () => {
        basketWindow.classList.toggle('active');
    });

    basketWindowClose.addEventListener('click', () => {
       basketWindow.classList.remove('active'); 
    });
});

