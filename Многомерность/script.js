/*168*/
//#1
console.log('168_1:');
let arr168_1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log( arr168_1[3][2]) 
console.log( arr168_1[1][1]) 
console.log( arr168_1[2][0]) 
console.log( arr168_1[0][0]) 

//#2
console.log('168_2:');
let arr168_2 = [[1, 2], [3, 4], [5, 6]];
let sum168_2 = arr168_2[0][0] + arr168_2[0][1] + arr168_2[1][0] + arr168_2[1][1] + arr168_2[2][0] + arr168_2[2][1];
console.log(sum168_2);

/*169*/

console.log('169 :');
let arr169 = [
  [
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sum169 = arr169[0][0][0] + arr169[0][0][1] + arr169[0][1][0] + arr169[0][1][1] + arr169[1][0][0] + arr169[1][0][1] + arr169[1][1][0] + arr169[1][1][1];
console.log(sum169);
