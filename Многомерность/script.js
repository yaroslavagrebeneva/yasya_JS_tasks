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

/*170*/

console.log('170:');
let arr170 = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum170 = arr170[0][0] + arr170[0][1] + arr170[0][2] + arr170[0][3][0] + arr170[0][3][1] + arr170[0][3][2][0] + arr170[0][3][2][1] + arr170[1][0] + arr170[1][1][0] + arr170[1][1][1];
console.log(sum170);

/*171*/

// #1
console.log('171_1:');
let arr171_1 = [[1, 2, 3], [4, 5], [6]];
let sum171_1 = 0;
for (let subArr171_1 of arr171_1) {
	for (let elem171_1 of subArr171_1) {
        sum171_1 += elem171_1;
	}
}
console.log(sum171_1);

//#2
console.log(' 171_2:');
let arr171_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum171_2 = 0;
for (let subArr171_2 of arr171_2) {
	for (let elem171_2 of subArr171_2) {
        for (let elem171_3 of elem171_2)
        sum171_2 += elem171_3;
	}
}
console.log(sum171_2);

/*172*/
// #1
console.log('172_1:');
let arr172_1 = [[1, 2, 3], [4, 5], [6]];
let sum172_1 = 0;
for (let i = 0; i < arr172_1.length; i++) {
  for (let j = 0; j < arr172_1[i].length; j++) {
    sum172_1 += arr172_1[i][j];
  }
}
console.log(sum172_1);

// #2
console.log('172_2:');
let arr172_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum172_2 = 0;
for (let i = 0; i < arr172_2.length; i++) {
  for (let j = 0; j < arr172_2[i].length; j++) {
    for (let k = 0; k < arr172_2[i][j].length; k++) {
      sum172_2 += arr172_2[i][j][k];
    }
  }
}
console.log(sum172_2);

/*173*/
// #1
console.log('173_1:');
let arr173_1 = [];
for (let i = 0; i < 3; i++) {
  arr173_1[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr173_1[i].push(j); 
  }
}
console.log(arr173_1);

// #2
console.log('173_2:');
let arr173_2 = [];
for (let i = 0; i < 3; i++) {
  arr173_2[i] = [];
  for (let j = 0; j < 4; j++) {
    arr173_2[i].push('x');
  }
}
console.log(arr173_2);

// #3
console.log('173_3:');
let arr173_3 = [];
for (let i = 0; i < 3; i++) {
  arr173_3[i] = []; 
  for (let j = 0; j < 2; j++) {
    arr173_3[i][j] = []; 
    for (let k = 1; k <= 5; k++) {
      arr173_3[i][j].push(k); 
    }
  }
}
console.log(arr173_3);
