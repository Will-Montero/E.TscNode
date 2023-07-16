// Crea una función con 3 argumentos que sean números y dicha función calcule el mayor de los números.
function biggerNumber(num1: number, num2: number, num3: number){
    let bigger = num1;
    if(num2 > bigger){
        bigger = num2
    }
    if(num3 > bigger){
        bigger = num3
    }
    
    return bigger
};

const findLargerNumber: number = biggerNumber(3, 10, 5);
console.log(findLargerNumber);