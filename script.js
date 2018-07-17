var profit = +prompt("Ваш бюджет?");
var	shopName = prompt("Название Вашего магазина?");

var quest1 = prompt("Какой тип товаров будем продавать?");
var quest2 = prompt("Какой тип товаров будем продавать?");
var quest3 = prompt("Какой тип товаров будем продавать?");

var employersOp = {
	name: "Sari",
	age: "42",
	work: "manager"
};

var mainList = {
	summa: profit,
	nameShop: shopName,
	shopGoods: [quest1, quest2, quest3],
	employers: employersOp
};
console.log(mainList.employers);

alert("Ваш бюджет на 1 день: " + mainList.summa/30 + " рублей.");