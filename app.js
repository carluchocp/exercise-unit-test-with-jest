const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen (dollars){
    let result = (dollars/1.2)*127.9
    return result
}
function fromEuroToDollar (euros){
    let result = euros*1.2
    return result
}
function fromYenToPound (yens){
    let result = (yens/127.9)*0.8
    return result
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}