function occupyParking (yesterday, today, space) {
    let count = 0;
    for (let i = 0; i < space; i++) {
        if(yesterday[i] === 'C' && today[i] === 'C') {
            count++;
        }
    }
    return count;
}
console.log(occupyParking("CC..C", ".CC..",5));