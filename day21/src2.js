// function drawStar(){
//     for(let i =1;i<=5;i++){
//         let stars ="";
//         for(let x=1;x<=i;x++){
//             stars += x
//         }
//         console.log(stars)
//     }
//     for(let i=6;i>=5;i--){
//         let stars ="";
//         for(let d=0;d<=i;d++){
//             stars+="*"
//         }
//         console.log(stars)
//     }
    
// }
// drawStar();
// function drawStarEvenOdd(){
//     for(let i=1;i<=6;i++){
//         let num = "";
//             num2 ="";
//         for(let d=1;d<=i;d++){
//             if(i%2===0){
//                 num += "+"
//             }
//             else{
//                 num2+="*"
//             }
//         }
//         console.log(num)
//     }
// }
// drawStarEvenOdd();
function starGenerator(number,style="*"){
    let stars="";
    let style2 = "";
    for(let i=1;i<=number;i++){
        stars += style
        console.log(stars)

    }
}
// for(let i=1;i<=6;i++){
//     if(i%2===0){
//         starGenerator(i," +")
//     }else{
//         starGenerator(i," -")
//     }
// }
// for(let i=1;i<=6;i++){
//     let result = "";
//     for(let a=1;a<=6;a++){
//         if(a<=i){
//             result+="*"
//         }else{
//             result += "/"
//         }    
//     }
//     console.log(result)
// }
// let ratings = [
//     {
//         name: 'Oo Htet min',
//         age: 14,
//         rating: 3
//     },{
//         name: 'Maung Kyaw khant',
//         age: 14,
//         rating: 3
//     },{
//         name: 'Su Myat Noe Khin',
//         age: 14,
//         rating: 3
//     },{
//         name: 'Ko Kyaw Myo Thein',
//         age: 14,
//         rating: 3
//     },{
//         name: 'Ma Khin Myo thein',
//         age: 14,
//         rating: 3
//     },];
// for(let i=0;i < ratings.length;i++){
//     let result = "";
//     for(let x=1;x<=5;x++){
//         if(x <= ratings[i].rating){
//             result += "* "
//         }else{
//             result += "- "
//         }
//     }
//     console.log(result)
// }