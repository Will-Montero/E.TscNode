// Crea un arreglo de objetos llamado estudiantes que contenga objetos del tipo estudiante el cual debe tener los siguientes campos: Nombre, edad, curso y dirección (dato opcional). Este arreglo también debe ser definido con su respectiva interfaz.

class Student {
    name: string = "";
    age: number = 0;
    course: string = "";
    address: string = "";

    constructor(name: string, age: number, course: string, address: string){
        this.name = name,
        this.age = age,
        this.course = course,
        this.address = address
    };
};

let student1 = new Student("camilo", 16, "11-B", "mna 32 - brr: san Ignacio")
let student2 = new Student("pedro", 8, "4-A", "ed calle rel crr 25 # 20-16")
let student3 = new Student("rosa", 15, "10-C", "brr Carolina mna 27 c 8")

console.log(student1);
console.log(student2);
console.log(student3);
