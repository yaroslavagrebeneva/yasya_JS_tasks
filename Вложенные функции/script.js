/*Task#240*/
console.log('Результат задания 240 №1:');
function runTest240(func1, func2, func3) {
	console.log(func1() + func2() + func3());
}
runTest240(
	() => 1,
	() => 2,
	() => 3
);

/*Task#241*/
console.log('Результат задания 241 №1:');
function runTest241(f1, f2, f3) {
    return f1() + f2() + f3();
}

console.log('Результат задания 241 №2:');
function func241_1() { return 4; }
function func241_2() { return 5; }
function func241_3() { return 6; }
const result241_2 = runTest241(func241_1, func241_2, func241_3);
console.log(result241_2); 

console.log('Результат задания 241 №3:');
let func241a = () => 7;
let func241b = () => 8;
let func241c = () => 9;
const result241_3 = runTest241(func241a, func241b, func241c);
console.log(result241_3); 

/*Task#242*/
console.log('Результат задания 242 №1:');
function runTest242(func) {
    console.log(func(4));
}
runTest242((num) => num ** 3);

console.log('Результат задания 242 №2:');
function func242b(num) {
    return num ** 3; 
}
function runTest242b(func) {
    console.log(func(5));
}
runTest242b(func242b);

console.log('Результат задания 242 №3:');
let func242c = (num) => num ** 3;
function runTest242c(func) {
    console.log(func(6));
}
runTest242c(func242c);

console.log('Результат задания 242 №4:');
function func242d(a, b) {
    return a * b;
}
function runTest242d(func) {
    console.log('Произведение чисел:', func(2, 7)); 
}
runTest242d(func242d);

/*Task#243*/
console.log('Результат задания 243 №1:');
function calculate(num, sqFunc, cbFunc) {
    return sqFunc(num) + cbFunc(num);
}
function square243(num) { return num ** 2; }
function cube243(num) { return num ** 3; }
const result243 = calculate(4, square243, cube243);
console.log(result243); 

/*Task#244*/
console.log('Результат задания 244:');
function modifyArray(arr, callback) {
    return arr.map(callback);
}
let result244 = modifyArray([2, 4, 6], (num) => num ** 2);
console.log(result244); 

/*Task#245*/
console.log('Результат задания 245 №1:');
function combinedOperations(num1, num2) {
	function square245(num) { return num ** 2; }
	function cube245(num) { return num ** 3; }
	return square245(num1) - cube245(num2);
}
console.log(combinedOperations(3, 2)); 

/*Task#246*/
console.log('Результат задания 246 №1:');
function outerTest246() {
	let num = 2;
	function inner() {
		console.log(num);
	}
	inner();
}
outerTest246();

console.log('Результат задания 246 №2:');
function outerTest246b() {
	let num = 5;
	function inner() {
		console.log(num);
	}
	// Внутренняя функция не вызывается
}
outerTest246b();

console.log('Результат задания 246 №3:');
function outerTest246c() {
	let num = 10;
	function inner() {
		console.log(num);
	}
	inner();
}
outerTest246c();

console.log('Результат задания 246 №4:');
function outerTest246d() {
	let num;
	function inner() {
		console.log(num);
	}
	num = 3;
	inner(); // Выводит 3
	num = 6;
	inner(); // Выводит 6
}
outerTest246d();

/*Task#247*/
console.log('Результат задания 247 №1:');
function calcSum(num1, num2) {
	function innerSum() {
		console.log(num1 + num2);
	}
	innerSum();
}
calcSum(3, 5); // Выводит 8

console.log('Результат задания 247 №2:');
function calcSumWithChange(num1, num2) {
	function innerSum() {
		console.log(num1 + num2);
	}
	num1 = 4;
	innerSum();
}
calcSumWithChange(1, 3); // Выводит 7

/*Task#248_1*/
console.log('Результат задачи 248 №1:');
function test248_1(num248) {
    function innerFunc248(localNum248) {
        console.log(localNum248);
    }
    innerFunc248(num248);
}
test248_1(1); // Результат: 1

/*Task#248_2*/
console.log('Результат задачи 248 №2:');
function test248_2(num248) {
    function innerFunc248(localNum248) {
        console.log(localNum248);
    }
    innerFunc248(num248 + 1);
}
test248_2(1); // Результат: 2

/*Task#248_3*/
console.log('Результат задачи 248 №3:');
function test248_3(num248) {
    function innerFunc248(localNum248) {
        console.log(num248);
    }
    innerFunc248(num248 + 1);
}
test248_3(1); // Результат: 1

/*Task#248_4*/
console.log('Результат задачи 248 №4:');
function test248_4(num248) {
    function innerFunc248(localNum248) {
        localNum248 = 2;
    }
    innerFunc248(num248);
    console.log(num248);
}
test248_4(1); // Результат: 1

/*Task#248_5*/
console.log('Результат задачи 248 №5:');
function test248_5(num248) {
    function innerFunc248(localNum248) {
        localNum248 = 2;
    }
    innerFunc248(num248);
    try {
        console.log(localNum248);
    } catch (error) {
        console.log('Ошибка: локальная переменная не определена.');
    }
}
test248_5(1);

/*Task#248_6*/
console.log('Результат задачи 248 №6:');
function test248_6(num248) {
    function innerFunc248(localNum248) {
        num248 = 2;
    }
    innerFunc248(num248);
    console.log(num248);
}
test248_6(1); // Результат: 2

/*Task#249_1*/
console.log('Результат задачи 249 №1:');
function test249_1(num249) {
    function innerFunc249(localNum249) {
        console.log(localNum249);
    }
    innerFunc249(num249);
}
test249_1(1); // Результат: 1

/*Task#249_2*/
console.log('Результат задачи 249 №2:');
function test249_2(num249) {
    function innerFunc249(localNum249) {
        localNum249 = 2;
    }
    innerFunc249(num249);
    console.log(num249);
}
test249_2(1); // Результат: 1

/*Task#250_1*/
console.log('Результат задачи 250 №1:');
function outerFunc250_1() {
    return function() {
        return 1;
    };
}
function outerFunc250_2() {
    return function() {
        return 2;
    };
}
console.log(outerFunc250_1()() + outerFunc250_2()());

/*Task#251_1*/
console.log('Результат задачи 251 №1:');
function nestedFunc251() {
    return function() {
        return function() {
            return function() {
                return '!';
            };
        };
    };
}
console.log(nestedFunc251()()()()); 

/*Task#252_1*/
console.log('Результат задачи 252 №1:');
function func252_1(num252_1) {
    return function(num252_2) {
        return function(num252_3) {
            return num252_1 + num252_2 + num252_3;
        };
    };
}
console.log(func252_1(2)(3)(4)); 

/*Task#252_2*/
console.log('Результат задачи 252 №2:');
function func252_2(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return function(num5) {
                    return [num1, num2, num3, num4, num5];
                };
            };
        };
    };
}
let result252 = func252_2(2)(3)(4)(5)(); 
console.log(result252); 

/*Task#253_1*/
console.log('Результат задачи 253 №1:');
function each253_1(arr253_1, callback) {
    let result253_1 = [];
    for (let elem253_1 of arr253_1) {
        result253_1.push(callback(elem253_1)); 
    }
    return result253_1;
}
let result253_1 = each253_1([5, 10, 15, 25, 30], function(num253_1) {
    return num253_1 ** 2;
});
console.log(result253_1);

/*Task#253_2*/
console.log('Результат задачи 253 №2:');
function each253_2(arr253_2, callback) {
    let result253_2 = [];
    for (let elem253_2 of arr253_2) {
        result253_2.push(callback(elem253_2)); 
    }
    return result253_2;
}
let result253_2 = each253_2(['kate', 'grebeneva'], function(str253_2) {
    return str253_2.split("").reverse().join("");
});
console.log(result253_2);

/*Task#253_3*/
console.log('Результат задачи 253 №3:');
function each253_3(arr253_3, callback) {
    let result253_3 = [];
    for (let elem253_3 of arr253_3) {
        result253_3.push(callback(elem253_3)); 
    }
    return result253_3;
}
let result253_3 = each253_3(['kate', 'grebeneva'], function(str253_3) {
    let splitted = str253_3.split("");
    return splitted[0].toUpperCase() + str253_3.slice(1);
});
console.log(result253_3);

/*Task#254_1*/
console.log('Результат задачи 254 №1:');
function cube254(num254) {
    return num254 ** 3;
}
function each254(arr254, callback) {
    let result254 = [];
    for (let i = 0; i < arr254.length; i++) {
        result254.push(callback(arr254[i]));
    }
    return result254;
}
let result254 = each254([2, 5, 10], cube254);
console.log(result254);

/*Task#256_1*/
console.log('Результат задачи 256 №1:');
function filter256(arr256, callback) {
    let result256 = [];
    for (let elem256 of arr256) {
        if (callback(elem256)) {
            result256.push(elem256);
        }
    }
    return result256;
}
let result256 = filter256([1, 2, 3, 4, 5], elem256 => elem256 > 0);
console.log(result256);
