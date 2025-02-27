// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//-----------------------------------------------------------------------------------------------
//Crear un array para almacenar los nombres de los amigos ingresados por el usuario
let amigos = [];

//Implementa una función para agregar un amigo al array
function agregarAmigo() {
    let nombreAmigo = document.querySelector('#amigo').value;
    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreAmigo);
        actualizarAmigos(); //actualizo la lista
    } 
    console.log(amigos);
    return document.querySelector('#amigo').value = ''; // vaciamos la caja de texto;
}

//Implementa una función para actualizar la lista de amigos
function actualizarAmigos() {
    document.querySelector('#listaAmigos').innerHTML = ''; // vaciamos la lista
    for (let amigo of amigos) {
        document.querySelector('#listaAmigos').innerHTML += `<li>${amigo}</li>`;
    }
}

//Implementa una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos.
function sortearAmigo() {
    if (amigos.length === 0){
        alert('No hay amigos en la lista.');
        return;
    }
        
    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
    }

    // Se selecciona un número aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Se muestra el nombre del amigo sorteado en el HTML correspondiente
    asignarTextoElemento('h2', `El amigo sorteado es: ${amigoSorteado}`);
    document.getElementById('amigoSorteado').innerHTML = amigoSorteado
}
