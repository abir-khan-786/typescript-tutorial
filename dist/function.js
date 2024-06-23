"use strict";
function empoloyeeSalary(salary, bonus) {
    return salary + bonus;
}
const salary = 10000;
const bonus = 5000;
const total = empoloyeeSalary(salary, bonus);
// console.log(total)
const peroson = {
    name: 'Abir Khan',
    balance: 1000,
    addBlance(money) {
        return `My name is ${this.name} and my balance is ${this.balance + money} `;
    },
};
const newBalance = peroson.addBlance(500);
console.log(newBalance);
