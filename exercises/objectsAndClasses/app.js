// const myCat ={
//     name: "Kit",
//     age: 6,
//     interest: ["eat", "sleep"],
//     speachFrench: false,
//     solveRubickCube: false
// }

// console.log(myCat)


// // 

// const obj = {
//     salutation: 'hi',
//     count: 4
// }
// //does a value exisg inside of obj

// Parameters


function defaultParameter(param1, param2){
   return param1*param2;
}


//Rest parameters

function getNhanObject(name, shoeSize, ...skills){
    return{
        objName: name,
        objShoeSize: shoeSize,
        objSkill: skills
    }
}

console.log(getNhanObject("NhanKhang", 8.5,"eat","sleep","rest"));

//Scope
// var
// let
// const


// //arrows function
// let show = () =>{
//     console.log('anonymous function')
// }

// show();

// const arrowsFunction = (param1, param2) =>{
//     return param1*param2
// }

// arrowsFunction(2,4);

// //object

// let object= {
//    id: 1,
//    name: 'Volvo' 
// }

// //Modify an Object Nested Within an Object

// object.wheel = [1,2,3,4]

// //Acess property name with bracket Notation
// console.log(object.wheel[2]);

// //remove object properties


class Vehicle {    
    constructor(vin, make) {        
        this.vin = vin;        
        this.make = make;   // return is not needed    
        // because the new object is returned by default    
    }


}

const car = new Vehicle('A1234', 'Toyota', 'Camry');
console.log(car);