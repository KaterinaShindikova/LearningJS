//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function doubleNumber(a) {
  return a ** 2;
}
console.log(doubleNumber(2));

const doubleNumber = function (a) {
  return a ** 2;
};
console.log(doubleNumber(2));

const doubleNumber = (a) => a ** 2;
console.log(doubleNumber(2));

//Сделайте функцию, которая возвращает сумму двух чисел

function sum(a, b) {
  return a + b;
}
console.log(sum(7, 4));

const sum = function (a, b) {
  return a + b;
};
console.log(sum(7, 4));

const sum = (a, b) => a + b;
console.log(sum(7, 4));

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function countNumber(a, b = 0, c = 0) {
  return (a - b) / c;
}
console.log(countNumber(7, 4));

const countNumber = function (a, b = 0, c = 0) {
  return (a - b) / c;
};
console.log(countNumber(7, 4, 3));

const countNumber = (a, b = 0, c = 0) => (a - b) / c;
console.log(countNumber(16, 4, 3));

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function weekDay(a) {
  if (a >= 1 && a <= 7) {
    let day;
    if (a === 1) day = "monday";
    if (a === 2) day = "tuesday";
    if (a === 3) day = "wen";
    if (a === 4) day = "thursday";
    if (a === 5) day = "fr";
    if (a === 6) day = "sat";
    if (a === 7) day = "sund";
    return day;
  } else {
    return "error";
  }
}
console.log(weekDay(6));

const weekDay = function (a) {
  if (a >= 1 && a <= 7) {
    let day;
    if (a === 1) day = "monday";
    if (a === 2) day = "tuesday";
    if (a === 3) day = "wen";
    if (a === 4) day = "thursday";
    if (a === 5) day = "fr";
    if (a === 6) day = "sat";
    if (a === 7) day = "sund";
    return day;
  } else {
    return "error";
  }
};
console.log(weekDay(1));

const weekDay = (a) => {
  if (a >= 1 && a <= 7) {
    let day;
    if (a === 1) day = "monday";
    if (a === 2) day = "tuesday";
    if (a === 3) day = "wen";
    if (a === 4) day = "thursday";
    if (a === 5) day = "fr";
    if (a === 6) day = "sat";
    if (a === 7) day = "sund";
    return day;
  } else {
    return "error";
  }
};
console.log(weekDay(6));

//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function num(a, b) {
  return a === b;
}
console.log(num(7, 4));

const num = function (a, b) {
  return a === b;
};
console.log(num(4, 4));

const num = (a, b) => a === b;
console.log(num(7, 4));

//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
function numCount(a, b) {
  return a + b > 10;
}
console.log(numCount(7, 4));

const numCount = function (a, b) {
  return a + b > 10;
};
console.log(numCount(4, 4));

const numCount = (a, b) => a + b > 10;
console.log(numCount(7, 4));

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function isNegative(a) {
  return a < 0;
}
console.log(isNegative(0));

const isNegative = function (a) {
  return a < 0;
};
console.log(isNegative(0));

const isNegative = (a) => a < 0;
console.log(isNegative(-4));

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(a) {
  return a > 0 && a < 10;
}
console.log(isNumberInRange(5));

const isNumberInRange = function (a) {
  return a > 0 && a < 10;
};
console.log(isNumberInRange(0));

const isNumberInRange = (a) => a > 0 && a < 10;
console.log(isNumberInRange(0));

//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(a) {
  return a % 2 === 0;
}
console.log(isEven(6));

const isEven = function (a) {
  return a % 2 === 0;
};
console.log(isEven(6));

const isEven = (a) => a % 2 === 0;
console.log(isEven(9));
