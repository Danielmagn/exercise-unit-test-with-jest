const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}

function fromEuroToDollar(euros) {
    let dolares = euros * oneEuroIs.USD;
    return dolares;
}


function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;
    let libras = euros * oneEuroIs.GBP;
    return libras;
}