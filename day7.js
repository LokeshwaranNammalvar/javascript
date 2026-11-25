let student = {
  name : 'Suriya SivaKumar',
  mark : 485,
  location : 'Chennai'
}

console.log(student);
//  used to print specific value by using its key
console.log(student.mark);

// or
console.log(student["location"]);

student.location = "Porur";
console.log(student);


let laptop = {
  model : "HP",
  year : 2026,
  price : 75000
}

console.log(laptop);
console.log(laptop.price);
console.log(laptop["price"]);

laptop.model = "DELL";
console.log(laptop);

delete laptop.model;
console.log(laptop);

// Class
class Student
{
  exam()
  {
    console.log("You will have exam next week");
  }

  result()
  {
    console.log("Once exam complete you can see your result");
  }
}

let studentDetail = new Student();
studentDetail.exam();
studentDetail.result();

class Detail
{
  price()
  {
    console.log("75,000 Rs");
  }

  model()
  {
    console.log("Iphone 16 ");
  }

  year()
  {
    console.log(2025);
  }
}

let phone = new Detail();
phone.model();
phone.price();
phone.year();

class Shop
{
  constructor(fruitName, price)
  {
    this.fruitName = fruitName;
    this.price = price;
  }
  display()
  {
    console.log(this.fruitName);
    console.log(this.price);
  }
}

let fruit1 = new Shop("Apple", 75);
let fruit2 = new Shop("Mango", 100);

fruit1.display();
fruit2.display();

class Course 
{
  constructor(couseName, day)
  {
    this.couseName = couseName;
    this.day = day
  }

  structure()
  {
    console.log(this.couseName);
    console.log(this.day);
  }
}

let course1 = new Course("Javascript", 12);
let course2 = new Course("Playwright", 15);
let course3 = new Course("GEN AI", 8);
course1.structure();
course2.structure();
course3.structure();