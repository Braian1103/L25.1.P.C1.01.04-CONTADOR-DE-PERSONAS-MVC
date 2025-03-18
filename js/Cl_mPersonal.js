export default class Cl_mPersonal {
    constructor({nombre, sexo}) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set sexo(s) {
        this._sexo = s;
    }

    get sexo() {
        return this._sexo;
    }
}