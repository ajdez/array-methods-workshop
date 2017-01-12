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
