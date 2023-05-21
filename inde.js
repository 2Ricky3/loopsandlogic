simpleCalc = () => {
    let answer;
let valOne = +document.getElementById("valOne").value;
let valTwo = +document.getElementById("valTwo").value;
let operator = document.getElementById("operator").value;
console.log(valOne, valTwo, operator);

if(operator == "Plus"){
    answer = valOne + valTwo;

} else if(operator == "Minus"){
    answer = valOne - valTwo;
} else if(operator == "Times"){
    answer = valOne * valTwo;
} else if(operator == "Divide"){
    answer = valOne / valTwo
}



console.log("Answer: " + answer)

}