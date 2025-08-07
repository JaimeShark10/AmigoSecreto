// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//EJEMPLO
let amigos = [];

function agregarAmigo(){

    let nombre = document.getElementById('amigo').value;
    if(nombre == ''){
        alert("Agregue un nombre, ¡por favor!")
    } else{
        //Validar que el nombre ya existe
        if(amigos.includes(nombre)){
            alert("El nombre ya esta en la lista");
        }
        amigos.push(nombre);
        document.querySelector('#amigo').value = '';
        asignarElemento('listaAmigos', nombre);
        
    }
}



 
function sortearAmigo(){
    if(amigos == ''){
        alert("No hay amigos por sortear");
    } else{

    let amigoSorteado = Math.floor( Math.random() * amigos.length);
    asignarElemento('resultado', "El amigo secreto es: " + amigos[amigoSorteado]);
    console.log(amigoSorteado);
    }
    asignarElemento('listaAmigos', '');
}

function asignarElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}