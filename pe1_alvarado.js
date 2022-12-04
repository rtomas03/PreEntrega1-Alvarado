
let currency_type = {
    euro: 330,
    dolar: 310,
    real: 32,
    jpy: 1.2, 
    gpb: 331
  }


function convertir_peso (cantidad, type){
    
    console.log("divisa=",  type);

    cantidad = parseFloat(cantidad);
    console.log("cantidad = ", cantidad);
    let cambio = 1; 
    if (cantidad == 0){
        console.log("Cantidad es igual a 0")
        return 0 
    } 
    if (divisa = "dolar")
    cambio = cantidad * currency_type[type];
       return cambio
   
   
}

console.log("convertir");
let cantidad = prompt("Ingrese la cantidad que desea cambiar");



for (const key in currency_type) {
    
   let resultado = convertir_peso (cantidad, key);
    console.log("su cambio es: " , resultado);
}


