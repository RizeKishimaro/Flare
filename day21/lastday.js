// function failPass(examMark,viperMark){
//     if(examMark>= 60 && viperMark >= 60){
//         return "Passed"
//     }
//     return "Failed"
// }
// console.log(failPass(70,60))
// console.log(failPass(5,40))
// console.log(failPass(60,60))
// function canICome(busNo){
//     if(busNo === 20 || busNo === 65){
//         return "You Reached the station";
//     }
//     return "YOu missed the station"
// }
// console.log(canICome(20))
// console.log(canICome(65))
// console.log(canICome(31))
// let name = 12;
// console.log(name)
// name = !name
// console.log(name)
// name = !name
// console.log(name)
// name = !name
// console.log(name)
// name = !name
// console.log(1+'10')
// console.log('10' - 9)
// let a = true;
// a && (function(){
//     console.log("I'm groot")
//     console.log("unavialiable 404")
//     return true
// })() && console.log("Min May Gyi Daw")
// function sayMyName(name){
//     if(typeof name ==="string"){
//         return name
//     }
//     return 'please ENter string only'
// }
// console.log(sayMyName("Rize KIshimaro"))
// console.log(sayMyName(["nob"]))
// console.log(sayMyName(12))
function callV(a,b,c){
    console.log(arguments)
}
console.log(callV(1,"r",3))