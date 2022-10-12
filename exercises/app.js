console.log("hello");

let num = 0;
if (num > 0){
    console.log("positive")
} else if(num< 0){
    console.log("negative")
} else if(num=0) {
    console.log("this is number 0")
} else{
    console.log("this is not a number")
}

let userAge = 19;

if (userAge >= 18){
    console.log("access granted");
} else if(userAge <18){
    console.log("access denied")
} else{
    console.log("try again")
}

let number;
if (number === 0){
    console.log("zero")
}else if (number >0){
    if (number > 100){
        console.log("possitive and greater than 100 ")
    }else if(number < 100){
        console.log("possiive and smaller than 100")
    } else{
        console.log("possitive number")
    } 
} else if (number < 0){
    console.log("nagative number");
} else {
    console.log("please put in a number")
}

let grade;

if(grade >= 90){
    console.log("A")
} else if(grade >= 80){
    console.log("B")
} else if (grade >= 70){
    console.log("C")
} else if (grade >= 55){
    console.log("D")
} else if (grade <55) {
    console.log("F")
} else {
    console.log("undefined")
}