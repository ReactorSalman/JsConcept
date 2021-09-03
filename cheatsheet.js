/* Js is loosly-typed language (i.e we don't need to state the type of object) 
once declare it JS will figure it out it's own */

/* 3 ways of declaring variables (variables are the building block of Javascript) */
/** 1. var (can be redeclared, global and local scope, can be declared without initialization, can be updated)
 *  2. let (can not be redeclared, blocked scope, can be declared without initialization, can be updated)
 *  3. const (can not be redeclared, blocked scope, can not be declared without initialization, can never be update)
*/

var x; //can be declared without initialization
x = "var"; 
console.log(x);
var x; //can be redeclared
x = "var1"; 
x = "var2"; //can be updated
console.log(x);

let y; //can be declared without initialization
y = "let";
/*let y; */ //can not be redeclared
y = "let1";
y = "let2"; //can be updated
console.log(y)


// Differnece between == and ===

// == compare only value.
// === compare both value and type.

// Example

let a = 1;
let b = '1';

console.log(a == b); //true

console.log(a === b); //false

/* Arrays in javaScript */
/*  If we declare lots of variables, it make sense to store them somewhere. 
*   Otherwise it will be difficult to keep track of all of them.
*   Arrays are the one storing a variable.
*/

/* Example */

let el1 = 4;
const el2 = 5;
var el3 = "hello";

const ar = [el1, el2, el3];

/** or directly */
const array = [4, 5, "hello"];

/* JavaScript array methods 
*   Most frequently used array methods in Js are: 
*   map, filter, reduce and forEach
*/

/* map array method -
*   map creates copy of original array.
*   we use map when we want to do something with the elements of original array but don't want to change it.
*/

const arr = [2,3,4,5];
const newArr = arr.map((item) => {
	return item * 2;
})

console.log(newArr);

/* filter array method 
*   filter array creates a new array elements that meets the given condition
*/

const words = ["react", "c", "c++", "javaScript", "java"];

const newWords = words.filter((wrd) => wrd.length > 3)

console.log(newWords);

/* without filter */

const nWords = [];

for(let i=0; i < words.length; i++){
	if(words[i].length > 3){
		nWords.push(words[i])
	}
}

console.log(nWords);

/* forEach array method 
*   forEach is similar to map but there are two key differences -
*   1. map returns the new Array but forEach doesn't return any value.
*   2. We can do chaining in map but not in forEach
*  Both map and forEach doesn't change original array.
*/ 

// Example

const numberArr = [1,2,3,4,5,6]
const mapExp = numberArr.map((item) => (item % 2 == 0 ? item * 2 : item * 1));
console.log(mapExp) //[1,4,3,8,5,10]

const forEachExp = numberArr.forEach((item) => (item % 2 == 0 ? item * 2 : item * 1));
console.log(forEachExp) // undefined

/* Clousers 
*   A function bundled together with its lexical environment forms a clouser
*   What is lexical environment?
*   It is essentially the surrounding state - the local memory along with the lexical environment of it's parent
*/

// Example

function clouse(){
	var clouseVar = 7;
	function innerClouser(){
		console.log(clouseVar)
	}
	return innerClouser()
}

/* Clouser advantages in javascript */
/* 1. currying - currying is a technique for transforming functions. for ex - f(a,b,c) transform to f(a)(b)(c)*/

//Ex 1 -
let add = function(x){
	return function(y){
		console.log(x + y);
	}
}

let addByTwo = add(2)
addByTwo(3)


//Ex 2 -
function func1(f){
	return function(m){
		return function(n){
			return f(m, n)
		}
	}
}

function sum(a, b){
	return a + b;
}

let curriedSum = func1(sum);
console.log(curriedSum(1)(2));

/* 2. Data Hiding / Encapsulation 
* Used when we don't want to expose variable outside the function.
*/

//Ex

function counter(){
	let count = 0;
	this.incrementCount = function(){
		count++;
		console.log(count);
	}
}

//console.log(count); // Error count is not defined Data Hidden
var adder = new counter()
adder.incrementCount(); //1

/* Disadvantages of clouser 
*   Overconsumption of memory or memory leak can happen
*/

/* Hoisting is javaScript 
*   Javascript have the default behaviour of moving declaration to the top of the program.
*   1. var declartion will hoisted up and initialize as undefined.
*   2. let and const declaration will hoisted up but not initialized.
*   3. functions declaration will also hoisted up and stored as they are.
*/

// Example - 

function hoist(){
	console.log(name); // undefined
	var name = 10;
}

// how JS see's it
	function hoistJS(){
		var name;
		console.log(name);
		name = 10;
	}

// let Example
	function hoistLet(){
		// console.log(name); //Error
		console.log(nameConst); //Error
		let name = 7;
		const nameConst = 7;
	}

/* Object in Js 
* Another way of storing data in Js, Objects store data as key-value pair
*/

//Example
const obj = {
	name: "salman",
	age: "25"
}

console.log(obj);












