/*task#97*/

// №1
// console.log( typeof {x: 1, y: 2, z: 3} ); 
// Результат вывода = object

// №2
// console.log( typeof [1, 2, 3] ); 
// Результат вывода = object

// №3
// let arr1 = [1, 2, 3];
// console.log( typeof arr1 ); 
// Результат вывода = object

// №4
// let arr2 = [1, 2, 3];
// console.log( typeof arr2[0] ); 
// Результат вывода = number

// №5
// let arr3 = ['1', '2', '3'];
// console.log( typeof arr3[0] ); 
// Результат вывода = string

/*task98*/

// №1
// console.log( Array.isArray([1, 2, 3]) );
// Результат вывода = true

// №2
// console.log( Array.isArray({x: 1, y: 2, z: 3}) ); 
// Результат вывода = false

/*task#99*/

// №1
// let test = {x: 1, y: 2, z: 3};
// console.log(test);
// Результат вывода = {x: 1, y: 2, z: 3} (объект)

// №2
// let test = {x: 1, y: 2, z: 3};
// console.log(test.x);
// Результат вывода = 1 (примитив)

// №3
// let test = [1, 2, 3];
// console.log(test);
// Результат вывода = [1, 2, 3] (объект)

// №4
// let test = [1, 2, 3];
// console.log(test[1]);
// Результат вывода = 2 (примитив)

// №5
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1);
// Результат вывода = [1, 2, 3] (объект)

// №6
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1[test2]);
// Результат вывода = 2 (примитив)

// №7
// Примитивные типы данных в JavaScript:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6)
// 7. bigint (ES11)

/*100*/
// №1
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// console.log(arr2);
// Результат вывода = ['a', 2, 3] (изменение влияет на оба массива)                                                                                                    

// №2
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[1] = 'b';
// console.log(arr1);
// Результат вывода = ['a', 'b', 3] (изменения отражаются в arr1)                                                                                                    

// №3
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[0] = 'b';
// console.log(arr2);
// Результат вывода = ['b', 2, 3] (изменение в arr2 влияет на arr1)       
