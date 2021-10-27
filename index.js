let production = document.getElementById("form");
let productA = document.getElementById('shedA');
let productB = document.getElementById('shedB');
let productC = document.getElementById('shedC');
let productD = document.getElementById('shedD');
let productprice = document.getElementById('price');
let amount = document.getElementById('amount').value;
production.addEventListener ('submit',amountOfLitre)
function amountOfLitre(event) {
    event.preventDefault();
let result = parseFloat(productA.value)+parseFloat(productB.value)+parseFloat(productC.value)+parseFloat(productD.value);
console.log(result);
let pricing = parseFloat(document.getElementById('amount').value);
let totalProduction = result*7;
let weeklyIncome = totalProduction*pricing;
let monthlyIncome = weeklyIncome*31;
let yearAmount = monthlyIncome*31;
document.getElementById('output').innerHTML = " total Production per week " + totalProduction + " total";
document.getElementById('dailyAmount').innerHTML = result * pricing;
document.getElementById('totalMoney').innerHTML = " total  money per week in Kshs "+ weeklyIncome;
document.getElementById('monthlyAmount').innerHTML = " total production per month Kshs"+ monthlyIncome;
document.getElementById('yearAmount').innerHTML = " total production per year Kshs"+ yearAmount;

};

