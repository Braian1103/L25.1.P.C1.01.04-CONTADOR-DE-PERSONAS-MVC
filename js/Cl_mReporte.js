export default class Cl_mReporte {
    constructor() {
        this.acpersonas = 0;
        this.acmujeres = 0;
        this.achombres = 0;
      }

      procesarPersonas(n) {
        this.acpersonas++;

        if (n.sexo == "M") {
          this.achombres++;

        } if (n.sexo == "F") {
          this.acmujeres++;

        }
      }

      cantidadPersonas() {
        return this.acpersonas;
      }

      cantidadMujeres() {
        return this.acmujeres;
      }

      cantidadHombres() {
        return this.achombres;
      }
    }