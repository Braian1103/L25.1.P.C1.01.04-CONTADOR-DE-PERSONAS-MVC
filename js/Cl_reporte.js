export default class Cl_reporte {
    constructor() {
        this.acpersonas = 0;
        this.acmujeres = 0;
        this.achombres = 0;
      }

      procesarpersonas(n) {
        this.acpersonas++;

        if (n.sexo == "M") {
          this.achombres++;

        } if (n.sexo == "F") {
          this.acmujeres++;

        }
      }

      cantidadpersonas() {
        return this.acpersonas;
      }

      cantidadmujeres() {
        return this.acmujeres;
      }

      cantidadhombres() {
        return this.achombres;
      }
    }