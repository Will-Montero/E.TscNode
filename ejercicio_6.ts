// Crea una función que dado un argumento llamado radio debe calcular el área de un círculo y retornar ese resultado.

function areaCircle(radio: number){
    const pi: number = 3.1416;
    const area: string | number = pi*(radio*radio);
   return area;
};
let radio: number = 4;
 
const area: number = areaCircle(radio);
console.log(area);
