"use strict";

// let total= 40.00;
// let tax = 0.06;
// console.log(`${total * tax}`);

// let student = "Tabb";
// if(student === "Hannah") {
//     console.log("Hello, Hannah");
// } else
// console.log("Hello,Tabb");


// let numberOfPeople = 10;

// if  (numberOfPeople > 7){
// console.log("We Got A Deal");
// } else {
// console.log("Sorry you need more people in your group");
// }

// let choice = prompt("Select a size");
// switch(choice) {
//     case "small":
//     console.log("You have ordered a smll shirt");
//     break;
//     case "medium":
//     console.log("You have ordered a medium shirt");
//     break;
//     case "large":
//     console.log("You have ordered a large shirt");
//     break;
//     default:
//     console.log("We no other sizes sorry");
//     break;
// }


// let points = prompt("How many point did they score?");
// if(points > 5 ){
//     console.log("You passed scoring over 60%");
//     }else{
//   console.log("So sorry you failed");
//     }
//  console.log(`${points * 10}%`);

//  let name1 =prompt("Whats the first name?");
//  let name2 =prompt("Whats the second name?");
 
//  if (name1.length > name2.length){
//      console.log("Print First Name");
//  }else{ (name2.length > name1.length)
//      console.log("Ada Lovelace has the longest name");
//      }

 

// {
// for(let i=20; i >=1; i--){
//     // (initialization;condition;final-expression)
//     console.log(i)
    
//   } 
// }



// var i=0;
// // // while(i<=10){
// // // 	console.log(i);
// // // 	i++;	
// // // }

// // // do {
    
// // //     }
// // //     while (condition);
// // //     let userPass = null;
// // //     do {
// // //     userPass = prompt("What is your password?");
// // //     } while (userPass !== "secret")




// // for (let i = 1; i <= 50 ; i++) {
// //    if (i % 3 === 0 && i % 5 === 0) {
// //     console.log("FizzBuzz");  
// //    }
// //    else if (i % 3 === 0) {
// //     console.log("Fizz");
// //    }
// //    else if (i % 5 === 0) {
// //     console.log("Buzz");
// //    }
// //    else {
// //        console.log(i);
// //    }
// // }


// // for (let i = 0; i <= 10; i++){
// //     for (let j = 0; j<= 10; j++){
// //         console,log(`${i} x ${j} = ${i * j}`)
        
// //     }
// // }


// // let answer=prompt("do you want to play?");






// // let name = prompt("Do you want to play?");
// //  letprompt = ("Enter your name.");
// let play = ("Do you want to play")
// let usenamehealth = 40;
//  let granthealth = 10;
//  let userwins = 0;
//  if play = ("yes")
 

 

 

// removeRandomPoints()
// logplayerpoints()
// checkuserhealth()
// checkgameswinner()

// if (answer === ("yes")){
//     while ( usenamehealth > 0 && granthealth > 0){
    
//         if ( usenamehealth > 0 && granthealth > 0){
//             usenamehealth -= damage;
//             granthealth -= damage;
//             console.log("Donovan has " + usenamehealth + " points")
//         }
//         let damage = Math.floor(Math.random() * (3 - 1)) + 1;
//        if(usenamehealth === 0) {
//            console.log("Game Over");
//        } else if (granthealth === 0){
//        console.log("Grant is defeated")
//        console.log(`${hero} wins.`);
//        granthealth = 10;
//        yourwins++;

//        }
//     }
// }
"use strict";

let play = prompt("Would you like to play a game?");
let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let damage = Math.floor((Math.random() * 2) + 1);

if (play === "yes") {
 let user = prompt("What is your name?");
 while (userHealth > 0 && grantHealth > 0) {
   userHealth -= damage;
   grantHealth -= damage;
   console.log(`donovan health is ${userHealth}`);
   console.log(`grant health is ${grantHealth}`);
     if (grantHealth <= 0 ) {
     userWins ++;
     grantHealth = 10;
     console.log("Grant is defeated and " + user + " wins.")
     } if (userWins === 3) {
         console.log(user + " Wins!");
         break;
   }
 }
}






// }       while)
//         {let damage = Math.floor(Math.random()* 2)+1;
        
