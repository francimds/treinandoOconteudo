//const number1 = 9;
//const number2 = 7;
//if (number1 > number2){
//    console.log(number1);
//}
//else{
//    console.log(number2);
//}
//const number1 = 4;
//const number2 = 2;
//const number3 = 5;
//if (number1 > number2 && number1 > number3){
//    console.log(number1);
//}
//else if (number2 > number1 && number2 > number3){
//    console.log(number2);
//}
//else {
//    console.log(number3);
//}
const angleA = 32;
const angleB = 60;
const angleC = 90;
if (angleA+angleB+angleC === 180){
    console.log(true);
}
else if (angleA < 0 || angleB < 0 || angleC < 0){
    console.log('ângulo inválido');
}
else {
    (angleA+angleB+angleC !== 180)
    console.log(false);
}