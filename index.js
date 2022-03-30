// function cb(){
//     console.log("after timeout");
// }
// console.log("me first");

// function print(){
//     console.log("me second");
// }
// setTimeout(cb,0)
// print()
// console.log("me third");

// function printAlpa(){
//     // console.log("a");
//     setTimeout(()=>{
//         console.log(letter);
//     },1000)
    
// }
// function printlet(){
//     setTimeout(()=>{
//         console.log('a');
//         setTimeout(()=>{
//             console.log('a');
//             setTimeout(()=>{
//                 console.log('a');
//                 setTimeout(()=>{
//                     console.log('a');
//     },1000)
// },1000)
//         },1000)
//     }.) 



//---------------promises
//l

// let pr= new Promise( (resolve, reject)=>{setTimeout(() => {
//     console.log(first);
//     resolve(1)
// }, 2000);
//     }
// )      
// console.log(


function printAlpa(name,time,cb){
   setTimeout(() => {
       console.log(name);
   }, 2000);

}
function printVowel(){
   printAlpa("A",2000,()=>{
       printAlpa("B",5000, ()=>{})
   })
}
printVowel()


function printAlpa(name,time,cb){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(name);
            resolve();
        },time);

    })
   
 
 }