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

console.log(longestWord(longStr));
