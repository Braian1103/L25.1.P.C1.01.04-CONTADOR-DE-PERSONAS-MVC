/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:*/

import Cl_mReporte from "./Cl_mReporte.js"
import Cl_vReporte from "./Cl_vReporte.js"
import Cl_controlador from "./Cl_controlador.js"

export default class Cl_Principal {
    constructor() {
        let vista = new Cl_vReporte();
        let modelo = new Cl_mReporte();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}