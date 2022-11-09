//1 usd = 2100mmk
const rates = {
    usd: 2100,
    sgd: 1490,
    eur: 2108,
}
// function caculate(amount,currency){
//     return (amount*rates[currency])+" mmk";
// }
// console.log(caculate(1000,"usd"));
// console.log(caculate(1420,"sgd"));
// console.log(caculate(2100,"eur"));
function MmkTocurrency(inputmmk,currency){
    return inputmmk / rates[currency]+" "+currency;
}
// console.log(MmkTocurrency(4050000,'usd'));
// console.log(MmkTocurrency(150000,'sgd'));
// console.log(MmkTocurrency(250000,'eur'));
function toAnyCUrrency(amount,fromCurrency,toCurrency){
    let mmk = amount * rates[fromCurrency];
    let result = mmk / rates[toCurrency];
    return result+toCurrency
}
console.log(toAnyCUrrency(1000,'usd','sgd'))
console.log(toAnyCUrrency(3500,'usd','usd'))
console.log(toAnyCUrrency(4200,'eur','usd'))
console.log(toAnyCUrrency(1000,'usd','sgd'))
document.write(toAnyCUrrency(1000,'usd','sgd'))