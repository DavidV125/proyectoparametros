const asignarEventos = () => {
    let elBotonFinalizar = document.getElementById('btn-finalizar');
    elBotonFinalizar.addEventListener('click', finalizarPedido);
};

//calcular el total de la pizza
const calcularTotal = (precioBase = 15000, masIngredientes) => {
    let precioIngredientesExtras = 0;
    let contadorGratis = 0;

//recorre los ingredientes
    for (let ingrediente of masIngredientes) {
        if (contadorGratis < 3) {
            contadorGratis++; // agrega +1 desppues de que se actualiza
        } else {
            console.log(`el ingrediente agregado es: ${ingrediente}`);
            precioIngredientesExtras += 800; // precio pizza + ingredientes
        }
    }

    const total = precioBase + precioIngredientesExtras;
    return total;
};

//finalizar el pedido
const finalizarPedido = () => {
    let ingredientesSeleccionados = obtenerIngredientesSeleccionados();
    let totalPizza = calcularTotal(15000, ingredientesSeleccionados);

    document.getElementById('txtValorFinalAPagar').innerText = totalPizza;
    mostrarResumen(ingredientesSeleccionados, totalPizza);
};

// obtener los ingredientes seleccionados
const obtenerIngredientesSeleccionados = () => {
    let masIngredientes = [];
    const checkboxes = document.querySelectorAll('.form-check-input');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            masIngredientes.push(checkbox.value);
        }
    });

    return masIngredientes;
};

// mostrarresumen del pedido
const mostrarResumen = (masIngredientes, total) => {
    const detalles = document.getElementById('detallesResumen');
    detalles.innerHTML = `Ingredientes seleccionados: ${masIngredientes}<br>Total a pagar: $${total}`;
};



/*

const invocarSaludo =()=>{
    const unNombre = 'david';
    const unaEdad = 36;
    console.log('----------------Invocacion de la funcion con parametros pordefecto----------------')
    saludar();
    console.log('----------------Invocacion de la funcion con parametros definidos----------------')
    saludar(unNombre, unaEdad);
    console.log('----------------Invocacion de la funcion con parametros rest----------------')
    saludar('David', 36, 'Profesor de Inglés', 'Comer', 'Me gustan los perros', 'mi color preferido es el verde');
}

const saludar = (nombre = 'Salomé', edad=15, ...masDatos)=>{
    console.log(`Hola, me llamo ${nombre}, y tengo esta edad: ${edad}`);
    console.log('%c informacion adicional', 'background-color:green')
    for(let dato of masDatos){
        console.log('%c' +dato, 'background-color:red;color:white;');
    }
}




let asignarEventos = ()=>{

    let elBtnCalcular = document.getElementById('btn-calcular');
    elBtnCalcular.addEventListener('click', integracion);

    let elBtnCalcular2 = document.getElementById('btn-calcular2');
    elBtnCalcular2.addEventListener('click', integracion);

    let elBtnCalcularMermelada = document.getElementById('btn-calcularMermelada');
    elBtnCalcularMermelada.addEventListener('click', integracion);

    let elBtnCalcularPan = document.getElementById('btn-calcularPan');
    elBtnCalcularPan.addEventListener('click', integracion);

    let elBtnCalcularQueso = document.getElementById('btn-calcularQueso');
    elBtnCalcularQueso.addEventListener('click', integracion);

    let elBtnCalcularDescuento = document.getElementById('btn-finalizar');
    elBtnCalcularDescuento.addEventListener('click', aplicarDescuento);



}

//estructura clase
class Producto{
    constructor(nombre , precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    verPrecioProducto(){
        console.log(` El precio de ${this.nombre} es de ${ this.precio}`);
    }
}
//fin estructura clase


class Carrito{
    constructor(productos, valorFinalAPagar){
        this.productos = productos;
        this.valorFinalAPagar = valorFinalAPagar;
    }
    // ENTRADA
    agregarProductos(unProducto){
        this.productos.push(unProducto);
    }
    // PROCESO
    calcularTotalCompra(){ // CAMBIAR NOMbre
        let precioParcial = 0;
        for(const producto of this.productos){ // this para hacer referencia al arreglo que se construya dentro de este objeto
            // console.log(producto);
            precioParcial = producto.precio * producto.cantidad;
            this.valorFinalAPagar = this.valorFinalAPagar + precioParcial; //acumulador
            // console.log(this.valorFinalAPagar);
        }
    }
    //SALIDA
    finalizarCompra(){
        let elTxtValorFinalAPagar = document.getElementById('txtValorFinalAPagar');
        elTxtValorFinalAPagar.innerText = this.valorFinalAPagar;
    }

    mostrarDetallesCompra(){
        let mensaje = '';
        let elPrfDetallesCarrito = document.getElementById('detallesCarrito');
        for (const producto of this.productos){
            if(producto.cantidad > 0){
                mensaje = mensaje + `Producto: ${producto.nombre}, Precio: ${producto.precio} , Cantidad: ${producto.cantidad} <br>`;
            }
        }// fin for
        elPrfDetallesCarrito.innerHTML = mensaje;
    }

}


//ENTRADA 
let atraparDatos = ()=>{
    let objCarrito = new Carrito([],0); // creamos un objeto carrito, con arreglo de productos vacio y valor final a pagar 0
    //ENTRADA

    //identificar precios desde id precio en cda card y eliminar $ y punto
    let valorLeche = Number(document.getElementById('precioLeche').innerText.replace('$','').replace('.',''));
    console.log(` El precio es de ${valorLeche}`);

    let valorAzucar = Number(document.getElementById('precioAzucar').innerText.replace('$','').replace('.',''));
    console.log(` El precio es de ${valorAzucar}`)

    let valorMermelada = Number(document.getElementById('precioMermelada').innerText.replace('$','').replace('.',''));
    console.log(` El precio es de ${valorMermelada}`)

    let valorPan = Number(document.getElementById('precioPan').innerText.replace('$','').replace('.',''));
    console.log(` El precio es de ${valorPan}`)

    let valorQueso = Number(document.getElementById('precioQueso').innerText.replace('$','').replace('.',''));
    console.log(` El precio es de ${valorQueso}`)


//calcular cantidad * precio y agregar a carrito

    let cantidadLeche = Number(document.getElementById('txtLeche').value);
    console.log(` cantidad seleccionada es ${cantidadLeche}`); 
    let objLeche = new Producto('Leche Colun Entera 1 L.', valorLeche, cantidadLeche);
    objCarrito.agregarProductos(objLeche);

  
    let cantidadAzucar = Number(document.getElementById('txtAzucar').value);
    console.log(` cantidad seleccionada es ${cantidadAzucar}`); 
    let objAzucar = new Producto('Azúcar Iansa 1kg.', valorAzucar, cantidadAzucar);
    objCarrito.agregarProductos(objAzucar);
   
    let cantidadMermelada = Number(document.getElementById('txtMermelada').value);
    console.log(` cantidad seleccionada es ${cantidadMermelada}`); 
    let objMermelada = new Producto('Mermelada St. Dalfour Frutilla 284 g.', valorMermelada, cantidadMermelada);
    objCarrito.agregarProductos(objMermelada);

    
    let cantidadPan = Number(document.getElementById('txtPan').value);
    console.log(` cantidad seleccionada es ${cantidadPan}`);
    let objPan = new Producto('Pan Molde Ideal Blanco XL 750 g.', valorPan, cantidadPan);
    objCarrito.agregarProductos(objPan);


    let cantidadQueso = Number(document.getElementById('txtQueso').value);
    console.log(` cantidad seleccionada es ${cantidadQueso}`);
    let objQueso = new Producto('Queso Mantecoso Río Bueno Trozo 250 g.', valorQueso, cantidadQueso);
    objCarrito.agregarProductos(objQueso);


   
   
   
    //PROCESO
    objCarrito.calcularTotalCompra();
    //SALIDA
    objCarrito.finalizarCompra();
    return objCarrito;


}


let integracion = ()=>{
    let elCarritoDeCompras = atraparDatos();
    console.log(elCarritoDeCompras);
    elCarritoDeCompras.mostrarDetallesCompra();
}

//Calcular descuento
let aplicarDescuento = () => {
    let carrito = atraparDatos(); // carrito actualizado
    let valorDescuento = carrito.valorFinalAPagar * 0.20;
    carrito.valorFinalAPagar -= valorDescuento; 

    //se actualiza el valor a pagar
    let elTxtValorFinalAPagarCD = document.getElementById('txtValorFinalAPagar');
    elTxtValorFinalAPagarCD.innerText = carrito.valorFinalAPagar;

    // alerta y aceptar
    alert(`Se aplicó un descuento del 20%. El nuevo total a pagar es: $${carrito.valorFinalAPagar}`);
};

*/