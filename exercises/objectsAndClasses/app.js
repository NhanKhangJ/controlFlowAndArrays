// const myCar = {
//     make: "Lexus",   //make is a key, "Lexus" is a value
//     model: "NxFsport",
//     year: 2017,
//     nickName: "Smoother",
//     isLoud: false,
//     isRunning: true
// }
// console.log(myCar.nickName)
// console.log(myCar.model);

// const groceryList = ["chicken", "Ham", "Beef"];

// groceryList[0] //output is chicken 
// groceryList[2] //output is beef

// const friedChicken = {
//     wing: 2,
//     flavor: "honey mustard",
//     eat: () => {
//         console.log("so good") //you can also nest an function in side an object
//     }
// }

// friedChicken.eat(); // calling the function using dot notation


////adding properties using dot notation and asign a value to it
// const house = {
//     doors: 9
// }

// house.window = 30; 
// console.log(house);

// house.bathrooms = 7;
// house.hasGarden = true;

// console.log(house);

// house.bathrooms = 6;
// console.log(house);

// access to specific object{} properties using dot notation excercise 

// const myPet = {
//     name: "Kit",
//     age: 6,
//     favoriteThings: ["Pate", "Sleep", "treats"],
//     canSpeakFrench: false,
//     canSolveRubixCube: true,
// }
// console.log(myPet.name); // output Kit


// const object = {
// 	salutation: 'hi',
// 	count:4
// }

// //check for the existence of "hi" the value of salutation'skey inside object
// if (object.salutation === "hi") {  
// 	console.log('exits');
// }

// for (let i = 0; i < obj.count; i++) {
// 	console.log(i);
// }

// let result = object.hasOwnProperty('salutation');
// console.log(result) //check if salutation property is exsit in the object

// creating cohort object with diffrent data types


// const cohort = {
//     id: 'SEIR Flex Madeline',
//     students: ['Diana', 'Julio', 'Cory'],
//     instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
//     addStudent: function(name) {
//       name = name[0].toUpperCase() + name.substr(1).toLowerCase();
//       this.students.push(name);
//     },
//     pickRandomStudent: function() {
//       const rndIdx = Math.floor(Math.random() * this.students.length);
//       return this.students[rndIdx];
//     }
//   };

//Class Declaration

// class Vehicle {
//   //constructor
//   constructor(make, model) {
//     this.make = make;  //this keyword refers to object
//     this.model = model;
//   }
// }

// //Class Expression

// const v1 = new Vehicle("toyota","rav4" );// creating a new object from Vehicle fomula 
// console.log(v1)//output Vehicle{make: "toyota", model:"rav4"}

class Vehicle {
    constructor(vin, make, model) {
      this.vin = vin; 
      this.make = make; // return is not needed
      // because the new object is returned by default
      this.model = model;
  }
  
    // instance method
    static start() {
      this.running = true;
      console.log("running")
    }
  }
  
  //instantiated a new object
  const car = new Vehicle("12923", "Toyota", "Prius");
  
  Vehicle.start()//only can access from the class name(or class formula)
  car.start(); //Uncaught TypeError: car.start is not a function