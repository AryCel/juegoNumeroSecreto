let numeroSecreto = 1;
let intentos = 1;
let listaNumerosSorteados = [];
let valorMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log(intentos)
    if(numeroUsuario == numeroSecreto){
        asignarTextoElemento('p', `Felicidades! Has acertado el numero secreto en ${intentos} ${(intentos ===1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', "El numero secreto es menor al ingresado! ")
        }
        else {
            asignarTextoElemento('p', "El numero secreto es mayor al ingresado! ")
        }
        intentos++;
        limpiarInput();
    }
}

function limpiarInput() {
    document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*valorMaximo)+1;
    
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    // Si ya se sortearon todos los numeros en funcion al rango maximo
    if(listaNumerosSorteados.length == valorMaximo){
        asignarTextoElemento('p', 'Ya se han sorteado todos los nuemeros posibles');
    }
    else{
        // Si el numero generado esta incluido en la lista 
        if( listaNumerosSorteados.includes(numeroGenerado) ){
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }



}

function CondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!'); 
    asignarTextoElemento('p', `Indica un numero del 1 al ${valorMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reinicarJuego(){
    limpiarInput();
    CondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

CondicionesIniciales();