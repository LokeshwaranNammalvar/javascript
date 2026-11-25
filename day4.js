// function
// function declaration
function course()
{
  console.log("Hi, welcome to javascript class");
}

// function calling
course()
course()
course()
course()
course()

// function declaration
function courseID()
{
  console.log(101);
}

// function calling
courseID()
courseID()
courseID()

// let a = 100;
// console.log(a);

// function with parameter
function phone(a)
{
  console.log(a);
}

phone(100);
phone(250);
phone(3000);

function laptop(model, price)
{
  console.log(model, price);
}

laptop("HP", 75000);
laptop("DELL", 65000);
laptop("Asus");

// arrow function
let location = (street) => {
  console.log(street);
}
location("Porur");
location("Tambaram");

// function declare
let courses = (courseName, days) => {
  console.log(courseName);
  console.log(days);
  console.log(courseName, days);    // it will print the value in same line 
}

// function calling
courses("Javascript", 12);
courses("Playwright", 15);


let books = (BookName, price) => {
  console.log(BookName, price);
}

books("Jungle Book");