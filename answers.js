// new answers.js file
 
//fucnton Print Postivies

function printPositives(array){
    
    array.forEach(function(item){
        if (item > 0){
            console.log(item);
        }
    });
}

//Get positive

function getPositives(array){
    var newArr = [];
    
    newArr = array.filter(function(item){
        if (item > 0){
            return item;
        }
    })
    
    return newArr;
}

var arrayProblem2 = [2, 3, -9, -8, 5, 7];


//Filter it out

function filterPos (array){
    return array.filter(function(item){
        if (item > 0){
            return item;
        }
    }).forEach(console.log);
}

//Filter Array
var filterArray = Array.prototype.filter;

//The Longest Word


function longestWord(str){
    var strArray = str.split(" ");
    return strArray.reduce((a, b) => {
        if(a.length > b.length){
            return a;
        }
        else{
            return b;
        }
    })
}
var longStr = "holy cow johny boy you will never make it in hollywood gurl";


longestWord(longStr);


//i'd like to buy a vowel


// Using forEach
function countVowels(str){
    var array = str.split("");
    var count = 0;
    array.forEach((a)=>{
        if (a === "a" || a === "e" || a === "i" || a ==="o" || a === "u" || a === "y"){
            count++;
        }
    })
    return count;
}

var string = "Look at all the kitten";


//Using filter();

function countVowels(str){
    var array = str.split("");
    
    var arrayTwo = array.filter((a)=>{
        if (a === "a" || a === "e" || a === "i" || a ==="o" || a === "u" || a === "y"){
            return a;
        }
    })
    return arrayTwo.length;
}

var string = "Look at all the kitten";
console.log(countVowels(string));


//High? Low ?

function highLow(array){
    var object = {
        highest: 0,
        lowest: 0
    };
    object.highest = array.reduce((a, b) =>{
        if (b < a){
            return a;
        }else{
            return b;
        }
    }, -Infinity);
    object.lowest = array.reduce((a, b) =>{
        if (b > a){
            return a;
        }
        else{
            return b;
        }
    }, Infinity);
    return object;
}


var array = [1, -10, 20, 40, 5];


//Wheel of Fortune

function countChars (str){
    var object = {};
    var strArray = str.split("");
    
    strArray.forEach(function(item){
        if (item in object){ 
            object[item] ++;
        }
        else{
            object[item] = 1;
        }//object exist)
    })
    return object;
}


//Funcitonal Programming

// function negate(func){
//     return !(func);
// }

function negate(func){
    return function(x){
        return !(func(x));
    }
}

function isEven(num) {
  return num % 2 === 0;
}

var isOdd = negate(isEven);

var array = [1, 2, 3];

array.filter(isEven);
array.filter(isOdd);