'use strict'
var money;
var time;

money = prompt("Ваш бюджет на месяц?", "30");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: console.log(money),
    timeData: console.log(time),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
let a = prompt("Ваш бюджет на месяц?", "30"),
    b = prompt("Ваш бюджет на месяц?", "30");
appData.expenses[a] = b;
appData.budget =  alert (money/30);







