// Your code here
function saturdayFun(thing="roller-skate") {
    return `This Saturday, I want to ${thing}!`
}

const mondayWork = function(act="go to the office") {
    return `This Monday, I will ${act}.`
}

const wrapAdjective = (wrap = "*") => {
    return (string) => {
        return `You are ${wrap}${string}${wrap}!`;
    }
}

const Calculator = {
    add: ((num1, num2) => {return num1 + num2}),
    subtract: ((num1, num2) => {return num1 - num2}),
    multiply: ((num1, num2) => {return num1 * num2}),
    divide: ((num1, num2) => {return num1 / num2})
}

function actionApplyer(num, arr) {
    arr.forEach(element => {
        num = element(num)
    });
    return num;
}