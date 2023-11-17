// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let num = -3;
// if (num > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

// let str = true;

// (str === "test") ? console.log(true) : console.log(false);

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let num = 13;

// if (num > 10) {
//     console.log(num - 5);
// } else {
//     console.log(num + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let month = prompt("Введіть номер місяця");
// let numMonth = Number(month);

// switch (numMonth) {
//     case 1:
//         month = "Січень";
//         break;
//     case 2:
//         month = "Лютий";
//         break;
//     case 3:
//         month = "Березень";
//         break;
//     case 4:
//         month = "Квітень";
//         break;
//     case 5:
//         month = "Травень";
//         break;
//     case 6:
//         month = "Червень";
//         break;
//     case 7:
//         month = "Липень";
//         break;
//     case 8:
//         month = "Серпень";
//         break;
//     case 9:
//         month = "Вересень";
//         break;
//     case 10:
//         month = "Жовтень";
//         break;
//     case 11:
//         month = "Листопад";
//         break;
//     case 12:
//         month = "Грудень";
//         break;
//     default:
//         console.log("Невірний ввод. Повторіть ввод");
// }
// console.log(`Ви ввели ${month}`);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let result = 5;

// let num = +prompt("Введіть трьохзнакове число або exit для виходу");
// console.log(num);

// if (isNaN(num)) {
//     console.log("Ви ввели не число");
// } else if (num < 100 || num > 999) {
//     console.log("Ви ввели не трьохзнакове число");
// } else {
//     result = result + num;
//     console.log(result);
// }
