function validar(form){
    let CA = parseFloat(form.CA.value.trim());
    let I = parseFloat(form.I.value.trim());
    let decimal = I / 100;
    let meses = parseInt(form.meses.value.trim(), 10);

    if (isNaN(CA) ||  CA === "") {
        alert("Capital inicial no valido");
        return false;
    }
    if (isNaN(I) || I===""){
        alert("Interes no valido");
        return false;
    }
    if (isNaN(meses) || meses===""){
        alert("Número de meses no valido");
        return false;
    }
    let CantidadF= CA*(1+decimal*meses);
    
    document.getElementById("CF").value = CantidadF.toFixed(2); // Mostrar con 2 decimales
    return false;
}
function validar2(form){
    let sueldo1=parseFloat(form.sueldo1.value.trim());
    let v1=parseFloat(form.v1.value.trim());
    let v2=parseFloat(form.v2.value.trim());
    let v3=parseFloat(form.v3.value.trim());

    if (isNaN(sueldo1) ||  sueldo1 === "") {
        alert("Sueldo fijo no valido");
        return false;
    }
    if (isNaN(v1) || v1===""){
        alert("Primer venta no valida");
        return false;
    }
    if (isNaN(v2) || v2===""){
        alert("Segunda venta no valida");
        return false;
    }
    if (isNaN(v3) || v3===""){
        alert("Tercer venta no valida");
        return false;
    }
    let comision=0.10 * (v1+v2+v3);
    let sueldofinal= comision + sueldo1;

    document.getElementById("sueldof").value = sueldofinal.toFixed(2); // Mostrar con 2 decimales
    return false;

}
function validar3(form){
    let cantidad1=parseFloat(form.cantidad1.value.trim());
    let descuento= 0.15*cantidad1;
    if (isNaN(cantidad1) ||  cantidad1 === "") {
        alert("Cantidad a pagar no valida");
        return false;
    }
    let cantidadfinal= cantidad1-descuento;
     
    document.getElementById("cantidadf").value = cantidadfinal.toFixed(2); // Mostrar con 2 decimales
    return false;
}
function validar4(form){
    let p1=parseFloat(form.p1.value.trim());
    let p2=parseFloat(form.p2.value.trim());
    let p3=parseFloat(form.p3.value.trim());
    let tf=parseFloat(form.tf.value.trim());
    let ef=parseFloat(form.ef.value.trim());

    if (isNaN(p1) ||  p1 === "") {
        alert("Calificación del Primer Parcial no valida");
        return false;
    }
    if (isNaN(p2) ||  p2 === "") {
        alert("Calificación del Segundo Parcial no valida");
        return false;
    }
    if (isNaN(p3) ||  p3 === "") {
        alert("Calificación del Tercer Parcial no valida");
        return false;
    }
    if (isNaN(tf) ||  tf === "") {
        alert("Calificación del Trabajo Final no valida");
        return false;
    }
    if (isNaN(ef) ||  ef === "") {
        alert("Calificación del Examen Final no valida");
        return false;
    }

    let promedio= (p1+p2+p3)/3;
    let examenf= ef*0.30;
    let trabajof= tf*0.15;
    let parciales=promedio*0.55;
    let calificacionfi= parciales+examenf+trabajof;

    document.getElementById("calificacionf").value = calificacionfi.toFixed(2); // Mostrar con 2 decimales
    return false;

}
function validar5(form){
    let año= parseInt(form.año.value.trim());
    const hoy = new Date();
    const anioActual = hoy.getFullYear();

    // Validación del año
    if (isNaN(año) || año === "" || año > anioActual || año<1800) {
        alert("Año de nacimiento no válido");
        return false;
    }
    let edad1 = anioActual - año;
    document.getElementById("edad").value = edad1; 
    return false;
}
function palabrasANumeros(arr) {
    const palabrasANumero = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arr.map(palabra => {
        // Verifica si la palabra es un número
        if (!isNaN(palabra) && palabra.trim() !== "") {
            const numero = parseInt(palabra, 10);
            return numero >= 0 && numero <= 9 ? numero : -1;
        }
        return palabrasANumero[palabra] !== undefined ? palabrasANumero[palabra] : -1;
    });
}

function validar6(form) {
    // Obtiene el valor del input
    const entrada = form.palabras.value;
    // Separa las palabras o números ingresados por espacios
    const palab = entrada.split(" ");
    // Traduce las palabras a números
    const numeros = palabrasANumeros(palab);
    
    // Muestra el resultado en el div
    document.getElementById("numer").value =  numeros.join(", ");
    return false; // Evita que el formulario se envíe
}
function validar7(form) {
    let num = form.horas.value.trim();
    if(num === "" || isNaN(num) || num <= 0){
        alert("Número invalido");
        return false;
    }
    if(num<=40){
    alert("No tienes horas extras");
    return true;
    }
    if(num<48){
        alert("Tienes 8 horas extra, hay pago doble");
        return true;
    }
    if(num>48){
    
        let nume=num-48;
        alert("Tienes 8 horas de pago doble y " + nume + " horas de pago triple");
        return true;
    }
}
function validar8(form){
    let em = form.añosem.value.trim();
    switch (true) {
        case (em < 1):
            alert("porcentajeUtilidad = 0.05")
            break;
        case (em >= 1 && em < 2):
            alert("porcentajeUtilidad = 0.07") 
            break;
        case (em >= 2 && em < 5):
            alert("porcentajeUtilidad = 0.10") 
            break;
        case (em >= 5 && em < 10):
            alert("porcentajeUtilidad = 0.15") 
            break;
        case (em >= 10):
            alert("porcentajeUtilidad = 0.20") 
            break;
        default:
            porcentajeUtilidad = 0;
    }    
    
}
function validar9(form){
    let nombrec = form.nombrec.value.trim();
    
            const regex = /^[A-Za-z\s]+$/; // Solo permite letras y espacios

            if (!regex.test(nombrec)) {
                alert("El nombre no debe contener números ni caracteres especiales.");
                return false; // Previene que se envíe el formulario
            }
            alert("El formulario se envio con exito")
            return true; // El nombre es válido
        }