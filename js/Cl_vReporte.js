import Cl_mPersonal from "./Cl_mPersonal.js";
import Cl_vPersonal from "./Cl_vPersonal.js";

export default class Cl_vReporte {
    constructor() {
        this.controlador = null;
        this.vPersona = new Cl_vPersonal();
        this.tabla = document.getElementById("mainForm_tabla");
        this.salida = document.getElementById("mainForm_salida");
        this.vPersona.btProcesar.onclick = () => this.controlador.procesarPersonas();
    }
    procesarPersonas(){
        this.mPersona = new Cl_mPersonal({
            nombre: this.vPersona.nombre,
            sexo: this.vPersona.sexo}
        );
        return this.mPersona;
    }
    reportarPersonas(
        cantidadPersonas, 
        cantidadHombres, 
        cantidadMujeres
    ) {
        this.tabla.innerHTML = `<tr>
        <td>${this.mPersona.nombre}</td>
        <td>${this.mPersona.sexo}</td>
        </tr>`
        this.salida.innerHTML = `
        <p>cantidad de Personas: ${cantidadPersonas}</p>
        <p>cantidad de Hombres: ${cantidadHombres}</p>
        <p>cantidad de Mujeres: ${cantidadMujeres}</p>
        `;
    }
}