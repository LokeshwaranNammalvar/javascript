// console.log("Hi")
// console.log("Welcome")
// setTimeout(()=>{console.log("Hello")}, 5000)
// setTimeout(add, 2000)
// console.log("How are you?")
// console.log("Bye")


// function add(){
//   console.log(20+30)
// }



let studentDetails = {
  name : "David",
  course: "SDET",
  address : "Chennai",
  skills : ["PL", "JS","SQL","GIT"],
  data : ()=>{
    console.log(studentDetails.course)
    console.log(this.address)
  },
  goal : function(){
    console.log("To get placed in higher package");
    console.log(this.name)

  },


  details(){

  },
  status(){
    this.details()
  }
}

console.log(studentDetails.name);
console.log(studentDetails.address);
console.log(studentDetails.skills[1]);

studentDetails.goal()
studentDetails.data()

console.log(studentDetails);
//update
//ObjName.key = newValue
studentDetails.address = "Porur";

console.log(studentDetails);
//Add
//Objname.newKey = newValue;
studentDetails.gender = "male";
console.log(studentDetails);

//delete
//delete ObjName.key
delete studentDetails.skills

console.log(studentDetails);