// //task 
// // var temp = prompt("please enter your temperature: ");
// // var result = 9 / 5 * temp + 32;
// // alert("Farenheit: " + result + "Degree");
// // console.log("Tasl complet");

// // 
// // Make a calculator

// console.log("Select Option : \n1. Add\n2. Subtract\n3. Multiply\n4. Devidet");
// // document.write(`Select Option : 
// //     1. Add
// //     2. Subtract
// //     3. Multiply
// //     4. Devidet `);
// var num1 = prompt("Enter your 1st number");
// var num2 = prompt("Enter your 2nd number");
// var option = prompt("Select your option");
// var result = null;

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// option = parseInt(option);

// var num1Con = isNaN(num1);
// var num2Con = isNaN(num2);
// var optionCon = isNaN(option);

// if (num1Con || num2Con || optionCon) {
//     console.log("Invalid input!");
//     // document.write("Invalid input!");
// } else {
//     switch (option) {
//         case 1:
//             result = num1 + num2;
//             break;
//         case 2:
//             result = num1 - num2;
//             break;
//         case 3:
//             result = num1 * num2;
//             break;
//         case 4:
//             result = num1 / num2;
//             break;
//         default:
//             break;
//     }
//     if (result == null) {
//         console.log("No result :");
//     } else {
//         console.log("Result : " + result);
//     }
// }


//function

// saySomthin();
// function saySomthin(){
//     console.log("Hello how are you");
//     console.log("I am fine and you");
//     console.log("Who are you");
// }
// saySomthin();
// saySomthin();
// saySomthin();

// function dark(parm1="Osman", parem2="Goni") {
//     return(`hello ${parm1} ${parem2}`);
// }



// function saySomthin(name){
//     console.log("How are you " +name);
// }

// let saySomething1 = function(name1) {
//     console.log("HI i am fine " + name1);
// }


// const saySomething2 = name2 => {
//     console.log("Wel brather " + name2);
// }


// saySomthin("Shafiq");
// saySomething1("Nayan");
// saySomething2("Shafiq");

foods = ["cake", "apple", "biscut","tomato"];
numbers = [ 2, 5, 7, 8];


function saySomthing(value) {
    return `This ${value} is a food`;
}

function saySomething1(item) {
    return item*item;
}
let arr_res = foods.map(saySomthing);
let arr_num = numbers.map(saySomething1);

console.log(arr_res);
console.log(arr_num);