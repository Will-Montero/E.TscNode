//Crea una función con 1 argumento el cual debe ser un nombre y que imprima por consola "hola soy -------"(donde esta la línea punteada debe ir el nombre pasado por parámetro). Para cada uno de los datos en cada uno de las implementaciones debes inferir el tipo de dato a declarar y asignarlo  debidamente. Los datos que se solicitan pueden ser los que tu desees, no hay restricción en ello.

class Iam {
    myName: string = "";

    constructor(myName: string){
        this.myName = myName
    };

    sayHi(){
        return "hi, my name is " + this.myName
    };
};

let iAm1 = new Iam("willam Montero");

const value = iAm1.sayHi();
console.log(value);