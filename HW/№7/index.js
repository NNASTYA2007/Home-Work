//1  Створити функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”
// function hello1() {
//   return "Привіт JavaScript";
// }s

//2  Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»).
// function hello2(name) {
//   console.log("Привіт", name);
// }
// hello2("Настя");

//3  Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу.
// function mul(n, m) {
//   return console.log(n + m, n / m, n * m);
// }
// mul(4, 2);

//4   Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest і в результаті виводить масив цих аргументів у консоль.
// const myNewArrowFunction = (...args) => {
//   console.log(args);
// };

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

//5  Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат.
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)

// function myAverageScore([...args]) {
//   let i = 0;
//   for (let arg of args) {
//     i += arg;
//   }

//   let res = i / args.length;

//   if (res <= 100 && res >= 91) {
//     console.log("Myaveragescore: A");
//   } else if (res <= 90 && res >= 81) {
//     console.log("My average score: B ");
//   } else if (res <= 80 && res >= 71) {
//     console.log("My average score: C");
//   } else if (res <= 70) {
//     console.log("My average score: D");
//   }
// }

// myAverageScore([100, 75, 81, 96]);
// myAverageScore([45, 63, 85, 70]);
// myAverageScore([77, 82, 60, 58]);
// myAverageScore([93, 99, 93, 96]);
//тс ои1мшиа1има
///м/ир3ртьоь
