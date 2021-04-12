"use strict";

// 8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val — заданное число, pow – степень.

function power(val, pow) {
    let res = val;
    if (pow == 0) {
        res = 1;
    }
    else {
        res = val * power(res, pow - 1);
    }
    return res;
}

alert(power(2, 10));
