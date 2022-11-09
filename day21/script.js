// for(let i =0;i<=5;i++){
//     console.log(i)
//     if(i===3){
//         break;
//     }
// }
// const killer = ["kyaw zaw","lazy kiddy","houshitomato","Kelly","Pasang yo"]
// for(let i =0;i<killer.length;i++){
//     console.log(i,".",killer[i]);
// }
// const marks = [54,70,96,85,90,65];
// const subject = ['Myn','eng','Math','Phy','Che','bio']
// let totalMark =0;
// for(let mark=0;mark<marks.length;mark++){
//     console.log(subject[mark],":",marks[mark]);
//     totalMark+=marks[mark]
// }
// console.log('Total Score: ',totalMark);
const mgmgInfo ={
    name: "mgmg",
    age: 17,
    grade: 10,
    marks :[
        {
            id: 1,
            subject: "Myanmar",
            mark: 56
        },
        {
            id: 2,
            subject: "English",
            mark: 70
        },
        {
            id: 2,
            subject: "Math",
            mark: 96
        },
        {
            id: 2,
            subject: "Physics",
            mark: 53
        },
        {
            id: 2,
            subject: "Chemistry",
            mark: 67
        },
        {
            id: 2,
            subject: "Bio",
            mark: 90
        }
    ]
}
mgmgInfo.totalMark = 0;
mgmgInfo.result = {};
for(let i=0;i < mgmgInfo.marks.length;i++){
    console.log(mgmgInfo.marks[i].mark);
    mgmgInfo.totalMark += mgmgInfo.marks[i].mark
    mgmgInfo.result[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark >= 40 ? "success": "fail"
}
console.log(mgmgInfo.totalMark)
console.log(mgmgInfo)