let production = document.getElementById("form");
let productA = document.getElementById(shedA);
let productB = document.getElementById(shedB);
let productC = document.getElementById(shedC);
let productD = document.getElementById(shedD);
production.addEventListener ('submit',amountOfLitre)
function amountOfLitre(event) {
    event.preventDefault();
let result = parseFloat(productA.value) + parseFloat(productB.value) + parseFloat(productC.value) + parseFloat(productD.value);
console.log(result);
};
Date.getDaysInMonth = function(years, month){
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    console.log();
};

