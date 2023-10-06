function retiraNumerosDaString(){
    let palavrasENumeros = document.getElementById("palavrasENumeros").value;
    let numerosExtraidos = document.getElementById("numerosExtraidos");

    let numerosEncontrados = palavrasENumeros.match(/\d+\.\d+|\d+/g);

    if(numerosEncontrados){
        let numerosFormatados = `[ ${numerosEncontrados.join(", ")}]`
        numerosExtraidos.innerHTML = numerosFormatados;
    }else{
        numerosExtraidos.innerHTML = "Nenhum número encontrado na String.";
    }
}

function aumentaDois(){
    let numeroMaisDois = parseFloat(document.getElementById("numeroMaisDois").value);
    let numeroAumentado = document.getElementById("numeroAumentado");
        
        (function(){     
            if(!isNaN(numeroMaisDois)){
                numeroMaisDois += 2;
            }
        })();
    numeroAumentado.innerHTML = isNaN(numeroMaisDois) ? "Valor Inválido" : `Aumentando 2 ficou: ${numeroMaisDois}`;
}

function elevaPotenciaDois(){
    let numerosPotencia = document.getElementById("numerosPotencia").value;
    let numeroElevado = document.getElementById("numeroElevado");

    if(numerosPotencia.trim() === ""){
        numeroElevado.innerHTML = "Valor Inválido"
    }else{
        let numerosSeparados = numerosPotencia.split(",");
        let numerosElevados = numerosSeparados.map(numero => Math.pow(parseFloat(numero), 2));
        numeroElevado.innerHTML = `{ ${numerosElevados.join(", ")} }`;
    }
}