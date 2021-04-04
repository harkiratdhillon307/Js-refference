// 1. Ways to print in JavaScript
// consol.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2. JavaScript console API
//console.log("Hello World", 4 + 6, "Another log");
//console.warn("this is warning");
//console.error("This is an error");

// 3  JavaScript Variables
// What are variables? - Containers to store data values

/*
multi
line
comment
*/

// var number1 = 34;
// var number2 = 56;
//console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
// var num1 = 455;
// var num2 = 56.76;

// String
// var str1 = "This is a string"
// var str2 = "This is also a string;"

// Objects
// var marks = {
    // ravi: 34,
    // shubham: 78,
    // harry: 99.977
// }
//console.log(marks);

// Booleans
//var a = true;
//var b = false;
//console.log(a, b);

//var undefined
// var und;
//console.log(und);

//var null
// var n = null;
//console.log(n);

/*
At a very high level,there are two types of data
types JavaScript

1. Primitive data types: undefined, null, numbe, string, boolean, symbol
2. Reference data types: Arrays ans Objects
*/

// var arr = [1,2, "bablu", 3,4,5 ];
//console.log(arr);

// Operators ins JavaScript
//Arthomatic Operators
// var a = 100;
// var b = 10;
//console.log("The value of a + b is ", a+b);
//console.log("The value of a - b is ", a-b);
//console.log("The value of a * b is ", a*b);
//console.log("The value of a / b is ", a/b);

// Assignment Operators
// var c = b;
// c += 2;
//c -= 2; //c = c - 2;
//c *= 2;
//c /= 2;
// console.log(c);

// Comparision Operaters
// var x = 34;
// var y = 56;
//console.log (x == y);
//console.log (x >= y);
//console.log (x <= y);
//console.log (x > y);
//console.log (x < y);

// Logical Operaters

// Logical and
//console.log(true && true);
//console.log(true && false);
//console.log(false && true);
//console.log(false && false);

// Logical or
//console.log(true || true);
//console.log(true || false);
//console.log(false || true);
//console.log(false || false);

// Logical not
//console.log(!false);
//console.log(!true);

// function avg(a, b){
    // c = (a + b)/2;
    // return c;
// }

// DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
// var age = 19;
// Single statement
// if (age >= 18) {
    // console.log('You can drink rasna water');
// }

// if-else statement
// if  (age >= 18){
    // console.log('You can drink rasna water');
// }
// else{
    // console.log('You cannot drink rasna water');
// }


// age = 25;
// if-else ledder
// if (age >= 32) {
    // console.log('Jald boodhe ho jaoge');
// }

// else if(age >= 26) {
    // console.log('tum toa 26 ke hokar bhi ullu hi ho');
// }
// else if(age >= 22) {
    // console.log('job mil gyi kya');
// }
// else if(age >= 18) {
    // console.log('o bade ho gye ho ab toa');
// }
// else {
    // console.log('tun toa age btayega nhi')
// }
// console.log('end of ledder');

// Loops in JavaScript
// var arr =[1, 2,3,4,5,6,7];
// console.log(arr);
// for(var i = 0;i<arr.length;i++){
//     if(i==2){
//       break
//       continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
  // console.log(element);
// })

// const ac = 0;
// ac++;
// ac = ac +1;

// let j = 0;
// while (j<arr.length) {
  // console.log(arr[j]);
  // j ++;
// }

// do{
  // console.log(arr[j]);
  // j ++;
// } while (j<arr.length);

// let myArr = ['Fan', 'camera', 34, null, true];
// Arry Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
// myArr.shift();
// const newLen = myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
// let myLovelyString ="Harry is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(1,4));
// d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString);

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// Dom Manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p'); 
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement );
// removeChild(element); -->removes an element


// Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel)
// sel = document.querySelectorAll ('.container');
// console.log(sel);
// sel[0].style.border = "8px solid darkgreen";

// Function real use
// function clicked() {
//   console.log('The button was clicked');
// }
// window.onload = function() {
//   console.log('The document was loaded');
// }

// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//   console.log("Clicked on Container");
// })

// firstContainer.addEventListener('mouseover', function(){
//   console.log("Mouse on Container.");
// })

// firstContainer.addEventListener('mouseout', function(){
//   console.log("Mouse out of Container");
// })

// let prevHTML =  document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup', function(){
//   document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//   console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//   console.log("Mouse down when clicked on Container");
// })

// Arrow Functions
// function summ(a, b){
//   return a+b;
// }
// summ = (a, b)=>{
//   return a+b;
// }

// logKaro = ()=>{
//   document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//   console.log("I am your log");
// }

// SetTimeout and setInterval
// clr = setTimeout(logKaro, 5000);
// setInterval(logKaro, 2000);

/*
 use 
 clearInterval/clearTimeout 
 with to cancel
 setInterval/setTimeout
 ex~ clearTimeout(clr); , clearInterval(clr);
*/

// JavaScript localStorage
// localStorage.setItem('name', 'harry');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// Json
// obj = {name: "harry", length: 1, a: {this: 'th"at'}}
// console.log(obj);
// console.log(typeof obj);
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

// Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`)