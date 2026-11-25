let a = 100;
a++; // a=a+1
console.log(a);

let i = 1;
console.log(i);
i++;
console.log(i);

// for loop:
for(let i = 0 ; i < 3 ; i++)    //3<3 -> false
{
  //i=2
  console.log(i);
}
//i=3

// for loop
for(let i=3; i>0; i--)  //0>0 -> false
{
  //i=1
  console.log(i);
}
//i=0

// while loop
let j = 10;
// j = 10
while(j<15)   //15<15 -> false
{
  console.log(j);
  j++;        //j = 15
}

// do while loop
let x = 1;
do
{
  // x = 4
  console.log(x);
  x++;              //x = 5
}while(x<5);        //5<5 -> false