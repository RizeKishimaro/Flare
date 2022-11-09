const about={
    name: "Rize KIshimaro",
    age: 18,
    isSingle: false,
    learn: function(sub,place){
        return "i'm learning "+sub+" at "+place
    },
    //ES6
    study(newthings){
        return "i like to learn "+newthings
    },
    //this keyword represent the object it append to
    This: function(){
        console.log(this.name)
    },
    call: function(){
        console.log(`${this.name} was stupid and he was ${this.age} years old boy.`)
    }
}
// console.log(about.learn('Web Design',"MMS IT"))
// console.log(study('Frontend'))
console.log(about.This())
console.log(about.call())