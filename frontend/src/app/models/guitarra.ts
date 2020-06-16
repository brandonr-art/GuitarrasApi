export class Guitarra {

    constructor(_id= 0, modelo = '', marca = '', color= '', largo = 0, ancho= 0, peso= 0, tipo= '', numCuerdas = 0){
        this._id =_id;
        this.modelo = modelo;
        this.marca =marca;
        this.color = color;
        this.largo = largo;
        this.ancho =ancho;
        this.peso=peso;
        this.tipo=tipo;
        this.numCuerdas=numCuerdas;

    }
    
    _id:  Number;
    modelo: String;
    marca:  String;
    color:  String;
    largo:  Number;
    ancho:  Number;
    peso: Number;
    tipo:  String;
    numCuerdas:  Number;
}
