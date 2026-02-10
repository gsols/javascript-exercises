const fibonacci = function(a) {
    if (a < 0) return "OOPS";
    if (typeof a === "string") a = +a;
    if (a === 0) return 0;
    if (a === 1) return 1;
    return fibonacci(+a - 1) + fibonacci(+a - 2);
};

// Do not edit below this line
module.exports = fibonacci;
