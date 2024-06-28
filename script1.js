// //Number

// //console.log("HELLO")
// student = ["nayan", 2,{name:"nayan", age:23, id:["nayan",{id:23, sr:"name",name:["Nayan","Hossain"],distic:"magura"},"hossain","attick"], home:"magura"},"Osman"] 
// console.log(student);

// var num = ["123"];
// var num1 = num;
// console.log(num1);
// num  [0] = 4555
// console.log(num1)

//temple retarul
// var a = `My name is Abdullah Hossain
// my name nayan hossain`;
// console.log(a);

// var name = "Nayan hossain";
// var age = 23;
// var roll = 64
// console.log(`This is a ${name}
//     His age is ${age}
//     His roll is ${roll}`);

// var a = 12;
// var b = 23;
// console.log(` ${a} + ${b} = ${ a + b }`);
// 

// var n1 = prompt("Enter your First Bumber");
// var n2 = prompt("Enter your Second Bumber");
// var n3 = prompt("Enter your Third Bumber");

// n1 = parseInt(n1);
// n2 = parseInt(n2);
// n3 = parseInt(n3);

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`first input ${n1} is the large number`);  
// } else if ( n2 >= n1 && n2 >= n3){
//     console.log(`Second input ${n2} is the large number`); 
// }else{
//     console.log(`Third  input ${n3} is the large number`); 
// }
// if ( n1 >= n2){
//     if( n1 >= n3){
//         console.log(n1 + " is the learge number");
//     }else{
//         console.log(n3 + " is the learge number");
//     }
// }else{
//     if (n2 >= n3){
//         console.log(n2 + " is the learge number");
//     }else{
//         console.log(n3 + " is the learse nuber");
//     }
// }


//switch making
/*
console.log("Please Select option : \na. Option 1 \nb. Option 2 \nc. Option 3");
choice = prompt();

var text;
switch (choice) {
    case "a":
        text = "Option 1 Seleced";
        break;
    case "b" :
        text = "Option 2 Selected";
        break;
    case "c" :
        text = "Option 3 Selected";
        break;
    default:
        text = "No option is selected"
        break;
} 
console.log(text);
*/

//garade calculate
/*
 var number = prompt("Enter your Number");
 number = parseInt(number);

 var grade;

if (number <= 100 && number >= 80) {
    grade = "A+"
}else if (number < 80 && number >= 70 ) {
    grade = "A" 
}else if (number < 70 && number >= 60 ) {
    grade = "A-" 
}else if (number < 60  && number >= 50 ) {
    grade = "B" 
}else if (number < 50 && number >= 40 ) {
    grade = "C" 
}else if (number < 40 && number >= 33 ) {
    grade = "D" 
}else if (number < 33 && number >= 0 ) {
    grade = "F" 
}else{
    console.log("Invali Input");
}
console.log("Your Grade = " + grade );
*/

// calculator
/*console.log("Please Select an Optin: \n1. Add \n2. Substract \n3. Multiply \n4. Devidate");

var num1 = prompt("Please Enter your 1st number");
var num2 = prompt("Please Enter your 1st number");
var option = prompt("Please Select your Option");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);
123
if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }
    if (result == null) {
        console.log("No Result");
    }else{
        console.log("Result: " + result);
    }
}*/
 //loop
/*
 var x = 1;

 while ( x <= 10) {
    console.log("enter your result: " + x  );
    x++;
 } */