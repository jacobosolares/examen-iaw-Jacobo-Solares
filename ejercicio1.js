

const sc = require("prompt-sync")({ sigint: true });
console.log ("Cuanto dinero vas a invertir, cual va a ser tu interes anual y en cuantos años => ")
let capital = Number("500")
console.log("capital", capital)
let interes = Number ("3")
console.log("interes", interes)
let interesF = Number (capital*(interes/100))
console.log("interesF", interesF)
let años = Number("6")
console.log("años", años)
let porcentaje = Number(capital*(interes/100))
console.log("porcentaje", porcentaje)







