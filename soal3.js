const printSegitiga = 5

function printTriangle(printSegitiga) {
    let hasil =""
    for (let i = 1; printSegitiga >= i; printSegitiga--) {
        for (let j = i; j <= printSegitiga; j++) {
            hasil += j
        }
        hasil += '\n'
    }
    console.log(hasil)
}
printTriangle(printSegitiga)