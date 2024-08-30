const myArray = [1,2,3,4];
myArray.forEach(value => console.log(value+3))








// const isPhoneStore = false;
// const isPhoneAvailable = true ;

// function processMessage(resolveCallback , rejectCallback){
//     if(!isPhoneStore){
//         rejectCallback({
//             name: 'Wrong Stor' ,
//             message:  'Sorry , this is food store..',
//         }) ;
//         } else if(!isPhoneAvailable){
//             rejectCallback({
//                 name: 'Out of Stock',
//                 message: 'Sorry the X phone is out of Stock!' ,
//             });       
//     } else {
//         resolveCallback({
//             name: 'Ok' ,
//             message: 'The X phone is Available ! How many you want to buy?'
//         })
//     }
// }

// processMessage(
//     value => console.log(value) , reason => console.log(reason)    
    
// )


// let p = new Promise((resolve , reject)=>{
//     let isTrue = false ;
//     if(isTrue){
//         resolve('Success')
//     } else{
//         reject('Failed')
//     }
// });

// p.then( message => console.log(`Promise Ressolved : ${message}`))
// .catch(message => console.log(`Promisse Rejected:  ${message}`))