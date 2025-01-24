const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

function helloWorld() {
  console.log('Hello World How are youuu');
}
helloWorld();
function fibionaci(){

    let a=0;
    let b=1;
    let num;
    for(let i=0;i<=100;i++){
        console.log(a)
        num=a+b
        a=b
        b=num;
    }
}
fibionaci();