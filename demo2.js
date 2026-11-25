// Promise

let promise = new Promise((resolve, reject) => {
  let age = 26;
  if(age<18)
  {
    resolve("can able to vote");
  }
  else 
  {
    reject("cannot able to vote");
  }
})

// promise
  .then((result) => {
    console.log(result)
  })
  .catch((error)=>{
    console.log(error);
  })

const laptop = new Promise((resolve, reject) => {

  let laptop_model = "HP";
  if(laptop_model==="HP")
  {
    resolve("Both are same laptop");
  }
  else
  {
    reject("Both are not same laptop");
  }
})

laptop
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })

// Promise all
// Promise 1
const phone = new Promise((resolve, reject)=>{
  let phone_model = "Iphone 16";

  if(phone_model==="Iphone 16")
  {
    resolve("Both are same iphone");
  }
  else
  {
    reject("Bot are not same iphone");
  }
})

// Promise 2
const mark = new Promise((resolve, reject)=>{
  let score = 87;
  if(score >= 75)
  {
    resolve("Pass");
  }
  else
  {
    reject("Fail");
  }
})

// Promise 3
const fruit = new Promise((resolve, reject) => {
  let fruit_name = "Apple";
  if(fruit_name==="Apple")
  {
    resolve("Good for health");
  }
  else
  {
    reject("Not good for health");
  }
})


Promise.all([phones, mark])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })