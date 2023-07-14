//  ! alert, prompt-, confirm-запрашивает подверждение
// alert("Hello")
//  let name = prompt("введите имя")
//  console.log(name);
// интерполяция========втроенное выражение======шаблонное вражение
//  alert(`hello ${name} welcome to our website!`);
// let age = confirm("вам есть 18?")
// console.log(age);

// ! to Bfalseoolean
// console.log(Boolean(0));  //false
// console.log(Boolean(1));  //true
// console.log(Boolean(-5)); //true
// console.log(Boolean(null));  //false
// console.log(Boolean(undefined));  //false
// console.log(Boolean(""));  //false
// console.log(Boolean(" "));  //true

// ! сравнение
// console.log(20 > 30); //false
// console.log(20 < 30); //true
// console.log(19 >= 39); //true

// строгая равенство (сравнивает по типу данных и по значению)
// console.log(20 === 20); //true
// 1 присваевание
// 2 сравнение
// 3 сравнение

// не сторгая равенство (сравнивает только по значанию)
// console.log('20' === 20); //true

// let value1 = true;
// let value2 = 1;
// console.log(value1 == value2);

// ! условные операторы
//  условие ? () : ()
// let currentUser = false;
// currentUser ? alert("welcome"): alert ("зарегестрируйтесь или войдите в совй аккаунт");

// 2
// let password = "Ba123";
// let passwordConfirm = "Ba123";
// password === passwordConfirm ? alert ("success") : alert ("пароли не совпадают")

// 3
// let age = prompt ("сколько вам лет?");
// age >= 18 && age <= 70 ? console.log ("welcome") : console.log("reject")

// 4
// let productusInCart = 10;
// productusInCart > 0 ? alert(`в вашей корзине есть ${productusInCart}`) : alert("карзина пуста");

// ! if.. else if.. else
// let userRole = 'user';
// if (userRole === "admin") {
//     console.log("вы админ!");
// } else {
//     console.log("вы юзер!");
// }

// let age = +prompt("enter your age");
// console.log(typeof age);
// let canDrive = null;
// if(age >= 17){
//     canDrive = true;
// } else{
//     canDrive = false;
// }
// console.log(canDrive);

// let num1 = +prompt("введите первое чисто");
// let operator = prompt("выберите математический оператор(*, +, /, -)");
// let num2 = +prompt("введите второе число");
// if(operator === "+") {
//     alert(num1 + num2)
// } else if(operator === "-") {
//     alert(bum1 - num2)
// } else if (operator === "*") {
//     alert(num1 * num2)
// } else if(operator === "/") {
//     alert(num1 / num2)
// } else {
//     alert("введите корректный математический оператор")
// }

//? строгий условний оператор ! switch case
// let season = +prompt("выберите сезон");
// console.log(season === 1);
// switch(season){
//     case 1: console.log("зима"); break //season ===1
//     case 2: console.log("весна"); //season ===2
//     case 3: console.log("лето"); //season ===3
//     case 4: console.log("осень"); //season ===4
//     default: console.log('выберите число от 1 до 4');
// }

// let tag = prompt("как написать тег div")
// switch (tag) {
//     case '<h1></h1>': console.log('this is h1'); break;
//     case '<a></a>': console.log('this is link tag'); break;
//     case '<div>': console.log('try again!'); break;
//     case "<div></div>": console.log('correct!'); break;
//     default: console.log("wrong!");
// }

// ! логический опараторы
// ! логическое и &&
// let num1 = 100;
// let num2 = 200;
// if(num1 < 500 && num2 , 500 && num1 > 0 ) {
//     alert("оба числа меньше чем 500")
// // }
// let products = ["milk", 'bread']
// let products1 = products[0]
// let products2 = products[1]
// console.log(products1, products2);
// if(products1 === 'milk' && products2 === "bread") {
//     console.log(" все окей");
// } else {
//     console.log("все плохо, мы сделали не правильно");
// }

// ! логическое ИЛИ ||
// let chocolate = "bounty";
// if(chocolate === "sneakers" || chocolate === "kitkat") {
//     console.log("okay");
// } else {
//     console.log("not okay");
// }

// ! логическое НЕ !value
// console.log(!true);
// console.log(!false);
// console.log(!null);
// console.log(3 !== 3);
