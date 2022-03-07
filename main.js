
//  1 Masala
// Funksiyaga son kiritganda tog’ yoki juft son ekanligini aytib beradigan funksiya yasang

/*  - +  Addition (Concatenation)
    - -   Subtraction
    - *   Multiplication
    - /   Division
    - ** Exponentiation
    - % Modulus
    - **Syntax Sugar**
    - ++ Increment ++pre post++ (number = number + 1)
    - - - Decrement 
*/

/*

// function  myNam() {
//     let a = 0;
//     if (a%2 === 0)  {
//      console.log("Juft");
//      }else{
//     console.log("Toq");
//     }
// }
//    myNam();


function  myNa() {
     let b = 0;
     if (b%2 === 0){
     console.log("Juft");
     }else if(b%2 !== 0){
    console.log("Toq");
    }else 
    console.log("Xato"); 
    }
   myNa();

   */

/* Funksiyaga raqam kiritganda u haqiqiy raqam yoki matn ekanligini aytib beradigan funksiya yasang  */

/*
isValidNumber(11) //"11 is a valid number" //

isValidNumber("19") //"19 is a valid number"  //

isValidNumber("xyz") //"xyz is not a number" //

isValidNumber("17.5") //"17.5 is a valid number" 
 
isValidNumber("21F") //"21F is not a number" //
*/


 //1 chi  yul

//   let myNum = (b) => {
         
//   if (isNaN(b)) {
//        console.log("is not a number"); 
//   }else{
//     console.log("is a valid number ");
//   }
//     }
//     console.log(myNum("1.2"));





// 2 chi  yul
/*
const myNam = (myNumber) => {
    if (isNaN(myNumber)) {
        return "is not a number";
    }else{
        return "is a valid number";
    }
}

 let my = prompt("yoznig");

 console.log(myNam(my));

 */

 // 3 Funksiyaga ikkita raqam kirgazganda qaysi biri katta ekanligini bilib beradigan funksiya yasang

 /*
    findLargest(21,45) //"45 the largest number" //
    findLargest(34,18) //"34 is the largest number" //
    findLargest(41,41) //"41 is equal to 41" //
 */

    /*

    const myNamber = (a,b) => {
        if (a != b) {
            return "Kata";
        }else if(a === b){
            return "is equal to";
        }
    } 

    console.log(myNamber(75,75));

    */

// 4 Masala  Funksiyaga 3 ta raqam kirgazganda eng katta raqam qaysiligini aytib beradigan funksiya yasang

/*  findLargest(21,45,13) //"45 is the largest number"
    findLargest(34,18,52) //"52 is the largest number"
    findLargest(64,11,11) //"64 is the largest number" 
*/

    /*

    const myNob = (a,b,c) => {
        if (a !== b !== c){
              return "is the largest number";  
        }else if(a === b === c){
            return "is equal to";
        }
    }

    */
  
   // console.log(myNob(21,45,13));
   // console.log(myNob(31,18,52));
    // console.log(myNob(45,45,45));


// 5 Masalla  **Funksiyaga O’quvchining ismi va necha ball olganini 
// kiritganda darajasini aniqlab beradigan funksiya yasang**
/*
Ball 90 va 100 oralig’ida bo’lsa **S** //
 
Ball 80 va 90 oralig’ida bo’lsa **A** //

Ball 70 va 80 oralig’ida bo’lsa **S** //

Ball 60 va 70 oralig’ida bo’lsa **D** //

Ball 50 va 60 oralig’ida bo’lsa **E** 

Ball 0 va 40 oralig’ida bo’lsa **o’quvchi imtihondan yiqilgan hisoblanadi**

Boshqa hollarda **“Invalid marks”** degan yozuv chiqsin

*/




   // 1 chi Yul  
    

/*

function newFunction() {
    let darja = "sdvsd";
    switch (darja) {
        case 90:
            console.log("S Max Grant");
            break;
        case 80:
            console.log("A Max-Min-Grant");
            break;
        case 70:
            console.log("S Mini Grant");
            break;
        case 60:
            console.log("D Brat Super Kontrak ");
            break;
        case 50:
            console.log("E EEEE Buldiz");
            break;
        case 40:
            console.log("Gitler kaput");
            break;
        default:
            console.log("Invalid marks");
            break;
    }
}
newFunction();

*/


function myDemo(demo) { 
    if (demo >= 90 && demo >= 100) {
        return "S";
    }else if(demo >= 80 && demo >= 90){
        return "A";
    }else if(demo >= 70 && demo >= 80){
        return "S";
    }else if(demo >= 60 && demo && 70){
        return "D";
    }else if(demo >= 50 && demo && 60){
        return "E";
    }else if(demo >= 0 && demo && 40){
        return "o’quvchi imtihondan yiqilgan";
    }else{
        return "Invalid marks";
    }
}

 console.log(myDemo(80));
 