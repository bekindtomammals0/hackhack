// "use strict";
// num = 5;

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// let color_orange = COLOR_ORANGE;
// let color_red = COLOR_RED;
// let color_blue = COLOR_BLUE;
// let color_green = COLOR_GREEN;

// alert(color_blue);
// alert(color_green);
// alert(color_orange);
// alert(color_red);

// let message = "I'm JScript";
// alert(message);

// let temp1 = "temp1",
//     temp2 = "temp2",
//     temp3 = "temp3";

// // alert(3 + 1 + 2); //This adds 3+1+2 = 6
// const tae = "word means shit"
// alert(tae)

// let admin, name;

// name = "John";
// admin = name;
// alert(admin);

// const planet_name = "Earth";
// let currentUser_name = "John";

// let message = "hello";
// message = 123456;
// alert(message);

// let name = "John";
// // embed a variable
// alert( `Hello, ${name}!` ); // Hello, John!
// alert( `9 + 1 != ${11}`);
// alert( "the result is ${1 + 2}" );

// let nameFieldChecked = true; // yes, name field is checked
// let ageFieldChecked = false; // no, age field is not checked

// let isGreater = 4 > 1;
// alert( `4 > 1 = ${isGreater}` ); // true (the comparison result is "yes")

// let age = null;

// let age;
// alert(age);

// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya

// let age = prompt('How old are you?', 100);
// let age = prompt('How old are you?');
// alert(`You are ${age} years old!`)

// let result = confirm("Are you sure you want to proceed?");

// alert(result);
// let userName = prompt("What is your name?");
// alert(`Welcome, ${userName}!`);

// let value = true;
// alert(`${value} is ` + typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(`${value} is ` + typeof value); // string

// alert("6"/"2"); // 3, strings are converted to numbers

// let str = "12314";
// alert(`${str} is ` + typeof str);

// let strToNum = Number(str);
// alert(`${strToNum} is ` + typeof strToNum);

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false
// alert( Boolean("0") ); // true
// alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

// let x = 1;
// x = -x;
// alert( x ); // -1, unary negation was applied

// let x = 1, 
//     y = 3;
// alert( y - x ); // 2, binary minus subtracts values

// alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, a remainder of 8 divided by 3

// alert( 2 ** 2 ); // 4  (2 multiplied by itself 2 times)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 times)
// alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)

// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// let s = "Hello" + " World!";
// alert(s);

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"
// alert(2 + 2 + '1' ); // "41" and not "221"
// alert('2'+ 2 +'1'); // "221" and not "41"

// alert( 6 - '2' ); // 4, converts '2' to a number
// alert( '6' / '2' ); // 3, converts both operands to numbers

// // No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0

// let apples = "2";
// let oranges = "3";
// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5
// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// let a, b, c;
// a = b = c = 2 + 2;
// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4

// let a = (1 + 2, 3 + 4);
// alert( a ); // 7 (the result of 3 + 4)

// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// let a = 2;
// let x = 1 + (a *= 2); //a = 4, x = 5

//TEST//
// "" + 1 + 0      // 1    "10"
// "" - 1 + 0      // -1   /
// true + false    // 1    /
// 6 / "3"         // 2    /
// "2" * "3"       // 6    / 
// 4 + 5 + "px"    // 9px  "9px"
// "$" + 4 + 5     // $9   "$45"
// "4" - 2         // 2    /
// "4px" - 2       // NaN  /
// 7 / 0           // Infinity / 
// "  -9  " + 5    // -95  "  -9  5"
// "  -9  " - 5    // -14  /
// null + 1        // 1    /
// undefined + 1   // NaN  /
// " \t \n" - 2    // NaN  -2

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); // 12
// alert(+a + +b); // 3 CORRECT


// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

// let a = 0;
// alert( Boolean(a) ); // false
// let b = "0";
// alert( Boolean(b) ); // true
// alert(a == b); // true!

// alert( 0 === false ); // false, because the types are different

// alert(null == undefined); // true
// alert(null === undefined); // false

// let year = prompt('In which year was ECMAScript-2015 specification published?');

// if (year == 2015){
//     alert( 'You are right!' );
// } 
// else{
//     alert( 'The answer was incorrect.');
// }

// let age = prompt('How old are you?', '');
// let accessAllowed = (age > 18) ? true : false;
// let accessAllowed = age > 18;

// let result = prompt("What's the " +"'official'"+ " name of Javascript?" );
// if(result == 'ECMAScript'){
//     alert('You are right!');
// }
// else{
//     alert('The answer is ECMAScript.');
// }

// let result = prompt('Input a number');
// if(result > 0){
//     alert(1);
// }
// else if(result < 0){
//     alert(-1);
// }
// else{
//     alert(0);
// }

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";
// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// let user = "John";
// alert(user ?? "Anonymous");

// let height = null;
// let width = null;
// // important: use parentheses
// let area = (height ?? 100) * (width ?? 50);
// alert(area); // 5000

// let userName = 'John';
// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }
// // the function will create and use its own userName
// showMessage();
// alert( userName ); // John, unchanged, the function did not access the outer variable

// function showMessage(from, text) { // arguments: from, text
//     alert(from + ': ' + text);
// }
// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// function showMessage(from, text) {
//     from = '*' + from + '*'; // make "from" look nicer
//     alert(from + ': ' + text);
// }

// let from = "Ann";
// showMessage(from, "Hello"); // *Ann*: Hello
// // the value of "from" is the same, the function modified a local copy
// alert(from); // Ann





