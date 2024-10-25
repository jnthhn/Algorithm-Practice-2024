function factorial(n){
    for (let i=0; i < n; i++)

}

function factorial(n){
    if(n <= 0) {
        return "negative number or 0";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(6));

function occupyParking (yesterday, today, space) {
    let count = 0;
    for (let i = 0; i < space; i++) {
        if(yesterday[i] === 'C' && today[i] === 'C') {
            count++;
        }
    }
    return count;
}
console.log(occupyParking("CC..C", ".CC..", 5));



function decimalConverter(binary){
    let decimal = 0

    for(let i = 0; i < binary.length; i++) {
        if(binary[binary.length -1 -i] ==="1"){
            decimal = decimal + Math.pow(2,i)
        }
    }
    return decimal;
}
console.log(decimalConverter("1101"));


function binaryConverter(decimal){

    for(let i = 0; i < decimal.length; i++) {
        
    }

}