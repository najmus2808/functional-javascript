function outer() {
    console.log('This is outer function');
    function inner() {
        console.log('This is inner function');
    }
    inner();
}
console.log(outer());

// ========================

function calculator(a, b) {

    function add() {
        return a + b;
    }

    function sub() {
        return a - b;
    }

    function mul() {
        return a * b;
    }

    function div() {
        return a / b;
    }

    const result = add() + sub() + mul() + div();
    return result;
}

const result = calculator(10, 5);
console.log(result);