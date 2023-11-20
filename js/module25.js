// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//     name: "Nata",
//     spec: "Buh",
//     riv: 4.9,
//     numOpoz: 1,
//     studentShowInfo() {
//         console.log(
//             `Студент ${thisname}, який вчиться на ${this.spec}, має середній бал ${this.riv} та ${this.numOpoz} пропущених занять`
//         );
//     },
// };

// student.studentShowInfo.bind(student)();
// student.studentShowInfo.call(student);
// student.studentShowInfo.apply(student);

// const student2 = {
//     name: "Max",
//     spec: "Frontend",
//     riv: 3.5,
//     numOpoz: 7,
// }

// student.studentShowInfo.bind(student2)();
// student.studentShowInfo.call(student2);
// student.studentShowInfo.apply(student2);

// const student3 = {
//     name: "Tam",
//     spec: "Econ",
//     riv: 2.1,
//     numOpoz: 1,
// }

// student.studentShowInfo.bind(student3)();
// student.studentShowInfo.call(student3);
// student.studentShowInfo.apply(student3);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// let buttonHtmlFunc = () => {
//     console.log("HTML - це мова гіпертекстової розмітки документів");
// }

// let buttonCssFunc = () => {
//     console.log("CSS - каскадні таблиці стилів");
// }

// let buttonHtml = document.querySelector('#html');
// buttonHtml.addEventListener('click', buttonHtmlFunc);

// let buttonCss = document.querySelector('#css');
// buttonCss.addEventListener('click', buttonCssFunc);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// let productName = prompt("Введіть назву товару");
// console.log(productName);
// let productPrice = +prompt("Введіть ціну товару за 1 кг");
// console.log(productPrice);
// let productNum = +prompt("Введіть кількість товару");
// console.log(productNum);

// let shop = (productName, productPrice, productNum) => {
//     let productAllPrice = productPrice * productNum;
//     console.log(`Ви замовили ${productName} на суму ${productAllPrice}`);
// };

// shop("banana", 30, 4.5);
// shop("cherry", 58, 1.3);
// shop("orange", 89, 3.4);
