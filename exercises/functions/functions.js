// // Functions lession 

// //first class object ??
// //parenthasees after some thing might be a function

// //function declaration

// function one(){
//     return "one";
// }
// one();// calling one function


// // //function expression
// const two = () =>{
//     return 2;
// }
// one();
// // //make sure you call it after you declare it

// // shorter version of function using arrow
// const shortenedTwo = () => 2;


// // example of object 
// const NKL = {
//     name: "NK",
//     occupation: "student",
//     lessThanTwentyone: false,
//     age: 110,
// }
// //example of arrow function  and call it by passing an object inside of it
// const decreaseAge = (person) =>{
//     person.age += 1;
//     console.log(`${NKL.name}  age is ${person.age}.`) // template literals
// }

// decreaseAge(NKL);

// function areBothEven(n1,n2){
//     return !(n1%2) && !(n2%2);  // ! convert the falty statement to a truthy statement
// }
// console.log(areBothEven(3,4));

// let Nhan = getDevObject("html", "css", "javascript");

// let Nhan ={
//    name: "Nhan",
//    skills: []
// }

// let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "jQuery");

// function getDevObject(name) {
//   let skills = [];
//   for (let i = 1; i < arguments.length; i++) {
//     skills.push(arguments[i]);
//   }
//   return { devName: name, jobSkills: skills };
// }
// console.log(getDevObject(maria))

// let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "jQuery");

// function getDevObject(name, ...skills) {
//   return {
//     devName: name,
//     jobSkills: skills
//   };
// }
// console.log(getDevObject(maria))



// const sayName =(name) =>{
//     console.log(`my name is ${name}`)
// }

// sayName("Nhan the destroyer");

// const triangle = (height, base) =>{
//    let triangleResult = (height*base)/2;
//    console.log(`the area of a triangle with a heigt of ${height} and the base of ${base} is ${triangleResult} square unit.`)

// }

// triangle()

// const circle =  (radius) => {
//     let pi = 3.14;
//     let circleResult = (radius*radius)*pi;
//     console.log(`the area of a circle with the radius of ${radius} is ${circleResult} square unit.`)
// }

// circle();

// const planetHasWater = (planet) =>{
//     if (planet === "Earth" || planet === "Mars"){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(planetHasWater("Earth"));


// // variable
// var exampleVar = "one";
// var exampleVar = "two"; //re-declareable and re-asignnable
// console.log(exampleVar); // output : two

// // let varibale
// let exampleLet = "two" //from 2015
// let exampleLet = "three"//output Identifier 'exampleLet' has already been declared 
// exampleLet = "three" // re-asignnable
// console.log(exampleLet); //try diffrent scenario to see what happen

// // const variable;
// const exampleConst; //error because it must be assign
// const exampleConst = "three" // no error
// const exampleConst = "four" //error output Identifier 'exampleConst' has already been declared 
// exampleConst = "four" // error can not re-assign     
// console.log(exampleConst);//try diffrent scenario to see what happen
 

///
// const priceOne = 5
// const priceTwo = 2;
// console.log(priceOne+priceTwo);

// let x = 5;
// let y = 6;
// let z = x+y; 
// console.log(z);

// for (let i = 0; i < 8;i++){
//     console.log(i);
// }
// //example 
// const arr = [1,2,3,"5"];
// arr.foo = "Hello";

// console.log(arr); //output [1, 2, 3, '5', foo: 'Hello']



//FOR OF
//Iterates through the values of an iterable object.
//Great for iterating over the values of an array.
const myArray = [9,7,5,3,1];
for(let element of myArray){
    console.log(element);
}
//expected output: 9,7,5,3,1

//FOR IN
//Iterates through the keys of an iterable object.
for(let index in myArray){
    console.log(index);
}
//expected output: 0,1,2,3,4

//Great for iterating over the properties of an object.
const movie = {
    title: "Gremlins",
    year: 1984,
    genre: "Horror/Fantasy",
    rating: "PG"
}
for(let key in movie){
    console.log(`Key: ${key}, Value: ${movie[key]}`);
}

