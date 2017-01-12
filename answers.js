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