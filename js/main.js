//function to reverse a string
function reverseThisString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseThisString('hello');

//function to switch upper and lowercase letters

function swapCase(string) {
    return string.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapCase('Hello World'));

//function that converts numbers from farenheit to celcius
function toCelcius(array){
    let temp = array.map(x => (x - 32) * (5/9))
return temp
}
const array = [23, 32, 41, 50, 59];
console.log(toCelcius(array));

//array of booleans
function passOrFail(array){
    if(array >= 75){
      return true;
    }
    return false;
  }
  argument = [20, 30, 50, 80, 90, 100];
  result = argument.map(passOrFail);
 
  //loop for german numbers
  function germanNumbers(){
let resultarray = [];
const cardinalNumebrs=[2,3,4,5,6];
const germannumbers=['zwei', 'drei', 'vier', 'funf', 'sechs'];
for (let i = 0; i < cardinalNumebrs.length; i++) {
resultarray.push(cardinalNumebrs[i]+" is "+germannumbers[i]);
}
return resultarray;
}
let gnumebrs = germanNumbers();
console.log(gnumebrs);


//array of prime numbers
function isPrime(num) {
    if (num <= 1)
    {
    return false;
    }
    else
    {
    for (let i = 2; i < num; i++)
    {
    if (num % i == 0) {
    return false;
    }
    }
    return true;
      
    }
    }
    function returnPrimeNumbers () {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const result = numbers.filter(number => isPrime(number));
    return result;
    }
    console.log(returnPrimeNumbers());


// loop from 1-100
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("CSC225 RULES I LOVE JAVASCRIPT");
    } else if(i % 3 == 0) {
        console.log("CSC225 RULES");
    } else if(i % 5 == 0) {
        console.log("I LOVE JAVASCRIPT");
    } else {
        console.log(i);
    }
}




