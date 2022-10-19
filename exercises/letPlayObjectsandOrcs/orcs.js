
//access with dot notation

// const adventurer = {
//     name: "Nhan",
//     hitpoints: 10,
//     belongings: ["sword", "guns", "tums"],
//     companion: {
//       name: "peanut",
//       type: "corgi",
//       companion: {
//         name: "tick",
//         type: "parasite",
//         belongings: ["scuba tank", "rogan josh", "health insurance"],
//       },
//     },
//   };
//   //using dot notation
//   console.log(adventurer.belongings[0]); //output sword
//   //Iterate over an array that is within an object
//   for(let i = 0; i < adventurer.belongings.length; i++) {
//       console.log(adventurer.belongings[i]);              
//   } 
  
//   //ACCESS THE COMPANION OBJECT
//   console.log(adventurer.companion); 
//   console.log(adventurer.companion.name); 
//   console.log(adventurer.companion.type);
  
  // console.log(adventurer.companion.companion.type);
  
  // //GET health insurance
  // console.log(adventurer.companion.companion.belongings[2])
  
//arrays object

  // const movies = [
  //   { title: "Tokyo Story" },
  //   { title: "Paul Blart: Mall Cop" },
  //   { title: "L'Avventura" },
  // ];
  
  // // console.log(movies) //my array of objects 
  // // console.log(movies[0]) //first object in the array
  // // console.log(movies[0].title)// first object title property
  
  
  // for(let i = 0; i < movies.length; i++){
  //     console.log(movies[i]);
  //     console.log(movies[i].title); 
  
/*combine object, arrays, and functions */

  // const foo = {
  //     someArray: [1, 2, 3], //arrays
  //     someObject: {
  //         someProp: 'oh hai, mark' //nested object
  //     },
  //     someMethod: () => {
  //         console.log("inside of method"); //function
  //     }
  // }
  
  // console.log(foo.someObject.someProp); // oh hai
  // console.log(foo.someArray[0]); // 1
  // console.log(foo.someMethod())  //calling a function nested inside the object
  

  //nested array inside an array
  // const foo = [
  //     [1, 2, 3, 4], //0
  //     [5, 6, 7, 8], //1
  //     [9, 10, 11, 12] //2
  // ]
  
  // console.log(foo[1][2]); //access index 1 array then access index 2 of index 1 array
  

  //function in array
  // const foo = [
  //     1,
  //     "hi",
  //     ()=>{
  //         console.log("fun")
  //     }
  // ];
  
  // console.log(foo[2]() );
  
                                        /* classes */
//example 
  // const player = {
  //   name: "Josh the Great",
  //   health: 1000,
  //   power: 1000,
  //   stamina: 1000,
  // };
  
  // const bigBadBoss = {
  //   name: "Magnardo the Merciless",
  //   health: 1000000000,
  //   power: 1000000000,
  //   stamina: "Infinity",
  // };
  
  // const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
  //   const newEnemy = {
  //     name: nameIs,
  //     health: healthIs,
  //     power: powerIs,
  //     stamina: staminaIs,
  //   };
  
  //   return newEnemy;
  // };
  
  // const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  
  //     const newPlayer = {
  //     name: nameIs,
  //     health: healthIs,
  //     power: powerIs,
  //     stamina: staminaIs,
  //   };
  
  //   return newPlayer;
  // };
  
// //practical

//   class Character {
//     //constructor                      /*passing the direct value */
//     constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) { //constructing key with valueVariable and key with sdirectvalue
//       this.legs = 2;   
//       this.arms = 2; //default value of key
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false; // condittinal value 
//     }
//     //setter method
//     setHair(hairColor) {
//       this.hair = hairColor; 
//     }
//     greet(otherCharacter) { // function with parameter
//       console.log("hi " + otherCharacter + "!");
//     }

       //Objects interacting with other objects
//     classyGreeting(otherClassyCharacter) { // function with parameter
//       console.log("Greetings " + otherClassyCharacter.name + "!");
//     }
//     smite() { //function
//       console.log("I smite thee you vile person");
//     }
//   }
//              /*new keyword to creat a new object base on the charater class */
//   const p1 = new Character("Ariel", 97, "green", "silver", true, true); //creating object with arguments
//   const enemy = new Character("Sauron", 10000, "red"); //the hair willbe undefiend because you havent pass any argument in it
  
//   console.log(p1.greet("bob")); // hi Bob !
//   console.log(p1.smite()); // log I smite you vile person
//   console.log(enemy);// hair is undefinde
//   console.log(enemy.greet("sauron"));
  
//   console.log(enemy.classyGreeting(p1)); //Greeting Ariel!
  
                                     /*PARENT CLASSES*/
  
  // class Character {
  //   constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
  //     this.legs = 2;
  //     this.arms = 2; 
  //     this.name = name;
  //     this.age = age;
  //     this.eyes = eyes;
  //     this.hair = hair;
  //     this.lovesCats = lovesCats;
  //     this.lovesDogs = lovesDogs || true;
  //   }
  //   greet(otherCharacter) {
  //     console.log("hi " + otherCharacter + "!");
  //   }
  //   classyGreeting(otherClassyCharacter) {
  //     console.log("Howdy " + otherClassyCharacter.name + "!");
  //   }
  //   setHair(hairColor) {
  //     this.hair = hairColor;
  //   }
  //   smite() {
  //     console.log("i smited thee.");
  //   }
  // }
  // //we can add and override functionality inside parent class with extend
  // class Hobbit extends  Character {
  //     constructor(name, age, eyes, hair) {
  //         super(name, age, eyes, hair); //using the constructor of the parentclass within the child class(subclass), this code will send name,age,eyes,hair to the contructor of the parent class
  //         this.skills = ["thievery", "speed", "willpower"]; // the constructor of the parent class will take of these properties for us
  //     }
  //     steal () {
  //         console.log("let's get away!")
  //     }
  //     greet (otherCharacter) {
  //         console.log(`Hobbit says hello to ${otherCharacter}`)
  //     }
  //     smite() {
  //         super.smite();
  //         this.steal();
  //     }
  // }
  
  // const frodo = new Hobbit("Mr Baggins", 33, "blue", "brown");
  // const sam = new Hobbit('mr Sam',300, "balck","yellow" );
  // console.log(frodo);//frodo object
  // frodo.steal() //excute steal in Hobbit extended class
  // frodo.greet(sam.name); //'Hobbit say hellor to mr Sam
  
                                                                 /*Factory*/
  
  class Car {
    constructor(maker, serialNumber) {
      this.serialNumber = serialNumber;
      this.maker = maker;
    }
    drive() {
      console.log("vroom vroom");
    }
  }
  
  //factory class
  class Factory {
    constructor(company) {
      this.company = company;
      this.cars = [];
    }
    generateCar() {
      const newCar = new Car(this.company, this.cars.length); //creatingcar object  when the function is call with an argument
      this.cars.push(newCar);
    }
    findCar (index) {
      return this.cars[index]
    }
  }
  
  const tesla = new Factory('Tesla'); // create a new Tesla factory object by adding the company name
  tesla.generateCar(); // generate car object with Car classes, push the object into the cars array x 3
  tesla.generateCar();
  tesla.generateCar();
  console.log(tesla); //Factory object tell show how many cars you make with cars array output{company: 'Tesla', cars: Array(3)}
  console.log(tesla.findCar(0)) //find a car with index of the array, output: {serialNumber: 0, maker: 'Tesla'}
  
  const porche = new Factory('Porche'); // create a new Porche factory object by adding the company name
  porche.generateCar();
  porche.generateCar();
  porche.generateCar();
  console.log(porche);
  console.log(porche.findCar(1)); //{serialNumber: 1, maker: 'Porche'}