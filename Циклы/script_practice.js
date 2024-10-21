/*167-Practice*/

/* Задание 1 */
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/* Задание 2 */
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

/* Задание 3 */
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

/* Задание 4 */
let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4.push('x');
}
console.log(arr4);

/* Задание 5 */
let arr5 = [];
for (let i = 1; i <= 10; i++) {
    arr5.push(i);
}
console.log(arr5);

/* Задание 6 */
let arr6 = [1, 5, -3, 8, 12, 4, 0, 6];
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > 0 && arr6[i] < 10) {
        console.log(arr6[i]);
    }
}

/* Задание 7 */
let arr7 = [2, 3, 5, 7, 9, 12];
let found = false;
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] === 5) {
        found = true;
        break;
    }
}
console.log(found ? "Элемент 5 найден" : "Элемент 5 не найден");

/* Задание 8 */
let arr8 = [1, 2, 3, 4, 5];
let sum8 = 0;
for (let i = 0; i < arr8.length; i++) {
    sum8 += arr8[i];
}
console.log("Сумма элементов массива: " + sum8);

/* Задание 9 */
let arr9 = [1, 2, 3, 4];
let sumSquares = 0;
for (let i = 0; i < arr9.length; i++) {
    sumSquares += arr9[i] * arr9[i];
}
console.log("Сумма квадратов элементов: " + sumSquares);

/* Задание 10 */
let arr10 = [1, 2, 3, 4, 5];
let sum10 = 0;
for (let i = 0; i < arr10.length; i++) {
    sum10 += arr10[i];
}
let average10 = sum10 / arr10.length;
console.log("Среднее арифметическое: " + average10);

/* Задание 11 */
let num11 = 5;
let factorial = 1;
for (let i = num11; i >= 1; i--) {
    factorial *= i;
}
console.log("Факториал числа " + num11 + ": " + factorial);

/* Задание 12 */
let arr12 = [];
for (let i = 10; i >= 1; i--) {
    arr12.push(i);
}
console.log(arr12);

/* Задание 13 */
let arr13 = [2, -5, 10, -7, 8];
let sumPositives = 0;
for (let i = 0; i < arr13.length; i++) {
    if (arr13[i] > 0) {
        sumPositives += arr13[i];
    }
}
console.log("Сумма положительных элементов: " + sumPositives);

/* Задание 14 */
let arr14 = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr14.length; i++) {
    let firstDigit = arr14[i].toString()[0];
    if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
        console.log(arr14[i]);
    }
}

/* Задание 15 */
let arr15 = [1, 2, 3, 4, 5];
for (let i = arr15.length - 1; i >= 0; i--) {
    console.log(arr15[i]);
}

/* Задание 16 */
let arr16 = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < arr16.length; i++) {
    if (arr16[i] === i) {
        console.log(arr16[i]);
    }
}

/* Задание 17 */
let arr17 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr17.length; i++) {
    document.write(arr17[i] + '<br>');
}

/* Задание 18 */
let arr18 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr18.length; i++) {
    document.write('<p>' + arr18[i] + '</p>');
}

/* Задание 19 */
let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < days.length; i++) {
    if (days[i] === 'Суббота' || days[i] === 'Воскресенье') {
        document.write('<b>' + days[i] + '</b><br>');
    } else {
        document.write(days[i] + '<br>');
    }
}

/* Задание 20 */
let day = 3; // текущий день недели
for (let i = 0; i < days.length; i++) {
    if (i === day) {
        document.write('<i>' + days[i] + '</i><br>');
    } else {
        document.write(days[i] + '<br>');
    }
}

/* Задание 21 */
let obj21 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj21) {
    obj21[key] *= 1.1;
}
console.log(obj21);

/* Задание 22 */
for (let key in obj21) {
    if (obj21[key] <= 400) {
        obj21[key] *= 1.1;
    }
}
console.log(obj21);

/* Задание 23 */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj23 = {};
for (let i = 0; i < arr1.length; i++) {
    obj23[arr1[i]] = arr2[i];
}
console.log(obj23);

/* Задание 24 */
let obj24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys = 0;
let sumValues = 0;
for (let key in obj24) {
    sumKeys += Number(key);
    sumValues += obj24[key];
}
console.log("Результат деления: " + (sumKeys / sumValues));

/* Задание 25 */
let obj25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keys = [];
let values = [];
for (let key in obj25) {
    keys.push(key);
    values.push(obj25[key]);
}
console.log(keys);
console.log(values);

/* Задание 26 */
let obj26 = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr26 = [];
for (let key in obj26) {
    let firstDigit = obj26[key].toString()[0];
    if (firstDigit === '1' || firstDigit === '2') {
        arr26.push(obj26[key]);
    }
}
console.log(arr26);

/* Задание 27 */
let arr27 = ['a', 'b', 'c', 'd', 'e'];
let obj27 = {};
for (let i = 0; i < arr27.length; i++) {
    obj27[i + 1] = arr27[i];
}
console.log(obj27);

/* Задание 28 */
let obj28 = {};
for (let i = 0; i < arr27.length; i++) {
    obj28[arr27[i]] = i + 1;
}
console.log(obj28);
