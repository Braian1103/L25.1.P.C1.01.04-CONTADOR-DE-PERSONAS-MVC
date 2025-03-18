export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;    
    }
    procesarPersonas() {
        this.modelo.procesarPersonas(this.vista.procesarPersonas());
        this.vista.reportarPersonas(
            this.modelo.cantidadPersonas(), 
            this.modelo.cantidadHombres(), 
            this.modelo.cantidadMujeres());
    }
}