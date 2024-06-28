//task 
// var temp = prompt("please enter your temperature: ");
// var result = 9 / 5 * temp + 32;
// alert("Farenheit: " + result + "Degree");
// console.log("Tasl complet");

// 
// Make a calculator

console.log("Select Option : \n1. Add\n2. Subtract\n3. Multiply\n4. Devidet");
// document.write(`Select Option : 
//     1. Add
//     2. Subtract
//     3. Multiply
//     4. Devidet `);
var num1 = prompt("Enter your 1st number");
var num2 = prompt("Enter your 2nd number");
var option = prompt("Select your option");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid input!");
    // document.write("Invalid input!");
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
        console.log("No result :");    
    }else{
        console.log("Result : " + result);
    }
}


