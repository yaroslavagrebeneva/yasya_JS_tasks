// Задание 259 №1
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;	
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let func = test();
// console.log(func()); 
// Результатом выведения в консоль будет: 1

// Задание 259 №2
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// console.log(test()()); 
// Результатом выведения в консоль будет: 3

// Задание 259 №3
// function test() {
// 	let num1 = 1;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let num2 = 2;
// let func3 = test();
// console.log(func3()); 
// Результатом выведения в консоль будет: 3

// Задание 259 №4
// function test() {
// 	let num = 1;
// 	return function() {
// 		return num;
// 	}
// }
// let num = 2;
// let func4 = test();
// console.log(func4());
// Результатом выведения в консоль будет: 1


/* Task#261 №1 */
console.log("Результат задания 261 №1:");
function createYasyaCounter() {
	let count = 100; 
	return function() {
		count += 10;
		console.log(count);
	};
}
let uniqueCounter = createYasyaCounter();
uniqueCounter();
uniqueCounter();
uniqueCounter();

/* Task#261 №2 */
console.log("Результат задания 261 №2:");
function createYasyaDecrementer() {
	let number = 20;
	return function() {
		console.log(number);
		number -= 2;
	};
}
let uniqueDecrementer = createYasyaDecrementer();
uniqueDecrementer();
uniqueDecrementer();
uniqueDecrementer();

/* Task#261 №3 */
console.log("Результат задания 261 №3:");
function createYasyaCountdown() {
	let number = 5;
	return function() {
		if (number >= 0) {
			console.log(number);
			number--;
		} else {
			console.log("Отсчет завершен.");
		}
	};
}
let uniqueCountdown = createYasyaCountdown();
uniqueCountdown();
uniqueCountdown();
uniqueCountdown();
uniqueCountdown();
uniqueCountdown();
uniqueCountdown();

// Задание 262 №1
//   function func() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }
// func()(); // Результатом выведения в консоль будет: 0
// func()(); // Результатом выведения в консоль будет: 0
// func()(); // Результатом выведения в консоль будет: 0

// Задание 262 №2
// function func() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }
// let test = func;
// test()(); // Результатом выведения в консоль будет: 0
// test()(); // Результатом выведения в консоль будет: 0
// test()(); // Результатом выведения в консоль будет: 0

// Задание 263 №1
// let counter = 0;
// function test() {
//   return function() {
//     console.log(counter);
//     counter++;
//   };
// }
// let func = test;
// let func1 = func();
// let func2 = func();
// func1(); // Результатом выведения в консоль будет: 0
// func2(); // Результатом выведения в консоль будет: 1
// func1(); // Результатом выведения в консоль будет: 2
// func2(); // Результатом выведения в консоль будет: 3

// Задание 263 №2
// function test() {
// 	let counter = 0;
// 	return function() {
// 	  return function() {
// 		console.log(counter);
// 		counter++;
// 	  };
// 	};
//   }
//   let func = test()();
//   let func1 = func;
//   let func2 = func;
//   func1(); // Результатом выведения в консоль будет: 0
//   func2(); // Результатом выведения в консоль будет: 1
//   func1(); // Результатом выведения в консоль будет: 2
//   func2(); // Результатом выведения в консоль будет: 3
  
// Задание 263 №3
// function test() {
// 	let counter = 0;
// 	return function() {
// 	  return function() {
// 		console.log(counter);
// 		counter++;
// 	  };
// 	};
//   }
//   let func = test();
//   let func1 = func();
//   let func2 = func();
//   func1(); // Результатом выведения в консоль будет: 0
//   func2(); // Результатом выведения в консоль будет: 0
//   func1(); // Результатом выведения в консоль будет: 1
//   func2(); // Результатом выведения в консоль будет: 1
  