//Calculador de costo total de productos seleccionados por un usario

alert("Le damos la bienvenida a Entre Hilos! por favor siga las instrucciones para realizar su compra. Click en 'Aceptar' para continuar")

function ingresarNombre() {
    const NOMBRE = prompt("Por favor ingrese su nombre")
    if (NOMBRE == null || NOMBRE.trim() == "") {
        alert("Por favor inserte un nombre válido para continuar")
        return ingresarNombre();
    } 
    else {
        alert(`Hola ${NOMBRE}! ahora le vamos a mostrar nuestro catalogo, por favor haga click en 'Aceptar' para continuar`)
    }
}

ingresarNombre();



