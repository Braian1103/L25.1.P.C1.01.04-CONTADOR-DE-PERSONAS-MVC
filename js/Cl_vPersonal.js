export default class Cl_vPersonal {
    constructor() {
        this.inNombre = document.getElementById("personalForm_inNombre");
        this.inSexo = document.getElementById("personalForm_inSexo");
        this.btProcesar = document.getElementById("personalForm_btProcesar");
  }
  get nombre(){
    return this.inNombre.value;
   }
  get sexo(){
    return this.inSexo.value;
   }
}

