export class Guitarra {

    constructor(id= 0, modelo = '', marca = '', color= '', largo = 0, ancho= 0, peso= 0, tipo= '', numCuerdas = 0,imagen=''){
        this.id =id;
        this.modelo = modelo;
        this.marca =marca;
        this.color = color;
        this.largo = largo;
        this.ancho =ancho;
        this.peso=peso;
        this.tipo=tipo;
        this.numCuerdas=numCuerdas;
        this.imagen=imagen;

    }
    
    id:  Number;
    modelo: String;
    marca:  String;
    color:  String;
    largo:  Number;
    ancho:  Number;
    peso: Number;
    tipo:  String;
    numCuerdas:  Number;
    imagen: string;
}
