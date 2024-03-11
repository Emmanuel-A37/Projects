/*for(let i= 1; i<=100; i+=1){
    
    if(i % 5 == 0 && i % 3 == 0){
        console.log("fizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 ==0 && i % 3 !== 0){
        console.log("Buzz");
    }
    
    else{
        console.log(i);
    }

}*/
/*let isEven = N =>{
    if (N % 2 == 0){
        return true
    }
    else if(N % 2 == 1 || N % 2 == -1){
        return false;
    }
    else{
        return isEven(N-2);
    }

}
console.log(isEven(-1));
*/

/*
function countchar(string,char){
    let total = 0
    for( let count = 0; count <= string.length; count+=1){
        if (string[count] == char){
            total += 1;
        }
        else{
            continue;
        }
    }
    return total
}
console.log(countchar("BidnkBjdksjB","d"))
*/
/*function phoneticLookup(val) {
    let result = "";
    const lookup = {
      alpha : "Adams",
      bravo : "Boston",
      "charlie" : "Chicago",
      delta : "Denver",
      echo : "Easy",
      foxtrot : "Frank"
    };
    result = lookup[val];
    
  
    // Only change code above this line
    return result;
  }
  
  console.log(phoneticLookup("charlie"));
  */
 // SELECTION SORT
 
function snitch(stg){
    for(let i = 0; i < stg.length; i++){
        let min = i;
        for(let j = i+1;stg.length; j++ ){
            if (stg[j] < stg[min]){
                min = j;
            }
            else{
                continue;
            }
        }
        [stg[i],stg[min]] = [stg[min],stg[i]];
    }
    return stg;
 }
function ascending(list){
    let sj = "";
    list = (snitch(list));
    for( let i = 0 ; i < list.length ; i++){
        sj += String(list[i]);
        if (i == list.length - 1){
            sj += ".";
        }
        else{
            sj += " < ";
        }
    }
    return sj;

 }
let rad = [-1,2,-6,7,434]
//console.log(ascending(rad))
/*
function reverseArrayInPlace(arr){
  
    for (let i = 0; i < arr.length / 2; i++){
        [arr[i],arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]];
    }
    return arr;
}

console.log(reverseArrayInPlace([23,43,3,3,124,64,17]))
*/
 console.log(3**2);
