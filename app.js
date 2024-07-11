let numeroSecreto= 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 5 ; 



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" :  "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }else{ 
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }  
    return;
}
// Is that! => function limpiarCaja() {let valorCaja = document.querySelector("#valorUsuario");valorCaja.value = ""; }// or just That!=>
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(listaNumeroSorteados)
    //Si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los números posibles")
    } else {
        //Si el numero generado está incluido en la lista  
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del número secreto' );
    asignarTextoElemento('p',`ingresa un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números  
    // Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo Juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();