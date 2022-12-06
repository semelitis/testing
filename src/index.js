//a function that takes a string 
// returns it with the first character capitalized
export  function capitalize(str){
    if (typeof str=== 'string'){
         return this.str.charAt(0).toUpperCase() + this.str.slice(1);
        }
}

//A reverseString function that takes a string and returns it reversed.
export class reverseString{
   
    reverse(str){
        if(typeof str==='string'){
            let splitString=str.split("");
            let reverseString=splitString.reverse();
            let joinString=reverseString.join("");
            
            return joinString;
        }}}


//A calculator object that contains functions for the basic operations: add, 
//subtract, divide, and multiply. Each of these functions should take two 
//numbers and return the correct calculation.

export class Calculator{
    // constructor(a,b){
    //     if(isNumber(a) && isNumber(b)){
    //         this.a=a;
    //         this.b=b;
    //     }
    // };
    
    isNumber(input) {
        return typeof input === "number";
      };

    add(a,b){
        if(this.isNumber(a) && this.isNumber(b)){
            return a + b;
        }};

    subtract(a,b){
        if(this.isNumber(a) && this.isNumber(b)){
            return a-b;
        }};

    divide(a,b){
        if(this.isNumber(a) && this.isNumber(b)){
            if(a!=0 && b!=0){
                return this.a/this.b;
            }}};

    multiply(a,b){
        return a* b;
    }};


//charCodeAt(0); unicode location
//String.fromCharCode(0); 
export function caesarCypher(string, shift) {
    let lettersRegex = /[a-zA-Z]/;
    let cypher = buildCypher(shift);
    let out = "";
    for (let i = 0; i < string.length; i++) {
      if (lettersRegex.test(string[i])) {
        if (isUpperCase(string[i])) {
          out += cypher[string[i].toLowerCase()].toUpperCase();
        } else {
          out += cypher[string[i]];
        }
      } else {
        out += string[i];
      }
    }
    return out;
  }
  
export function buildCypher(shift) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    if (shift < 0) shift = letters.length + (shift % letters.length);
    let cypher = {};
  
    for (let i = 0; i < letters.length; i++) {
      cypher[letters[i]] = letters[(i + shift) % letters.length];
    }
  
    return cypher;
  }
  
export function isUpperCase(string) {
    return string === string.toUpperCase();
  }

export  function analyzeArray(list){
    if (Array.isArray(list)){ 
        this.list=list;
        this.list.sort();
        let minimum = this.list[0]
        let maximum = this.list[list.length - 1]
        total=0;
        for ( let i = 0; i <this.list.length; i++ ){
                 total += this.list[i]
           ;}
        let avg= total / this.list.length ;   
        let obj =Object.create({
            average: avg,
            min: minimum,
            max: maximum,
            length: list.length}) 
     }
     return obj;     
}
