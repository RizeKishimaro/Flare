// const div = document.getElementById("the-div");
// function Run(){
//     div.addEventListener("click",function(){
//         alert("Stop Bothering Me!!!");
//     });
// };
// console.log("Statement Start Here!")
// function Caculate(width,breadth){
//     return width * breadth + " Sqft"; // function return a value of area
// }
// console.log(Caculate(12,50));
// console.log(Caculate(17,62));
// console.log(Caculate(32,43));
let object = []
function Caculate(width,breadth){
    let ans = width * breadth;
    let data = {
        width: width+" ft",
        breadth: breadth+" ft",
        area: ans+ " sqft",
    }
    object[object.length] = data
    return ans+" squarefeet"
}
console.log(Caculate(12,42))
console.table(object)