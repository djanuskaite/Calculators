//PIRMAS PVZ

// const pasirinkimas = document.getElementById("veiksmas");
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const but = document.getElementById("Pradedam");
// const vieta =document.getElementById("rezult");
//
// but.addEventListener("click",addVeiksmai);
//
// class Calculator{
//     constructor(name){
//         this.name = name;
//     }
//     add(num1, num2){
//         return num1+num2;
//     }
//     sub(num1, num2){
//         return num1-num2;
//     }
//     dal(num1, num2){
//         return num1/num2;
//     }
//     daug(num1, num2){
//         return num1*num2;
//     }
// }
// let skaiciuotuvas = new Calculator('testinis');
//
// function addVeiksmai(){
//     if(pasirinkimas.value === '+'){
//         let ats =skaiciuotuvas.add(parseInt(num1.value), parseInt(num2.value));
//         vieta.innerHTML=ats;
//     }
//     else if(pasirinkimas.value === '-')
//     {
//         let ats = skaiciuotuvas.sub(parseInt(num1.value), parseInt(num2.value));
//         vieta.innerHTML=ats;
//     }
//     else if(pasirinkimas.value === '/')
//     {
//         let ats  = skaiciuotuvas.dal(parseInt(num1.value), parseInt(num2.value));
//         vieta.innerHTML=ats;
//     }
//     else if(pasirinkimas.value ==='*')
//     {
//         let ats = skaiciuotuvas.daug(parseInt(num1.value), parseInt(num2.value));
//         vieta.innerHTML=ats;
//     }
// }

// ANTRAS PVZ (issitrinti html dali pries paleidziant) [ATS ismeta konsoleje].

// class Calculator{
//     constructor(name){
//         this.name=name;
//     }
//     sudetis(a, b){
//         console.log(a+b)
//     }
// }
// let jolitos = new Calculator("Jolitos");
// jolitos.sudetis(2, 5);

// TRECIAS PVZ (Jungiant nauja issitrinti) [Pateikia visus veiksmus konsoleje].

// const num11=document.getElementById("num1");
// const num22=document.getElementById("num2");
// const push=document.getElementById("submit");
//
//
// class Calculator{
//     constructor(name){
//         this.name=name;
//     }
//     add(num1, num2){
//         console.log('sudetis:' +(parseInt(num11.value) + parseInt(num22.value)));
//     }
//     multiply(num1, num2){
//         console.log('daugyba: '+(parseInt(num11.value) * parseInt(num22.value)));
//     }
//     subtract(num1, num2){
//         console.log('atimtis: '+(parseInt(num11.value) - parseInt(num22.value)));
//     }
//     divide(num1, num2){
//         console.log('dalyba: '+(parseInt(num11.value) / parseInt(num22.value)));
//     }
//
// }
// push.addEventListener("click",input);
//
// function input(){
//     let calc= new Calculator("calc");
//     calc.add(num11, num22);
//     calc.multiply(num11, num22);
//     calc.subtract(num11, num22);
//     calc.divide(num11, num22);
// }

// KETVIRTAS PVZ [NETINKAMAS pvz, nes be class. Veikia su allertu. ATS konsoleje].

let opr = prompt("Operator: ")
let num1 = parseInt(prompt("Number 1: "))
let num2 = parseInt(prompt("Number 2: "))

if(opr == "+")
{
    console.log(num1 + num2)
} else if(opr == "-")
{
    console.log(num1 - num2)
} else if(opr == "*")
{
    console.log(num1 * num2)
} else if(opr == "/")
{
    console.log(num1 / num2)
}
