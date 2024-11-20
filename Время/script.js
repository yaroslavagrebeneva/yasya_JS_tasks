// Задание 311 №1
console.log('Результат задачи 311:');
let date311 = new Date();
console.log('Текущий день: ' + (date311.getDate()));   
// Задание 311 №2  
console.log('Текущий месяц: ' + (date311.getMonth() + 1)); // Месяцы начинаются с 0
// Задание 311 №3 
console.log('Текущий год: ' + (date311.getFullYear())); 

// Задание 312 №1
console.log('Результат задачи 312 №1:');
function addZero(num) {
    if (num >= 0 && num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }
  let date312 = new Date();

  let hours312 = addZero(date312.getHours());
  let minutes312 = addZero(date312.getMinutes());
  let seconds312 = addZero(date312.getSeconds());
  let day312 = addZero(date312.getDate());
  let month312 = addZero(date312.getMonth() + 1);
  let year312 = date312.getFullYear();
  console.log(hours312 + ':' + minutes312 + ':' + seconds312 + ' ' + day312 + '.' + month312 + '.' + year312);
  
// Задание 313 №1
console.log('Результат задачи 313 №1:');
let str313 = '2024-11-01'; 
let res313 = str313.split('-').reverse().join('.'); 
console.log(res313);

console.log('Результат задачи 314:');
// Задание 314 №1
let date314 = new Date();
let dayNumber = date314.getDay();
console.log("Номер текущего дня недели:", dayNumber);
// Задание 314 №2
let isWeekend = (dayNumber === 0 || dayNumber === 6);
if (isWeekend) {
    console.log("Сегодня выходной день.");
} else {
    console.log("Сегодня рабочий день.");
}
// Задание 314 №3
let daysUntilSunday = (7 - dayNumber) % 7; // % 7 для обработки случая, когда сегодня воскресенье
console.log("Дней до ближайшего воскресенья:", daysUntilSunday);

// Задание 315 №1
console.log('Результат задачи 315 №1:');
let date315 = new Date();
let month315  = date315.getMonth();
let months315 = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
console.log(months315[month315]);

// Задание 316 №1
console.log('Результат задачи 316 №1:');
let date316 = new Date(2006, 5, 30); 
let day316  = date316.getDay();
let days316 = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days316[day316]);

// Задание 317 №1
console.log('Результат задачи 317 №1:');
let date317 = new Date(2025, 0, 1, 0, 0, 0);
console.log(date317.getTime());

// Задание 318 №1
console.log('Результат задачи 318 №1:');
let date1988 = new Date(1988, 2, 1); 
let date2000 = new Date(2000, 0, 10);
let diff318_1 = date2000.getTime() - date1988.getTime();
let daysDiff318_1 = diff318_1 / (1000 * 60 * 60 * 24);
console.log("Количество дней между 1 марта 1988 года и 10 января 2000 года:", Math.floor(daysDiff318_1));

// Задание 318 №2
console.log('Результат задачи 318 №2:');
let birth_date = new Date(2006, 6, 30); 
let now = new Date()
let yearsDiff = now.getFullYear() - birth_date.getFullYear();
let monthsDiff = now.getMonth() - birth_date.getMonth();
// Общее количество месяцев
let totalMonths = yearsDiff * 12 + monthsDiff;
// Проверяю, если текущий день меньше дня рождения в текущем месяце
if (now.getDate() < birth_date.getDate()) {
    totalMonths--; // Уменьшаю на 1, если месяц неполный
}
console.log("Количество месяцев между моим рождением и текущей датой:", totalMonths);
 
console.log('Результат задачи 319:');
let date319_1 = new Date(2000, 8, 1); 
let date319_2 = new Date(2010, 1, 15); 
// Задание 319 №1
let diffMilliseconds319 = date319_2 - date319_1; 
console.log("Разница в миллисекундах:", diffMilliseconds319);
// Задача 319 №2
let diffDays319 = diffMilliseconds319 / (1000 * 60 * 60 * 24); 
console.log("Разница в днях:", Math.floor(diffDays319));
// Задача 319 №3
let monthsDiff319 = (date319_2.getFullYear() - date319_1.getFullYear()) * 12 + (date319_2.getMonth() - date319_1.getMonth());
console.log("Разница в месяцах:", monthsDiff319);
// Задача 319 №4
let yearsDiff319 = date319_2.getFullYear() - date319_1.getFullYear();
console.log("Разница в годах:", yearsDiff319);

// Задание 320 №1
// let date = new Date(2018, 15, 1);
// console.log(date);
//JavaScript преобразует следующий момент времени: 7 марта 2018 года

// Задание 320 №2
// let date = new Date(2018, 15, 1);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 1 марта 2019 года

// Задание 320 №3
// let date = new Date(2018, 3, 31);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 31 апреля 2018 года

// Задание 320 №4
// let date = new Date(2018, 1, 31);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 1 марта 2018 года

// // Задание 320 №5
// let date = new Date(2018, 12, 33);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 2 февраля 2019

// // Задание 320 №6
// let date = new Date(2018, 33, 33);
// console.log(date);
//JavaScript преобразует следующий момент времени: 4 марта 2020 года

// Задание 320 №7
// let date = new Date(2018, 5, 0);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 31 мая 2018 года

// Задание 320 №8
// let date = new Date(2018, 0, 0);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 31 декабря 2017 года

// Задание 320 №9
// let date = new Date(2018, -12, -33);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 29 ноября 2016 года

// Задание 320 №10
// let date = new Date(2018, 0, 1, 23, 0, 60);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 2 января 2018 года, 0 часов

// Задание 320 №11
// let date = new Date(2018, 0, 1, 23, 60, 0);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 2 января 2018 года, 0 часов

// Задание 320 №12
// let date = new Date(2018, 0, 1, 100, 100, 100);
// console.log(date); 
//JavaScript преобразует следующий момент времени: 3 января 2018 года, 13:40:00


// Задание 321 №1
console.log('Результат задачи 321 №1:');
function getLastDayOfMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
const lastDayMay2023 = getLastDayOfMonth(2023, 5); 
console.log(lastDayMay2023);

// Задание 321 №2
console.log('Результат задачи 321 №2:');
const lastDayMay2025 = getLastDayOfMonth(2025, 5);
const lastDate = new Date(2025, 4, lastDayMay2025); 
const dayOfWeek = lastDate.getDay();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
console.log("Последний день мая 2025 года:", days[dayOfWeek]);

// Задание 322 №1
console.log('Результат задачи 322 №1:');
function isLeap(year) {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          return year % 400 === 0;
      }
      return true;
  }
  return false;
}
console.log("Год високосный? Ответ:",isLeap(2020));
console.log("Год високосный? Ответ:",isLeap(2023)); 

// Задание 323 №1
console.log('Результат задачи 323 №1:');
function checkDate(year, month, day) {
  let date = new Date(year, month, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
console.log("Дата 31.12.2025 введена корректно? Ответ:",checkDate(2025, 11, 31)); 
console.log("Дата 32.12.2025 введена корректно? Ответ:",checkDate(2025, 11, 32)); 

// Задание 324 №1
console.log('Результат задачи 324 №1:');
let now_date = new Date();
let date = new Date(now_date.getFullYear(), 11, 31); 
let day_week = date.getDay();
const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
console.log("31 декабря " + now_date.getFullYear() + " года будет день недели - " + daysOfWeek[day_week]);

// Задание 325 №1
console.log('Результат задачи 325 №1:');
now_date = new Date();
let previousMonthDate = new Date(now_date.getFullYear(), now_date.getMonth() - 1, now_date.getDate());
const days_of_week = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
console.log("День недели " + previousMonthDate.toLocaleDateString() + " был " + days_of_week[previousMonthDate.getDay()]);

// Задание 325 №2
console.log('Результат задачи 325 №2:');
now_date = new Date();
let firstDayPreviousMonth = new Date(now_date.getFullYear(), now_date.getMonth() - 1, 1);
const day = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
console.log("Первое число предыдущего месяца " + firstDayPreviousMonth.toLocaleDateString() + " было в/во " + day[firstDayPreviousMonth.getDay()]);

// Задание 326 №1
console.log('Результат задачи 326 №1:');
let nows = new Date();
let nextYear = nows.getFullYear() + 1;
let dateNextYearEnd = new Date(nextYear, 11, 31); 
let dayOfWeekNextYearEnd = dateNextYearEnd.getDay();
const dayys = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
console.log('31 декабря ' + nextYear + ' года будет: ' + dayys[dayOfWeekNextYearEnd]);

// Задание 326 №2
console.log('Результат задачи 326 №2:');
let dateNextYearSameDate = new Date(nows.getFullYear() + 1, nows.getMonth(), nows.getDate());
let dayOfWeekNextYearSameDate = dateNextYearSameDate.getDay();
console.log('В следующем году в такую же дату будет: ' + dayys[dayOfWeekNextYearSameDate]);

// Задание 326 №3
console.log('Результат задачи 326 №3:');
let dateLastYearSameDate = new Date(nows.getFullYear() - 1, nows.getMonth(), nows.getDate());
let dayOfWeekLastYearSameDate = dateLastYearSameDate.getDay();
console.log('Год назад в такую же дату был: ' + dayys[dayOfWeekLastYearSameDate]);

// Задание 327 №1
console.log('Результат задачи 327 №1:');
let startDate = new Date(new Date().getFullYear(), 0, 1); 
let endDate = new Date(new Date().getFullYear(), 8, 10); 
let daysBetween = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
console.log('Количество дней между 1 января и 10 сентября текущего года: ' + daysBetween);

// Задание 327 №2
console.log('Результат задачи 327 №2:');
let currentDate = new Date();
let startOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 10); 
let startOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 20); 
let daysBetweenCurrentAndNext = Math.floor((startOfNextMonth - startOfCurrentMonth) / (1000 * 60 * 60 * 24));
console.log('Количество дней между 20 числом текущего месяца и 10 числом следующего: ' + daysBetweenCurrentAndNext);

// Задание 328 №1
console.log('Результат задачи 328 №1:');
let task328 = new Date();
let noonYesterday = new Date(task328.getFullYear(), task328.getMonth(), task328.getDate() - 1, 12);
let differenceInMilliseconds = task328 - noonYesterday;
let differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
console.log('Часов, прошедших с полдня вчерашнего дня: ' + differenceInHours);

// Задание 329 №1
console.log('Результат задачи 329 №1:');
now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
differenceInMilliseconds = now - startOfDay;
differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
console.log('Часов, прошедших с начала дня: ' + differenceInHours);

// Задание 330 №1
console.log('Результат задачи 330 №1:');
now = new Date();
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let differenceToEndInMilliseconds = endOfDay - now;
let differenceToEndInHours = differenceToEndInMilliseconds / (1000 * 60 * 60);
console.log('Часов, оставшихся до конца дня: ' + differenceToEndInHours);

// Задание 331 №1
console.log('Результат задачи 331 №1:');
now = new Date();
let currentYear = now.getFullYear();
let startYear = 2000;
let weekendCount = 0;
for (let year = startYear; year <= currentYear; year++) {
    let date = new Date(year, 0, 1); 
    let dayOfWeek = date.getDay(); 
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekendCount++;
    }
}
console.log('Количество раз, когда 1 января попадало на выходной день с 2000 года до ' + currentYear + ' : ' + weekendCount);
