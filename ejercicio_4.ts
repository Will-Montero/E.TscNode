// Crea un objeto llamado organización  y su respectiva interfaz que contenga los siguientes datos: (Nombre, Slogan, Cantidad de trabajadores, horario de atención, Si permiten el trabajo remoto o no, Fecha de creación y Si o no trabaja los sábados (este dato debe ser opcional )

class Organization {
    name: string = "";
    Slogan: string = "";
    numberWorkers: number = 0;
    openingHours: string = "";
    allowsRemoteWork: boolean = false;
    dateCreation: string = "";
    sundayWokr?: boolean = true;

    constructor(name: string, slogan: string, numberWokers: number, openingHours: string, allowsRemoteWork: boolean,  dateCreation:  string, sundayWokr?: boolean ){
        this.name = name,
        this.Slogan = slogan, 
        this.numberWorkers = numberWokers,
        this.openingHours = openingHours,
        this.allowsRemoteWork = allowsRemoteWork,
        this.dateCreation = dateCreation,
        this.sundayWokr = sundayWokr

};
};

let organization1 = new Organization("xxt", "estamos con ud", 22, "de 8:00 hasy las 18:00 hrs", false, "16 de julio de 2022", true);
console.log(organization1);
