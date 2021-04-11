"use strict";

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
// зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    let res;
    switch (operation) {
        case '+':
            res = plus(arg1, arg2);
            break;
        case '-':
            res = minus(arg1, arg2);
            break;
        case '*':
            res = mult(arg1, arg2);
            break;
        case '/':
            res = div(arg1, arg2);
            break;
    }
    return res;
}

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

alert(mathOperation(10, 20, '/'));
