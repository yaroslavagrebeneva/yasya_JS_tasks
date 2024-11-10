/*Task#223*/
console.log('Результат задания 223 №1:');
function func223() {
	return 'Hello, World!';
}
console.log(func223); 

/*Task#224*/
console.log('Результат задания 224:');
function func224() {
	return 'JavaScript exploration page!';
}

console.log(func224()); 
console.log(func224);
func224 = 42; 
console.log(func224); 

/*Task#225*/
console.log('Результат задания 225:');
function func225_1() {
	return 10;
}
  
const func225_2 = func225_1;
console.log(func225_1() + func225_2()); 

/*Task#226*/
console.log('Результат задания 226:');
let func226_1 = function() {
	return 100;
};

let func226_2 = function() {
	return 200;
};

console.log(func226_1() + func226_2());

/*Task#227*/
console.log('Результат задания 227:');
const func227_1 = () => 'Arrow function output!';
console.log(func227_1());

/*Task#228*/
console.log('Результат задания 228:');
function func228() {
	console.log('Declared function output!');
}
func228();

/*Task#229*/
console.log('Результат задания 229:');
function func229_1() {
	console.log('Welcome to JavaScript functions!');
}
func229_1();

const func229_2 = function() {
	console.log('This is an anonymous function!');
};
func229_2();

/*Task#230*/
console.log('Результат задания 230:');
let func230_1 = function() { console.log('Example 1 of function expression'); };
let func230_2 = function() { console.log('Example 2 of function expression'); };
function func230_3() { console.log('Function declaration example'); }

func230_1();
func230_2();
func230_3();

/*Task#231*/
console.log('Результат задания 231:');
console.log('Function Expression:', function() { return 'FE result'; }());

/*Task#232*/
console.log('Результат задания 232:');
let obj232 = {
	func232_1: () => 5,
	func232_2: () => 10,
	func232_3: () => 15
};
for (let key in obj232) {
	console.log(obj232[key]());
}

/*Task#233*/
console.log('Результат задания 233:');
console.log(obj232.func232_1() + obj232.func232_2() + obj232.func232_3());

/*Task#234*/
console.log('Результат задания 234:');
let arr234 = [
	() => 'Alpha',
	() => 'Bravo',
	() => 'Charlie'
];
for (let func of arr234) {
	console.log(func());
}

/*Task#235*/
console.log('Результат задания 235:');
let sum235 = arr234.reduce((acc, func) => acc + func().length, 0);
console.log('Сумма длин строк в массиве:', sum235);

/*Task#236*/
console.log('Результат задания 236:');
let complexCalc = (x, func) => func(x);
console.log(complexCalc(5, (x) => x ** 2));

/*Task#237*/
console.log('Результат задания 237:');
let obj237 = {
    sum: (arr) => arr.reduce((acc, num) => acc + num, 0),
    product: (arr) => arr.reduce((acc, num) => acc * num, 1),
    difference: (arr) => arr.reduce((acc, num) => acc - num)
};
let arr237 = [3, 4, 5];
console.log('Сумма элементов:', obj237.sum(arr237));
console.log('Произведение элементов:', obj237.product(arr237));
console.log('Разность элементов:', obj237.difference(arr237));

/*Task#238*/
console.log('Результат задания 238:');
let obj238 = {
	func238_1: () => 'X',
	func238_2: () => 'Y',
	func238_3: () => 'Z'
};

for (let key in obj238) {
	console.log(obj238[key]());
}

let res238 = obj238.func238_1() + obj238.func238_2() + obj238.func238_3();
console.log('Результат объединения:', res238); 

/*Task#239*/
console.log('Результат задания 239:');
let calculations239 = {
    sum: (arr) => arr.reduce((acc, num) => acc + num, 0),
    sumSquares: (arr) => arr.reduce((acc, num) => acc + num ** 2, 0),
    sumCubes: (arr) => arr.reduce((acc, num) => acc + num ** 3, 0)
};
let arr239 = [2, 4, 6, 8];

console.log('Сумма всех элементов массива:', calculations239.sum(arr239));
console.log('Сумма квадратов всех элементов массива:', calculations239.sumSquares(arr239));
console.log('Сумма кубов всех элементов массива:', calculations239.sumCubes(arr239));
