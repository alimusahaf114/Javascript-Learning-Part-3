// const account = {
//     Musahaf: 10000 ,
//     Asif: 20000 ,
//     Amir: 705000 ,
// } ;

// function getAccount(){
//     let accountName = prompt("Enter an account name");

//     if(!Object.hasOwn(account , accountName)){
//         throw new Error(`No such account is rigistered: ${accountName}`)
//     }

//     return accountName ;
// }


// function transfer(from , amount){
//     if(account[from] < amount){
//         alert(`Insufficient balance in account ${from}.`);
//         return ;
//     }


// try{
//     account[from] -= amount ;
//     const to = getAccount();
//     account[to] += amount ;
//     alert(`Successfully transferred ${amount} from account ${from} to account  ${to}.`);
//     showBalance();
// } catch(error){
//     console.log(error.message);
//     alert(error.message)    
// }
// }
//  function showBalance(){
//     alert(`Current Balance: Account Musahaf : ${account.Musahaf}
//                             Account Asif : ${account.Asif} 
//                             Account Amir : ${account.Amir}`)
//  }

// const sender = prompt("Enter the Acoount name of sender ...")
// const payment = Number(prompt("Enter the Amount you want from sender...."))
// transfer(sender, payment);














// const account = {
//     a: 100 ,
//     b: 0,
//     c: 20 ,
// };

// function getAccount(){
//     let accountName = prompt("Enter an account name");

//     if(!Object.hasOwn(account , accountName)){
//         throw new Error (` No Such account : ${accountName}`)
//     }
//     return accountName ;
// }


// function transfer(from , amount){
//     if(account[from] < amount) return ;
//     account[from] -= amount ;
//     account[getAccount()] += amount;
// }

// try{
//     transfer('a' , 50 );
// } catch(error){
//     console.error(error);
//     alert(error)    
// }

// getAccount();








//             // EXCEPTION HANDLING............
// function promptDirection(question){
//     let result = prompt(question);
//     if(result.toLowerCase() == "left"){
//         return "L" ;
//     }
//     if(result.toLowerCase() == "right"){
//         return "R";
//     }
//     throw new Error ("Invalid Direction: " + result);
// }
// function look(){
//     if( promptDirection("Which way?") == "L"){
//         return "A house" ;
//     } else {
//         return "tow angry bears" ;
//     }
// }
// try{
//     console.log("You see...!" , promptDirection("Choose from here first..."), look()  );
    
// } catch(error){
//     console.error("Something Went Wrong...." + error);
    
// }













// function getMonthName(mo){
//     mo--;
//     const month = ["jan" , "fab" , "march" ,"april" , "may" ,"june"
//                  ," july" , "august" , "september" , "october" ,
//                   "November" , "December"];
//         if(month[mo]){
//             return month[mo];
//         } else {
//             throw new error ("Invalid Month Number...")
//         }

        
// }


// // getMonthName(8)
// try{
//     console.log("Musahaf ALi");
//     console.log(getMonthName(mymonth));
    
    
// }
// catch(error){
//     // monthName = "Unknown" ;
//     console.error(error);
    
// }







// try{
//     let a = 10 ;
//    let b = 0 ;
//    const c = a/b ;
//    if(b == 0){
//     console.error("B must not be 0");    
//    }
//    console.log(`The division of a and b = ${c}`);

   
// }
// catch(error){
//     console.error(error)
// }

// console.log("Hi how are you");

// throw "I am Musahaf" ;
// throw 21 ;
// throw{
//     toString(){
//         throw "I am error " ;
//     }
// }