//Escribe un programa que reciba cadenas de texto de los usuarios, las sume en una variable, la imprima por pantalla y compruebe cuántos de los caracteres introducidos eran dígitos del 0 al 9. Un ejemplo del output podría ser este:

const sc = require("prompt-sync")({ sigint: true });
let textouser=sc("Escribe un texto, te diré los numeros que tiene ")
let numeros = "0123456789"
textouser= textouser.toLowerCase();
let CuentaNumeros = 0;
for (let i = 0; i < textouser.length; i++) {
    for (let n = 0; n < numeros.length; n++) {
        
        if (textouser.charAt(i)===numeros.charAt(n)) { 
            CuentaNumeros++
        }
    }
}
if (CuentaNumeros==0) {
    console.log("El texto introducido no tiene numeros.")    
}
else{
console.log("Tiene "+CuentaNumeros+" numeros el texto introducido");
}
console.log("Saliendo...")
