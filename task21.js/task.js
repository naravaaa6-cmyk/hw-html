let bookPrice = 750;
let bookAmount = 14;

console.log(bookPrice * bookAmount);


let kmhSpeed = 75;
let msSpeed = kmhSpeed / 3.6;

console.log(msSpeed);


let num = 25;
console.log(num ** 5);
console.log(num % 3); 


let firstName = 'Alan';
let lastName = 'Turing';

console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);

console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}`);


let fullName = "Murad Orucov";
let initials = fullName.split(" ");
console.log(initials[0][0] + initials[1][0]);
console.log(fullName.replaceAll(" ", "").length);


let userFullName = prompt ("Adınızı və soyadınızı daxil edin:");

let name = userFullName.split(" ");

console.log(name[1] + " " + name[0]);


let num1 = Number(prompt("Birinci ədədi daxil edin:"));
let num2 = Number(prompt("İkinci ədədi daxil edin:"));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


let result = 12345 * 98765;

console.log(result);



"" + 1 + 0       
"" - 1 + 0       
"true" - false  
6 / "3"          
4 + 5 + "px"     
"$" + 4 + 5      
"4" - 2          
"4px" - 2 + "px" 
7 / 0            
"-9" + 5         
"-9" - 5         
null + 1         
undefined + 1    


let number = prompt("Dörd rəqəmli ədəd daxil edin:");

let a = Math.floor(number / 1000);
let b = Math.floor(number / 100) % 10;
let c = Math.floor(number / 10) % 10;
let d = number % 10;

let sum = a + b + c + d;

console.log("Rəqəmlərin cəmi:", sum);


let fulllName = prompt("Soyadınızı və adınızı daxil edin:");

let namee = fullName.split(" ")[1];

console.log("Salam, " + name + "!");


let price = prompt("Qiyməti daxil edin (530.90):");

let parts = price.split(".");

let manat = parts[0];
let qəpik = parts[1];

console.log(manat + " manat " + qəpik + " qəpik");


let salary = Number(prompt("Əmək haqqınızı daxil edin:"));

let tax = salary * 13 / 100;

let resultt = salary - tax;

console.log("Vergisiz əmək haqqı:", result);


let fulNamee = prompt("Soyadınızı, adınızı və ata adınızı daxil edin:");

let partss = fullName.split(" ");

let surnamme = parts[0];
let namme = parts[1];
let fatherrName = parts[2];

console.log(surname + " " + name[0] + "." + fatherName[0] + ".");


let age = Number(prompt("Yaşınızı daxil edin:"));

if (age < 18) {
    alert("Access denied");
} else {
    alert("Access granted");
}


let year = Number(prompt("İli daxil edin:"));

if (year % 4 === 0) {
    console.log("İl uzun ildir");
} else {
    console.log("İl uzun il deyil");
}


let gender = prompt("Cinsinizi daxil edin (M və ya F):");

if (gender === "M") {
    gender = "male";
} else if (gender === "F") {
    gender = "female";
}

console.log(gender);




