// 


const products = [
	{
		id:1,
		title:"Ноутбук",
		price:"30000",
		img: "img/notebook.jpg",
	},
	{
		id:2,
		title:"Компьютер",
		price:"46000",
		img: "img/comp.jpg",
	},
	{
		id:3,
		title:"Планшет",
		price:"15000",
		img: "img/plansh.jpg",
	},
	{
		id:4,
		title:"Смартфон",
		price:"8560",
		img: "img/smartfon.jpg",
	},
	{
		id:5,
		title:"Принтер",
		price:"41000",
		img: "img/printer.jpg",
	},
	{
		id:6,
		title:"Монитор",
		price:"37000",
		img: "img/monitor.jpg",
	},
];

const renderProduct = par => 
	`<div class="product-item">
	<h3>${par.title}</h3>
	<img class="myimg" src="${par.img}">
	<p>Цена: ${par.price} руб.</p>
	</div>`

const renderPage = list => {
	const productsList = list.map(item => renderProduct(item));
	document.querySelector(".products").innerHTML = productsList.join(' ');
}

renderPage(products);

/*

1) 
В функцию renderProduct() передаём один параметр - объект из массива products.

2)
Элементы массива productsList, которые получаются после работы метода map(), разделяются
запятыми. Именно эти запятые и выводятся в вёрстку. Чтобы их удалить, я применил
метод join(), указав раделителем пробел. Этот метод склеивает все элементы массива 
в одну строку, в которой запятых нет.

3)
Добавил картинки в каждому товару. Добавил стили, чтобы было красивее.
Шрифты подключать не стал, адаптив делать не стал. Надеюсь, для ДЗ так достаточно. :)

*/

