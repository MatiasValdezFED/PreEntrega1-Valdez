//Catálogo de artículos

alert(
    "Le damos la bienvenida a Entre Hilos! por favor siga las instrucciones para realizar su compra. Click en 'Aceptar' para continuar"
  );
  var montoTotal = 0;
  
  function ingresarNombre() {
    const NOMBRE = prompt("Por favor ingrese su nombre");
    if (NOMBRE == null || NOMBRE.trim() == "") {
      alert("Por favor inserte un nombre válido para continuar");
      return ingresarNombre();
    } else {
      alert(
        `Hola ${NOMBRE}! ahora le vamos a mostrar nuestro catalogo, por favor haga click en 'Aceptar' para continuar`
      );
    }
  }
  
  function seleccionarProductos() {
    let producto = prompt(
      "Por favor seleccione el número de la opción que desee: \n1: Hilos \n2: Telas \n3:Elásticos \n4:Lanas"
    );
    switch (producto) {
      case "1":
        montoTotal += 500;
        alert("Su pedido es de $500");
        break;
      case "2":
        montoTotal += 700;
        alert("Su pedido es de $700");
        break;
      case "3":
        montoTotal += 400;
        alert("Su pedido es de $400");
        break;
      case "4":
        montoTotal += 1000;
        alert("Su pedido es de $1000");
        break;
      default:
        alert("Su opción no es correcta, por favor seleccione nuevamente");
        return seleccionarProductos();
    }
    alert(`su monto total es de ${montoTotal}`);
    console.log(producto);
    seleccionFinal();
  }
  
  function seleccionFinal() {
    const seleccion = prompt(
      "¿Desea seleccionar otro producto?: \n1: Si \n2: No"
    );
  
    while (seleccion == 1) {
      return seleccionarProductos();
    }
  
    alert("¡Gracias por su compra! lo contactaremos a la brevedad para completar su pago");
  }
  
  function iniciar() {
    ingresarNombre();
    seleccionarProductos();
  }
  
  iniciar();
  

    
