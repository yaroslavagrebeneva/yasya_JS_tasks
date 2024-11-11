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
