/*task#127*/
// №1
let day127_1 = 25; 
if (day127_1 >= 1 && day127_1 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_1 >= 11 && day127_1 <= 20) {
  console.log('Вторая декада месяца');
} else if (day127_1 >= 21 && day127_1 <= 31) {
  console.log('Третья декада месяца');
}

// №2
let day127_2 = 35;
if (day127_2 >= 1 && day127_2 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_2 >= 11 && day127_2 <= 20) {
  console.log('Вторая декада месяца');
} else if (day127_2 >= 21 && day127_2 <= 31) {
  console.log('Третья декада месяца');
} else {
  console.log('Неверное значение переменной day');
}

/*task#128*/
let num128 = 15;
let sum128;
if ((num128 >= 0) && (num128 <= 99)) {
    sum128 =(num128 / 10) + num128 % 10; 
	if (sum128 <= 9) {
		console.log('Сумма цифр однозначна');
	} else {
		console.log('Сумма цифр двузначна');
	}
} 

/*task#129*/
let lang = 'ru';
switch (lang) {
    case 'ru':
		console.log('рус');
	break;
    case 'en':
        console.log('анг');
    break;
    case 'de':
		console.log('нем');
	break;
    default:
		console.log('язык не поддерживается');
	break;
}

/*131*/
let num131 = 1;
let res131 = num131 >= 0 ? '1' : '2';
console.log(res131);

/*132*/
// №1
let a132_1 = 2 * (3 - 1);
let b132_1 = 6 - 2;
console.log(a132_1 == b132_1);

// №2
let a132_2 = 5 * (7 - 4);
let b132_2 = 1 + 2 + 7;
console.log( a132_2 >= b132_2)

// №3
let a132_3 = 2 ** 4;
let b132_3 = 4 ** 2;
console.log(a132_3 != b132_3);

