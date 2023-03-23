const listaAhorcado = ["variable", "constante", "objeto", "bucle", "array", "backend", "funcion", "procedimiento", "string", "ecmascript", "brendan", "eich", "desarrollo", "instruccion", "console", "metodo"]

function iniciarAhorcado(){
    identificarPersona()
    indicarDecision()
}

function saludar(nickname){
    let saludo = confirm("Bienvenid@ " + nickname.trim() + " ¿Deseas iniciar una partida?")
    return saludo
}

function identificarPersona(){
    nickname = prompt("Indicanos tu nombre o nickname.")
    if(nickname.trim().length > 3){
        respuesta = saludar(nickname)
    }else{
    do {
        nickname = prompt("Tu nickname es un corto. Indicanos tu nombre o nickname(debe tener una longitud mayor a 3 caracteres).")
    } while(nickname.length < 3)
        respuesta = saludar(nickname)
    }
    return respuesta
}

function indicarDecision(){
    if (respuesta == true){
        alert("Estamos eligiendo una palabra para vos. \n \nPista: todas las palabras estan orientadas a JavaScript.")
        iniciarJuego()
    } else {
        alert("Es una lastima. En otra oportunidad sera. \nTe estaremos esperando para jugar un rato.")
    }
}

function iniciarJuego(){
    palabra = listaAhorcado[Math.floor(Math.random()*listaAhorcado.length)]
    alert("Ya esta todo listo.")
    cifrarPalabra()
}

function cifrarPalabra(){
    longitud = palabra.length
    for (let i = 0; i < longitud; i++) {
        palabraCifrada += '_';
      }
    ejecutarJuego()
}

function ejecutarJuego(){
    errores=0
        while (errores < 5 && palabraCifrada !== palabra) {
            const letra = prompt("La palabra a adivinar es "+palabraCifrada +". Ingresa una letra.");
            if (buscarLetra(letra)) {
              alert("La letra "+ letra + " está en la palabra.");
            } else {
              errores++;
              alert("La letra "+ letra + " no está en la palabra. Llevas cometidos "+ errores +" errores.");
            }
          }
        if (palabraCifrada === palabra){
                alert("FELICITACIONES. HAS GANADO. \n\nEsperamos que te hayas divertido")
            }else if ( errores === 5){
                alert("Lo sentimos, pero PERDISTE. Llegaste a los 5 Errores. \n\nIntentalo nuevamente")
            }
        }
    
    
function buscarLetra(letra) {
    letraEncontrada = false
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
        letraEncontrada = true;
        palabraCifrada = palabraCifrada.substring(0, i) + letra + palabraCifrada.substring(i + 1);
        }
    }
    return letraEncontrada;
    }