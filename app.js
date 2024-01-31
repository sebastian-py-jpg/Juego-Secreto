/*let titulo = document.querySSelector("h1"); //puente entre javaxcrip y html
titulo.innerHTML = "Juego del numero secreto";*/

/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Ingrese un numero del 1 al 10 ";*/
let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosYaJuagados = [];
let cantidadDeNumeros = 10;

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * cantidadDeNumeros) + 1;
  //si la cantidad de la lista de numeros jugados es igual a cantidadDeNumeros estonces finalisa el juego
  if (listaDeNumerosYaJuagados.length == 5) {
    //ingresoTexto("p", "ya se sortearon todos los numeros");
    listaDeNumerosYaJuagados = [];
    listaDeNumerosYaJuagados.push(numeroGenerado);
    return numeroGenerado;
  } else {
    //si el numero generado ya esta en la lista ,que vuelva a general otro numero
    if (listaDeNumerosYaJuagados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      //si el numero generado no esta en la lista entonces que se use el numero para jugar y se agrege ala lista
      listaDeNumerosYaJuagados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(
    document.getElementById("ValorDeUsuario").value
  );
  if (numeroSecreto === numeroDeUsuario) {
    ingresoTexto(
      "p",
      `Acertaste el numero en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    condicionesCuandoGana();
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      ingresoTexto("p", "El numero secreto es Menor");
    } else {
      ingresoTexto("p", "El numero secreto es Mayor");
    }
    limpiarCaja("ValorDeUsuario");
  }
  intentos++;

  return;
}

function limpiarCaja(idCaja) {
  let valorCaja = document.querySelector(`#${idCaja}`);
  valorCaja.value = "";
}

function ingresoTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento); //puente entre javaxcrip y html
  elementoHtml.innerHTML = texto;
  return;
}

function reiniciarJuego() {
  /*//limpiar casilla
  limpiarCaja("ValorDeUsuario");
  //parrafo de inicio
  ingresoTexto("p", "Ingrese un numero del 1 al 10");
  //vuelva a generar el numero secreto
  numeroSecreto = generarNumeroSecreto();
  //reiniciar intentos
  intentos = 1;*/
  condicionesIniciales();
}

function condicionesCuandoGana() {
  document.getElementById("reiniciar").removeAttribute("disabled");
  document.getElementById("Intentar").setAttribute("disabled", "True");
  document.getElementById("ValorDeUsuario").setAttribute("disabled", "True");
}
function condicionesIniciales() {
  ingresoTexto("h1", "Juego del numero secreto");
  ingresoTexto("p", `Ingrese un numero del 1 al ${cantidadDeNumeros}`);
  limpiarCaja("ValorDeUsuario");
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  console.log(listaDeNumerosYaJuagados);
  intentos = 1;
  //habilito el boton de intentar
  document.getElementById("Intentar").removeAttribute("disabled");
  //desabilitar el boton de 'nuevo juego'
  document.getElementById("reiniciar").setAttribute("disabled", "True");
  //habilitamos caja de entrada input
  document.getElementById("ValorDeUsuario").removeAttribute("disabled");
}

condicionesIniciales();
/*function saludo() {
  console.log(`hola, mundo`);
}
saludo();
function nombre(name) {
  console.log(`hola, ${name}`);
}
nombre("sebastian");

function numero(number) {
  let valor = 2 * number;
  return valor;
}

console.log(numero(5));

function threenumeros(a, b, c) {
  let promedio = (a + b + c) / 3;
  return promedio;
}
console.log(threenumeros(5, 6, 7));

function numeroMayor(a, b) {
  let numberMayor;
  if (a < b) {
    numberMayor = b;
  } else {
    if (a > b) {
      numberMayor = a;
    } else {
      numberMayor = "son iguales";
    }
  }
  let texto = `${a},${b} ==> ${
    a == b ? "Ambos numeros " : "El numero Mayor es"
  } ${numberMayor}`;
  return texto;
}
console.log(numeroMayor(5, 5));

function alCuadrado(a) {
  return a ** 2;
}
console.log(alCuadrado(3));*/
