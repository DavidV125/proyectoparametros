const asignarEventos = () => {
    let elBotonFinalizar = document.getElementById('btn-finalizar');
    elBotonFinalizar.addEventListener('click', finalizarPedido);
};

const calcularTotal = (precioBase = 15000, masIngredientes) => {
    let precioIngredientesExtras = 0;
    let contadorIngredienteGratis = 0;
    let ingredientesGratis = [];
    let ingredientesExtras = [];

   
    for (let ingrediente of masIngredientes) { // Iterarr sobre los ingredientes seleccionados
        if (contadorIngredienteGratis < 3) {
            ingredientesGratis.push(ingrediente); 
            contadorIngredienteGratis++;
        } else {
            ingredientesExtras.push(ingrediente); // Agregar a la lista de extras
            precioIngredientesExtras += 800; 
        }
    }

    const total = precioBase + precioIngredientesExtras;
    return { total, ingredientesGratis, ingredientesExtras };
};

const finalizarPedido = () => {
    let ingredientesSeleccionados = obtenerIngredientesSeleccionados();
    let { total, ingredientesGratis, ingredientesExtras } = calcularTotal(15000, ingredientesSeleccionados);

    document.getElementById('txtValorFinalAPagar').innerText = total;
    mostrarResumen(ingredientesGratis, ingredientesExtras, total);
};

const obtenerIngredientesSeleccionados = () => {
    let masIngredientes = [];
    const checkboxes = document.querySelectorAll('.form-check-input');

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            masIngredientes.push(checkbox.value);
        }
    }

    return masIngredientes;
};

// RESUMEN del PEDIDO
const mostrarResumen = (ingredientesGratis, ingredientesExtras, total) => {
    const detalles = document.getElementById('ingredientesSeleccionadosResumen');
    detalles.innerHTML = `<b>Pizza XL</b> <span style="float:right;"><b>$15000</b></span><br>
                          <b>Ingredientes gratis seleccionados:</b> ${ingredientesGratis.join(', ')}<br>
                          <b>Los <b>ingredientes extras</b> seleccionados son:</b> ${ingredientesExtras.join(', ')}<br>
                          Total ingredientes extras: $${ingredientesExtras.length * 800}<br><br>
                        
                              ¿Desea ingresar propina? 
                          <input type="checkbox" id="checkSiPropina"> Sí 
                          <input type="checkbox" id="checkNoPropina"> No`;

    // Escuchar cambio en propina checkboxes
    document.getElementById('checkSiPropina').addEventListener('change', mostrarInputPropina);
    document.getElementById('checkNoPropina').addEventListener('change', ocultarInputPropina);
};




