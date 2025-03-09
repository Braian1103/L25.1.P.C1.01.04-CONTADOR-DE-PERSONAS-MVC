export default class Cl_personal {
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }
}