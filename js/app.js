let amigos = [];
let listaAmigos;
let resultadoSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    
    let nomeAmigo = document.getElementById('nome-amigo');

    if (nomeAmigo.value === "") {
        alert("O campo de nome está vazio");
        return;
    }
    if (amigos.includes(" " + nomeAmigo.value)) {
        alert("Amigo já adicionado");
        return;
    }
    
    amigos.push(" " + nomeAmigo.value);
    
    listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.textContent = amigos;
    nomeAmigo.value = "";
}

function sortear() {
    
    if (amigos.length < 4) {
        alert("Número insuficiente de participantes.");
        return;
    }
    
    let amigosSorteados = [];
    resultadoSorteio.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        
        do {
            numeroSorteado = parseInt(Math.random()*amigos.length);
        } while (numeroSorteado === i || amigosSorteados.includes(numeroSorteado));
        
        if ((i === amigos.length - 2) && (!amigosSorteados.includes(amigos.length - 1))) {
            numeroSorteado = amigos.length - 1;
        }
        
        amigosSorteados.push(numeroSorteado);
        resultadoSorteio.innerHTML += amigos[i] + " &rarr;" + amigos[numeroSorteado] + "<br>";
    }
}

function reiniciar() {
    amigos = [];
    listaAmigos.innerHTML = "";
    resultadoSorteio.innerHTML = "";
}