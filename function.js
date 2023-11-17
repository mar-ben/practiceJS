function square(x){
return x*x;
}

console.log(square(4));

//arrow functions

const power=(base,exponent)=>{
    let result=1;
    for(let count=0; count<exponent; count++){
        result*=base;

        }
        return result;
}

console.log('(2^2)= ' + power(2,2))

console.log("test");
//arrow function with single parameter.

const square2= x => x*x;
console.log('square of 2=' + square2(2));

//arrow functions with no parameter.

const future=()=>{

    return 'You will never see flying cars';
}
console.log('future message='+ future());

//java script function allows optional parameters.
function minus(a,b){
    if(b===undefined){
        return -a;
    } else return a-b;
}
console.log('10-5=',minus(10,5));
console.log('-10='+ minus(10));

//clouse -function has access to variables defined in it scope.

function wrapValue(n)
{
    let local=n;
    return ()=> local;
}
let wrap1=wrapValue(1);
let wrap2=wrapValue(2);

console.log(wrap1);
console.log(wrap2);

function multiplier(factor){
    return number=> number*factor;
}
let twice=multiplier(2);
console.log(twice(5));
console.log(twice(2));

//side efects 
const compute=function(x,y){
    console.log(x*y);
    return x*y;
}
compute(10,2);

//pure function - function without side efects.

const compute2=function(x,y){
    return x*y;
}
console.log(compute2(2,6));

//excercise find min

const min=function (a,b){
    return (a<b)?a:b;
}
console.log(min(2,3));
console.log(min(3,2));
console.log(min(2,2));

//Excersise recursion -find even Number.
console.log('Excercise is Even');

const isEven=function(n){
    //console.log(n);
    if(n>=2){
        return isEven(n-2);
    }
    if(n==1){
        return false;
    }
    if(n==0){
        return true;
    }
}
console.log(isEven(4));
console.log(isEven(3));

console.log('Excercise - bean counting ');

const countBs=function(str)
{
    let count=0;
    for(let a=0;a<str.length;a++){
        if(str[a]==='B'){
            count++;
        }
    }
    return count;
}
console.log(countBs('BBC'));

console.log('Excersise - count character in string');

const countChar=function(str,char){
    let count=0;
    for(let a=0;a<str.length; a++){
        if(str[a]===char){
            count++;
        }
    }
    return count;
}
console.log(countChar('kakkerlak','k'));

