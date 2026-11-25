// Data Types

// Addition
let num1 = 100;
let num2 = 200;
console.log(num1 + num2);

let num3 = num1 + num2;
console.log(num3);

// Subtraction
let num4 = 250;
let num5 = 100;
console.log(num4-num5);

// Mulitplication
let num6 = 5;
let num7 = 10;
console.log(num6*num7);

// Division
let num8 = 12;
let num9 = 3;
console.log(num8/num9);

// Power of
let num10 = 2;
let num11 = 3;
console.log(num10**num11);

// exponsion
let num12 = 13;
let num13 = 5;
console.log(num12 % num13);

// Assignment Operator:
let num = 1000;
// num = num + 500;
num -= 500;
console.log(num);

let nums1 = 100;
let nums2 = 90;
console.log(nums1>nums2);  //100 > 90 -> true

let nums3 = 40;
let nums4 = 50;
console.log(nums3<nums4); //40 < 50 -> true

let nums5 = 150;
let nums6 = 150;
console.log(nums5>=nums6); //150>=150 -> true

let value1 = 100;     //number
let value2 = "100";   //string
console.log(value1==value2);  //100 == "100" ->true
console.log(value1===value2);  //100 === "100" ->false

let value3 = 100;
let value4 = 90;

let value5 = 30;
let value6 = 40;
console.log(value3 >= value4 && value5 >= value6);
console.log(value3 >= value4 || value5 >= value6);

let conditions = true;
console.log(!conditions);

// nullish operator
let course = null;
let day = null;
let location = null;

let result = day ?? location ?? course;
console.log(result);