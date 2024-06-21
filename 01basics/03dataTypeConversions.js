let Score ;

console.log(typeof Score); //two ways to use typeof
console.log(typeof(Score));
 
let StN=Number(Score);
console.log(typeof StN);
console.log(StN);

/*
"33" to 33
"33an" to NaN but typeof will still be number
true to 1
false to 0 for boolean
undefined to NaN but ype would be number
null to 0
*/

//boolean conversion
console.log("");
let value=undefined;

let boolval=Boolean(value);
console.log(boolval);
console.log(typeof(boolval));

/*
"1" to true;
"0" to true;
"hi"to true;
"" to false;
null to false;
undefined to false;
1 to true;
0 to false;
*/
console.log("");

//number to string conversion;

let np=123456;
let stringvalue=String(np);
console.log(typeof stringvalue);
console.log(stringvalue);
