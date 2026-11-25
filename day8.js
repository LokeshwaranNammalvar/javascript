// Arrays:
let mark = [90, 95, 92, 89, 87, 83];
console.log(mark);

console.log(mark[3]);

let course = ["javascript", "playwright", "Gen AI"];
console.log(course);

// used to add the value at end of the array
course.push("Framework");
course.push("API Testing");
course.push("Git and Github");
console.log(course);

// used to remove the value at end of the array
course.pop();
course.pop();
console.log(course);

let mobile = ["iphone", "samasung", "vivo"];
console.log(mobile);

mobile.unshift("redmi");
mobile.unshift("Poco");
mobile.unshift("Moto");
console.log(mobile);

mobile.shift();
mobile.shift();
console.log(mobile);

let fruit = ["Apple", "Mango", "Pineapple", "Grapes", "Pineapple", "Orange"];
console.log(fruit);

// to print the count of the array length
console.log(fruit.length);

// to print the index value
console.log(fruit.indexOf("Pineapple"));

// to print the last index value 
console.log(fruit.lastIndexOf("Pineapple"));

console.log(fruit[3]);    // it is not a method
console.log(fruit.at(-1)); // it is a method

let vegetable = ["Onion", "Potato", "Carrot", "Tomato"];
// slice(startIndex, endingIndex+1);
console.log(vegetable.slice(1,3));

// it will check the value is present inside the array or not.
console.log(vegetable.includes("Potato"));

let city = ['Chennai', 'Nagpur', 'pune', 'mumbai'];
console.log(city);

// splice(index value, count, value1, value2, value3);
city.splice(2,1,'kolkata');
console.log(city);

let name = ['suriya', 'pravin', 'ram', 'siva'];
name.splice(1,0, 'rahul', 'nithish');
console.log(name);

let marks = [82, 76, 60];
console.log(marks);

// map
let result = marks.map(num => num+15);
console.log(result);

// filter
let studentMark = [40, 54, 76, 90, 32, 89];
let res = studentMark.filter(nums => nums>65);

// reduce
let total = studentMark.reduce((sum, num) => sum+num, 0);
console.log(total);

