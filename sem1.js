/*
//ejer 01 listo

let admin
let name
name = "John"
admin = name
console.log(admin);
*/

// ejer 02
/*
let planet = "Tierra"
let name = prompt("what's your name?")
alert ("hello " + name)
*/

//ejer 03
/*
const birthday = '18.04.1982'
const age = new Date - birthday
console.log(age);
*/

//ejer 04 listo
/*
let name1 = "llya"
//console.log("hello " + name1);
alert(`hello ${name1}`);
*/

//ejer 05 listo
/*
const user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name
console.log(user);
*/

//ejer 06
/*
const example = {};
console.log(isEmpty(example));

console.log(isEmpty(example));
*/

//ejer 07 listo
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let suma = salaries.John + salaries.Ann + salaries.Pete

console.log(suma);
*/

//ejer 08

let menu = {
    width: 200,
    beight: 300,
    title: "My menu"
}

menu.multy = function multyplyNum(menu) {
    return menu * 2;
}


console.log(menu.multy())


