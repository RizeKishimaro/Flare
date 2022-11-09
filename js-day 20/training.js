//if else condition
//statement1 with true
//title Is THe car has fuel?
function Drive(){
    const isFullFuel= true;
    if(isFullFuel){
        return "The Car has full fuel so we can drive it";
    }
    return "AH!Crap!The car has no fuel We can't dive."
}
console.log(Drive())
//statement2 with false argument
//title Guard the login!!
function Check(input_password){
    const db_pass= "root@localhost";
    if(db_pass==input_password){
        return `You're logged in.And your password was ${db_pass}.`;
    }else{
        return "Wrong Password or Username!!";
    }
}
console.log(Check("12345"))

//statement3 with true argument
//title are you hungry?
function Ask(){
    console.log("Son Are You Hungry?");
    const tummy = null;
    if(tummy==null){
        return "Yes Mom i'm very hungry.I want to eat";
    }else{
        return "No I'm not hungry.I'm full.Thanks for asking."
    }
}
console.log(Ask());
//statement 3 with true argument
//title Is The Food Was expire?
function checkExpire(today_date){
    const food_expire_date = '17.10.2022';
    if(food_expire_date==today_date){
        return "It's not expire yet.Then i can eat it.";
    }else{
        return "Too bad.I should have eat that before it expire.";
    }
}
console.log(checkExpire("1.11.2022"));
//statement 4 with true argument
//title playing games
function workWhenPlaying(){
    const playing = true;
    if(playing){
        return "mom i'm playing please wait for a bit please?";
    }else{
        return "okay mom give me the list i'm gonna go."
    }
}
//statement 5 with false argument
//title i like the movie
function favMovie(answer){
    if(answer){
        return "Yeah i like movie too.";
    }else{
        return "Humm.WHy?";
    }
}
console.log(favMovie(true))
//////////////////////////
//if else if else statement
//title drive test
function driveTest(age){
    if(age<=18){
        return "Hey no one allow to drive Kids.";
    }
    else if(age<=40){
        return "Okay Sir.You can drive the car";
    }
    else if(age>=50){
        return "Sir you are old enough to drive";
    }else{
        return "None Of you can't drive"
    }
}
console.log(driveTest(50));
//title the sum of number with fizz buzz
function FizzBuzz(num){
    if(num%2==0){
        return "Fizz"
    }else if(num%5==0){
        return "fizzbuzz"
    }else{
        return "buzz"
    }
}
console.log(FizzBuzz(10))
//title is pass?
function isPass(mark){
    if(mark>=80){
        return "You have passed with Distation"
    }else if(mark>=40){
        return "You have passed it smoothly"
    }else if(mark<40){
        return " You failed.."
    }else{
        return "Require the mark to be attend..."
    }
}
console.log(isPass(80))
//title car speed
function speedTester(speed){
    if(speed>=400){
        return "Man It's Too fast";
    }else if(speed>=150){
        return "Just a normal speed"
    }else if(speed<=75){
        return "Dude too slow..."
    }else{
        return "That's better I'm not gonna go to heaven."
    }
}
console.log(speedTester(400))
//title javascript caculator
function jsCaculator(ans,num1,num2){
    let result;
    if(ans==1){
        result = num1 + num2 
        return result
    }else if(ans==2){
        result = num1 / num2 
        return result
    }else if(ans==3){
        result = num1 ** num2 
        return result
    }else{
        return "ENter something"
    }
}
console.log(jsCaculator(3,10,20))