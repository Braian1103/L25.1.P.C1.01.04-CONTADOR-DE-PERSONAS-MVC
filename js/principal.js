/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:*/

import Cl_personal from "./Cl_personal.js";
import Cl_reporte from "./Cl_reporte.js";

let per1 = new Cl_personal("Luisa", "F");
let per2 = new Cl_personal("Ana", "F");
let per3 = new Cl_personal("Jose", "M");
let per4 = new Cl_personal("Carmen", "F");
let per5 = new Cl_personal("Rosa", "F");
let per6 = new Cl_personal("Jose", "M");
let per7 = new Cl_personal("Maria", "F");
let per8 = new Cl_personal("Luz", "F");
let per9 = new Cl_personal("Rafael", "M");
let per10 = new Cl_personal("Liz", "F");
let per11 = new Cl_personal("Marcos", "M");
let per12 = new Cl_personal("Leo", "M");

let rep = new Cl_reporte();

rep.procesarpersonas(per1);
rep.procesarpersonas(per2);
rep.procesarpersonas(per3);    
rep.procesarpersonas(per4);
rep.procesarpersonas(per5);
rep.procesarpersonas(per6);
rep.procesarpersonas(per7);
rep.procesarpersonas(per8);
rep.procesarpersonas(per9);
rep.procesarpersonas(per10);
rep.procesarpersonas(per11);
rep.procesarpersonas(per12);

let salida = document.getElementById("salida");
salida.innerHTML = `
    <p>cantidad de Personas: ${rep.cantidadpersonas()}</p>
    <p>cantidad de Hombres: ${rep.cantidadhombres()}</p>
    <p>cantidad de Mujeres: ${rep.cantidadmujeres()}</p>
    `;