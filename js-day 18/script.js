let num = 5;
// num = num+=1
// num = num+=1
// num = num+=1
// ++num
//work in another line with num ++ 
console.log(num++)//same as -- eg. num--
console.log(num)
// work in one line with ++num
console.log(++num)//same as -- eg.--num
console.log(num)
//++num work in one line because of the expression was executed in first
//num++ work in other line because of the epression was executed next of variable
//logic operator
//reverse value ! eg. console.log(!(1<5)) answer= false
let exp = true;
console.log(!exp)
//&& condition make if one false was included then all expression was false like multiplication
let con = true && true // result= true
let con2 = true && false && true // result was false
// || condition make if one true was included then all expression was true 
let con3 = true || true || false // true
let con4 = false || false|| true// true
//? truly falsly make discussion to expressions
let x =5;
console.log(x<5 ? "Yes i agree": "No it's not!")//no it's not

//convert it to the string that programmer wants to tell 
let areYourMomYet = true;
console.log(areYourMomYet ? "Yes It Is" : "NO it's not!")

//function defaut parameter that will give undefined when no augruments are not specified
function date(num="NO Data"){
    return "THE RETURN VALUE IS "+ num;
}
console.log(date());
//embed function in a variable or other was called function expression eg.
const dad = function(me="son"){
    return "Hey Daddy Is Here "+me
}
console.log(dad());

//immediately INvoked Function(IIFE) start without inoke it's name
(function(){
    alert("YOu Called Me NOb");
    return "Sussy Baka";
})()
//we'll test in template string 
console.log(`${(function(){
    return 'Welcome TO the Rice Land Mother Fuck*r ' +"Fack My Life" //can combine with expressions
})()}`)
//function can be invoked by another function by calling it's function name
function Ride(){
    return Drive(12);
}
function Drive(time){
    return "Get Up And YOu need to go because it's "+ time + "Hours"
}
Ride()