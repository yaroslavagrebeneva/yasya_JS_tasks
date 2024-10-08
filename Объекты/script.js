/*task#80*/
let obj80 = 
{1: 'Monday', 
2: 'Tuesday',
3: 'Wednesday', 
4:'Thursday', 
5:'Friday', 
6:"Saturday", 
7:"Sunday"};
console.log(obj80[1], obj80[2], obj80[3], obj80[4], obj80[5], obj80[6], obj80[6]);

/*task#81*/
let obj81 = 
{1: 'January', 
2: 'February', 
3: 'March', 
4: "April", 
5: 'May', 
6: 'June', 
7: 'July', 
8: 'August', 
9: 'September', 
10: 'October', 
11: 'November', 
12: 'December'};
console.log(obj81);

/*task#82*/
let user82=
{name: "Yaroslava" , 
surname: "Grebeneva", 
patronymic: "Andreevna"};
console.log(user82["surname"]+" "+user82["name"]+' '+user82["patronymic"]);

/*task#83*/
let date83= {year:"2024", month:"10", day:"08"};
console.log(date83.year+'.'+date83.month+"."+date83.day);

/*task#84*/
let obj84_2 = {
	'1a': 1, 
	'b2': 2, 
	'с-с': 3, 
	'd 4': 4, 
	'e5': 5
}; 
console.log(obj84_2['1a']);
console.log(obj84_2.b2);
console.log(obj84_2['c-c']);
console.log(obj84_2['d 4']);
console.log(obj84_2.e5);

/*task#85*/

let obj85 = {x: 1, y: 2, z: 3};
obj85.x = obj85.x ** 2;
obj85.y = obj85.y ** 2;
obj85.z = obj85.z ** 2;
console.log(obj85);

/*task#86*/

let obj86 = {};
obj86.a = 'mi';
obj86.b = 'ma';
obj86.c = 'mu';
console.log(obj86);

/*task87*/

let obj87 = {5: 'aa', 25: 'ee', 15: 'ww'};
console.log(obj87[5])
console.log(obj87[15]); 
console.log(obj87[25]);

/*task#88*/

let obj88 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj88);
console.log(keys);