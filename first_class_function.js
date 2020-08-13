// Functional JavaScript




// 1. A Function can be stored in a Variable.
function greeting(name){
    return 'Hi ,' + name;
}
 const greet = greeting;
 console.log(greet(' Najmus Sakib'));

//  =======================

 const sum = function add(num1,num2){
     return num1 + num2;
 }
 console.log(sum(10,5));


// 2. A Function can be stored in an Array.
function sayName(name){
    return 'Hi ,' + name;
}

const arr = [1,2,3,'Sakib'];
arr.push(greeting);
console.log(arr);


// 3. A Function can be stored as an Object Field or Property.
const person = {
    firstName: 'Najmus',
    lastName: 'Sakib',
    print: function(){
        console.log('He is a good boy');
    }
}

console.log(person);


// 4. We can create Function as needed.

const sum2 = 10 + (function(){return 20})();
console.log(sum2);


// 5. We can pass Function as an arguments. 
function addition(num1,num2){
    return num1 + num2;
}

function test(name,callback){
    return 'Hi , '+ name + ' The sum is: '+ callback(5,10);
}

const result = test('Sakib',addition);
console.log(result);


// 6. We can return Function from another Function. 

function base(n){
    let result = 1;
    return function(x){
        for (let i = 1; i <= n; i++) {
             result = result * x;          
        }
        return result;
    }
}

const power = base(2);
console.log(power(5));

const anotherWay =  base(3)(5);
console.log(anotherWay);