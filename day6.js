//if condition

let num1 = 110;

if(num1>100)      //110>100 -> true
{
  console.log("Given number is greater than 100");
}

let num2 = 48;
if(num2>50)     //48>50 -> false
{
  console.log("Given no is greater than 50");
}

// if else condition:
let age = 12;
if(age >= 18)     //12 >= 18  -> false
{
  console.log("can able to vote");
}
else
{
  console.log("cannot able to vote");
}

// if else if condition
let mark = 67;
if(mark >= 90)          //67 >= 90 -> false
{
  console.log("mark is greater than 90");
}
else if(mark >= 80)     //67 >= 80 -> false
{
  console.log("mark is greater than 80 and less than 90");
}
else if(mark >= 70)     //67 > 70 -> false
{
  console.log("mark is greater than 70 and less than 80");
}
else if(mark >= 60)     // 67 >= 60 -> true
{
  console.log("mark is greater than 60 and less than 70");
}
else 
{
  console.log("Fail");
}

let fruit = "pineapple";
if(fruit === "apple")     //pineapple === apple   ->false
{
  console.log("This fruit name is apple");
}
else if(fruit === "mango")  //pineapple === mango   -> false
{
  console.log("This fruit name is mango");
}
else if(fruit === "pineapple")  //pineapple === pineapple -> true
{
  console.log("this fruit name is pineapple");
}
else if(fruit === "grapes")
{
  console.log("this fruit name is grapes");
}
else 
{
  console.log("this is not a fruit");
}

// Nested if condition
let attendance = 82;
let projectCount = 3;

if(attendance>=75)      //82 >= 75 -> true
{
  console.log("Kindly check the project");
  if(projectCount >=3)  //3 >= 3 -> true
  {
    console.log("They can able to attend the exam");
  }
  else
  {
    console.log("Project is incomplete");
  }
}
else
{
  console.log("You don't have min attendance");
}

// switch case
let day = 4;
switch(day)
{
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3: 
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekends");
    break;
}

// ternary operator:
let ages = 15;
//15 >= 18  -> false
let result = ages >= 18 ? "can vote" : "cannot vote";
console.log(result);