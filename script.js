/**
 * Работа с простейшим собственным модулем
 */
// const c = require('./func');
// console.log(c.myFunc.a(11));
// console.log(c.myFunc.b(4));


/**
 * Работа со встроенным модулем
 */
// const os = require('os');
// console.log(os.cpus());
// console.log(os.freemem());


/**
 * Работа с файловой системой
 */
// Запись в файл
// const fs = require('fs')
// let users = [{name: "Иван", id: 12}];
// fs.writeFile('test.json', JSON.stringify(users), err => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log('Данные сохранены');
// 	}
// });

// Чтение данных из файла
// let oneUser = '{"name": "Семён", "id": 19}';
// fs.readFile('test.json', 'UTF-8', (err, data) => {	// data - исходник прочитанного файла
// 	if(err){
// 		console.log(err);
// 	} else {
// 		let twoUser = JSON.parse(data);
// 		twoUser.push(JSON.parse(oneUser));
// 		fs.writeFile('test.json', JSON.stringify(twoUser), err => {
// 			if(err){
// 				console.log(err);
// 			} else {
// 				console.log('Новые данные сохранены');
// 			}
// 		});
// 	}
// });


/**
 * Работа с внешними модулями
 */
// Метод moment - установка и использование
// const moment = require('moment');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Метод http - для обработки запросов на стороне сервера
const http = require('http');
const server = http.createServer((req, res) => {
	// req - оъект для получения данных от клиента
	// res - объект для передачи данных клиенту
	if(req.url == '/'){
		res.write('Welcome to my server!');
		res.end();
	}
});

server.on('connection', socket => {
	console.log('Соединение установлено');
});

server.listen(3000);

