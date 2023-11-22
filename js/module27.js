// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// function Calculator(a ,b) {
//     this.a = a;
//     this.b = b;
//     this.read = function() {
//         a = +prompt(`Введіть перше число`);
//         b = +prompt(`Введіть друге число`);
//         this.sum(a, b);
//         this.mul(a, b);
//     }

//     this.sum = function(a, b) {
//         return console.log(a + b);
//     }

//     this.mul = function(a, b) {
//         return console.log(a * b);
//     }
// }

// let first = new Calculator();
// first.read();