/*
function calculadoraDeCuotas() {
    event.preventDefault(); // Formulario estatico
    var monto = document.getElementById("monto").value;
    var cuotas = document.getElementById("cuotas").value;
    var medioPago = document.getElementById("medioPago").value;
    var resultado = 0;
    var nombreTarjeta;
    switch (medioPago) {
        case "platino":
            resultado = monto / cuotas * 1.05;
            nombreTarjeta = "Platino";
            break;
        case "intermedia":
            resultado = monto / cuotas * 1.10;
            nombreTarjeta = "Intermedia";
            break;
        case "black":
            resultado = monto / cuotas * 1.15;
            nombreTarjeta = "Black";
            break;
    }

    document.getElementById("resultado").innerHTML = '<b>Monto de Cuota: $</b>' + resultado + ' con su tarjeta ' + '<b>' + nombreTarjeta;
}
*/
    // POO



    let tipoTarjeta = {
        recargo:Number,
        nombreTarjeta:String,
    }

    const Platino = {};
    Platino.nombreTarjeta = "Platino";
    Platino.recargo = 1.05;
    const Intermedia = {};
    Intermedia.nombreTarjeta = "Intermedia";
    Intermedia.recargo = 1.10;
    const Black = {};
    Black.nombreTarjeta = "Black";
    Black.recargo = 1.15;

let operacionCliente;
operacionCliente = {
    monto : 0,
    "tipoTarjeta": tipoTarjeta,
    cuotas : 0,
};



function operacionFinanciera() {
    event.preventDefault();
    let mediopago = document.getElementById("medioPago").value;
    let montos = document.getElementById("monto").value;
    let cuotass = document.getElementById("cuotas").value;
    if (mediopago=="Platino") {
        operacionCliente.tipoTarjeta = Platino;
    }
        else if(mediopago=="Intermedia"){
            operacionCliente.tipoTarjeta = Intermedia;
        }
        else{
            operacionCliente.tipoTarjeta = Black;
    }

    operacionCliente.monto = montos;
    operacionCliente.cuotas = cuotass;
    let total = 0;
    total = operacionCliente.monto/operacionCliente.cuotas*operacionCliente.tipoTarjeta.recargo;
    document.getElementById("resultado").innerHTML = total + " con su Tarjeta: " + operacionCliente.tipoTarjeta.nombreTarjeta ;
    console.log(operacionCliente.cuotas);
    console.log(operacionCliente.monto);
    console.log(operacionCliente.tipoTarjeta);
}

