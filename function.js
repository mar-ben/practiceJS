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