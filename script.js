/**
 * Класс списка товаров
 * @param container: элемент на странице, куда нужно выводить список товаров
 */
class ProductList{
	constructor(container = '.products'){
		this.container = container;
		this.totalCostElem = '.totalCost';
		this.shopBasket = '.basket';
		this.products = [];				// массив товаров
		this._fetchProducts();			// заплнение массива списком товаров
		this._totalCost();				// считаем общую сумму товаров
		this.render();					// вывод товаров на страницу
	}

	/**
	 * Заполнение массива списком товаров
	 * Метод локальный (недоступен из других классов)
	 */
	_fetchProducts(){
		this.products = [
			{id:1, title:"Ноутбук", price:"30000", img: "img/notebook.jpg"},
			{id:2, title:"Компьютер", price:"46000", img: "img/comp.jpg"},
			{id:3, title:"Планшет", price:"15000", img: "img/plansh.jpg"},
			{id:4, title:"Смартфон", price:"8560", img: "img/smartfon.jpg"},
			{id:5, title:"Принтер", price:"41000", img: "img/printer.jpg"},
			{id:6, title:"Монитор", price:"37000", img: "img/monitor.jpg"},
		];
	}

	/**
	 * Общая стоимость товаров
	 */
	_totalCost(){
		const totalCostDiv = document.querySelector(this.totalCostElem);
		let totalCost = 0;
		this.products.forEach(item => {
			totalCost += +(item.price);
		});
		totalCostDiv.insertAdjacentHTML('beforeend', `Общая стоимость: <span>${totalCost}</span> рублей`);
	}

	/**
	 * Вывод на страницу
	 */
	render(){
		const blockProduct = document.querySelector(this.container);
		for(let product of this.products){
			const item = new ProductItem(product);
			blockProduct.insertAdjacentHTML('beforeend', item.render());
		}
	}
}

/**
 * Класс отдельного товара
 * @param product: объект с параметрами товара
 */
class ProductItem{
	constructor(product){
		this.id = product.id;
		this.title = product.title;
		this.price = product.price;
		this.img = product.img;
	}

	render(){
		return `<div class="product-item">
			<h3 class="product_title">${this.title}</h3>
			<img class="myimg" src="${this.img}">
			<p>Цена: ${this.price} руб.</p>
			<button class="product_button">Купить</button>
			</div>`
	}
}


/**
 * Класс корзины товаров
 */
class Basket{
	constructor(basket = '.basket'){
		this.basket = basket;
	}
// Я думаю, вот что здесь должно быть.
// Корзина должна хранить в каком-то массиве объекты тех товаров, которые в неё добавлены.
// Корзина должна уметь показывать количество добавленных товаров в зелёном кружке.
// При клике на корзину нужно открывать новую страницу или модальное окно, чтобы показать добавленные товары.
}


let list = new ProductList();


