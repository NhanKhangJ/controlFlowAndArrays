// Functions lession 

//first class object ??
//parenthasees after some thing might be a function

//function declaration

function one(){
    return "one";
}
one();// calling one function


// //function expression
const two = () =>{
    return 2;
}
one();
// //make sure you call it after you declare it

// shorter version of function using arrow
const shortenedTwo = () => 2;


// example of object 
const NKL = {
    name: "NK",
    occupation: "student",
    lessThanTwentyone: false,
    age: 110,
}
//example of arrow function  and call it by passing an object inside of it
const decreaseAge = (person) =>{
    person.age += 1;
    console.log(`${NKL.name}  age is ${person.age}.`) // template literals
}

decreaseAge(NKL);