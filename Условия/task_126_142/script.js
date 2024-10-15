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

/*133*/
let task133 = confirm('Вам есть 18?');
if (task133) {
	alert('Скорее внесите свой вклад в развитие приюта для животных!');
} else {
	alert('Доступ запрещен');
}

/*134*/

let age = 17;
let adult;
if (age >= 18) {
    adult = true;
} else {
    adult = false;
}
console.log(adult);

/*135*/

// 1
let age135_1 = 17;
let adult135_1;
if (age135_1 >= 18) {
	 adult135_1 = true;
} else {
	adult135_1 = false;
}

console.log(adult135_1);

// 2
let age135_2 = 17;
let adult135_2;
if (age135_2 >= 18) {
	adult135_2 = true;
} else {
	adult135_2 = false;
}
console.log(adult135_2);

// 3
let age135_3 = 17;
let res135_3;
if (age135_3 >= 18) {
	if (age135_3 <= 23) {
         res135_3 = 'от 18 до 23';
	} else {
		res135_3 = 'больше 23';
	}
} else {
    res135_3 = 'меньше 18';
}
console.log(res135_3);

// 4
let age135_4 = 19;
let res135_4;
if (age135_4 >= 18) {
	if (age135_4 <= 23) {
		res135_4 = 'от 18 до 23';
	} else {
		res135_4 = 'больше 23';
	}
} else {
	res135_4 = 'меньше 18';
}
console.log(res135_4);

/*136*/

let min = 10;
if (min >= 0 && min <= 19) {
  console.log('1 треть');
} else if (min >= 20 && min <= 39) {
  console.log('2 треть');
} else if (min >= 40 && min <= 59) {
  console.log('3 треть');
}

/*137*/

let arr137 = [1, 2, 3];
if (arr137.length === 3) {
  let sum137 = arr137[0] + arr137[1] + arr137[2];
  console.log(sum137);
}

/*138*/

// 1
let str = 'alive';
if (str[0] == 'a') {
	console.log('yes');
}

// 2
let str2 = 'fox';
if (str2[str2.length - 1] == 'x') {
	console.log('yes');
}

// 3
let str3 = 'belong';
if (str3[0] == 'a' || str3[0] == 'b') {
	console.log('yes');
}

/*139*/

// 1
let num139_1 = '500';
 if (num139_1[num139_1.length - 1] == '0'){
    console.log('Последняя цифра = 0');
 }

// 2
 let num139_2 = '222';
 let last = num139_2[num139_2.length - 1];
 if (last == '0' || last == '2' || last == '4' || last == '6' || last == '8') {
     console.log('Число четное');
 } else {
     console.log("Число нечетное");
 } 

 /*140*/

// #1
let a140_1 = 14;
if (a140_1 % 2 === 0) {
	console.log('Число четное');
} else {
	console.log('Число нечетное');
}

// #2
let b = 15;
if (b % 3 === 0) {
	console.log('Число делится нацело на 3');
} else {
	console.log('Число делится на 3 с остатком');
}

/*141*/

// №1
let num140 = 1;
let num140_1 = 2;
if (num140 + num140_1 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// №2
let num140_2 = '1';
let num140_3 = '2';
if (Number(num140_2) + Number(num140_3) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//  №3
let num140_4 = '1';
let num140_5 = '2';
if (Number(num140_4) + Number(num140_5) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// №4
let num140_6 = 123;
let str140_4 = String(num140_6);
if (str140_4[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// №5
let num140_8 = 123;
let str140_5 = String(num140_8);

if (Number(str140_5[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

//  №6
let num140_9 = 123;
if (String(num140_9)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 141 №7
let num140_10 = 123;
let first = String(num140_10)[0];
if (first == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// №8
let num140_11 = 12;
let str140_8 = String(num140_11);
if (str140_8.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

// №9
let num140_12 = 12;
let str140_9 = String(num140_12);
if (Number(str140_9.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// 10
let num140_13 = 12;
if (String(num140_13).length === 2) {
 console.log('+++');
} else {
 console.log('---');
}

// 11
let num140_14 = 12;
if (String(num140_14).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

// 12
let num140_15 = 12;
if (String(num140_15).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// 13
let num140_16 = '123033'; // берем в кавычки, чтобы обращаться к цифрам
let sum140_1 = Number(num140_16[0]) + Number(num140_16[1]) + Number(num140_16[2]);
let sum140_2 = Number(num140_16[3]) + Number(num140_16[4]) + Number(num140_16[5]);
if (sum140_1 == sum140_2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

/*142*/

// №1
let month = 5; 
let season;
if (month == 12 || month == 1 || month == 2) {
    season = "Зима";
} else if (month >= 3 && month <= 5) {
    season = "Весна";
} else if (month >= 6 && month <= 8) {
    season = "Лето";
} else if (month >= 9 && month <= 11) {
    season = "Осень";
} else {
    season = "Неправильно введен порядок месяца";
}
console.log(season);

// №2
let str142_2 = 'alladin'; 
if (str142_2[0] == 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}

// №3
let num142_3 = 1234;
let str142_3 = String(num142_3);
if (str142_3[0] == '1' || str142_3[0] == '2' || str142_3[0] == '3') {
 console.log('Да');
} else {
    console.log('Нет');
}
   
// №4
let arr142_4 = 123;
let str142_4 = String(arr142_4);
let x142_4 = 0;
let sum142_4 = 0;
if (Number(str142_4) !== 0) {
  for (let i = 0; i < str142_4.length; i++) {
    x142_4 = Number(str142_4[i]);
    sum142_4 = sum142_4 + x142_4;
  }
  console.log('Сумма равна: ' + sum142_4);
}

//  №5
let num142_5 = 123006;
let y = String(num142_5);
let sum142_5 = Number(y[0]) + Number(y[1]) + Number(y[2]);
let sum142_6 = Number(y[3]) + Number(y[4]) + Number(y[5]);
if (sum142_5 === sum142_6) {
    console.log('Да');
} else {
    console.log('Нет');
}