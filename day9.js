// String
let place = "charminar";
console.log(place);
console.log("place");

let location = "Chennai";
console.log(location);

// to know the lenghth of letter
console.log(location.length);

let phone = "Iphone 16";
console.log(phone.length);

// to print the specific value
console.log(phone[2]);

let course = "I am starting learning Javasscript";
console.log(course);
console.log(course.toUpperCase());

let fruit = "I Bought a New Fruit APPLE";
console.log(fruit);
console.log(fruit.toLowerCase());

let vegetable = "Carrot is Healthy";
console.log(vegetable);
console.log(vegetable.indexOf('a'));
console.log(vegetable.indexOf('t'));

console.log(vegetable.lastIndexOf('a'));
console.log(vegetable.lastIndexOf('r'));

let laptop = "I bought a HP laptop";
console.log(laptop.charAt(4));
console.log(laptop.at(4));
console.log(laptop[4]);   //it is not a method

console.log(laptop.charAt(-2));
console.log(laptop.at(-2));
console.log(laptop[-2]);   //it is not a method

let str = "           Hi bro,       How are you?        ";
console.log(str);
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

let courses = "Java is easy to learn. Java is easy to understand";
console.log(courses.replace('Java','Javascript'));
console.log(courses.replaceAll('Java', 'Javascript'));

let shop = "I bought a snacks";
console.log(shop);
console.log(shop.slice(11,18));

let course1 = "Javascript ";
let course2 = "completed";
console.log(course1.concat(course2));

let value2 = "Hi";
console.log(value2.repeat(3));

let arr = [10,20,30,40,50];
console.log(arr);

for(let result of arr)
{
  console.log(result);
}

let student = {
  name : "Suriya",
  location : "Chennai",
  mark : 485
}

console.log(student);

for(let res in student)
{
  console.log(res + student[res]);
}