const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});
 test("One dollar should be 1.2 euros, and one euro should be 127.9 japan yen", function(){
     const { fromDollarToYen } = require('./app.js')

     expect(fromDollarToYen(12)).toBe(1279);
})
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("127.9 japan yen should be 0.8 GBP ", function(){
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(127.9)).toBe(0.8);
})