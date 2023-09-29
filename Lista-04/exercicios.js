function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let operador = document.getElementById("operador").value;
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultadoCampo = document.getElementById("resultado");
    let restoDivisaoCampo = document.getElementById("restoDivisao");
    
    if(isNaN(num1) || isNaN(num2)){
        resultadoCampo.value = "Valores Inválidos";
        restoDivisaoCampo.value = "Valores Inválidos";
        return;
    }

    let resultado;
    switch(operador){
        case'+':
            resultado = num1 + num2;
            break;

        case'-':
            resultado = num1 - num2;
            break;

        case'*':
            resultado = num1 * num2;
            break;

        case'/':
            if(num2 === 0){
                resultadoCampo.value = "Divisão por zero";
                restoDivisaoCampo.value = "Divisão por zero";
                return
            }
            resultado = num1 / num2;
            break;
        default:
            resultadoCampo.value = "Operador Inválido";
            restoDivisaoCampo.value = "Operador Inválido";
            return;
    }

    let restoDivisao = num1 % num2;

    resultadoCampo.value = resultado;
    restoDivisaoCampo.value = restoDivisao;
}

function calculaMedia(){
    let numMedia1 = parseFloat(document.getElementById("numMedia1").value);
    let numMedia2 = parseFloat(document.getElementById("numMedia2").value);
    let numMedia3 = parseFloat(document.getElementById("numMedia3").value);
    let numMedia4 = parseFloat(document.getElementById("numMedia4").value);
    let resultadoCampo = document.getElementById("resultadoMedia");

    if(isNaN(numMedia1) || isNaN(numMedia2) || isNaN(numMedia3) || isNaN(numMedia4)){
        resultadoCampo.value = "Valores Inválidos";
        return;
    }

    let soma = numMedia1 + numMedia2 + numMedia3 + numMedia4;
    let resultado = soma / 4;

    resultadoCampo.value = resultado;
}

function calculaPercentual(){
    let numPorcentagem = parseFloat(document.getElementById("numPorcentagem").value);
    let porcentagem = parseFloat(document.getElementById("porcentagem").value);
    let resultadoCampo = document.getElementById("resultadoPercentual");
    
    if(isNaN(numPorcentagem) || isNaN(porcentagem)){
        resultadoCampo.value = "Valores Inválidos";
        return;
    }

    let resultado = (porcentagem / 100)* numPorcentagem;

    resultadoCampo.value = resultado;
}

function incrementar(){
    let numIncremento = parseFloat(document.getElementById("numIncremento").value);
    let incrementado = document.getElementById("incremento");

    if(isNaN(numIncremento)){
        incrementado.value = "Valores Inválidos";
        return;
    }

    incrementado.value = ++numIncremento;
}
function decrementar(){
    let numDecremento = parseFloat(document.getElementById("numDecremento").value);
    let decrementado = document.getElementById("decremento");

    if(isNaN(numDecremento)){
        decrementado.value = "Valores Inválidos";
        return;
    }

    decrementado.value = --numDecremento;
}

function dobroIncremento(){
    let numIncrementoDobro = parseFloat(document.getElementById("numIncrementoDobro").value);
    let incrementado = document.getElementById("incrementoDobrado");

    if(isNaN(numIncrementoDobro)){
        incrementado.value = "Valores Inválidos";
        return;
    }

    for(let i= 0; i < 2; i++){
        numIncrementoDobro++;
    }

    incrementado.value = numIncrementoDobro
}

function respostaConta1(){
    let resposta = document.getElementById("resposta1");

    resposta.value = 3 + 5 * 23 + 5 * 2;
}

function respostaConta2(){
    let resposta = document.getElementById("resposta2");

    resposta.value = (3 + 5) * 2 * (3 + 5) * 2;
}

function convercao(){
    let converte = parseFloat(document.getElementById("converte").value);
    let convertido = document.getElementById("convertido");

    if(isNaN(converte)){
        convertido.value = "Valores Inválidos";
        return;
    }

    convertido.value = (converte * 9 / 5 ) + 32;
}

function calculaPerimetro(){
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let perimetro = document.getElementById("perimetro");

    if(isNaN(comprimento) || isNaN(largura)){
        perimetro.value = "Valores Inválidos";
        return;
    }

    perimetro.value = 2 * (comprimento + largura);
}

function calculaArea(){
    let raio = parseFloat(document.getElementById("raio").value);
    let area = document.getElementById("area");

    if(isNaN(raio)){
        area.value = "Valores Inválidos";
        return;
    }

    area.value = 3.14 * Math.pow(raio, 2);
}

function calculaJurosSimples(){
    let valor = parseFloat(document.getElementById("valor").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let periodo = parseFloat(document.getElementById("periodo").value);
    let juros = document.getElementById("juros");

    if(isNaN(valor) || isNaN(taxa)|| isNaN(periodo)){
        juros.value = "Valores Inválidos";
        return;
    }

    let taxaDecimal = taxa / 100;

    juros.value = valor * taxaDecimal * periodo;
}

function calculaDesconto(){
    let valorProduto = parseFloat(document.getElementById("valorProduto").value);
    let desconto = parseFloat(document.getElementById("desconto").value);
    let descontoAplicado = document.getElementById("descontoAplicado");

    if(isNaN(valorProduto) || isNaN(desconto)){
        descontoAplicado.value = "Valores Inválidos";
        return;
    }

    let descontoDecimal = desconto / 100;

    descontoAplicado.value = valorProduto - (valorProduto * descontoDecimal);
}

function calculaExponenciacao(){
    let numeroBase = parseFloat(document.getElementById("numeroBase").value);
    let numeroExpoente = parseFloat(document.getElementById("numeroExpoente").value);
    let resultadoExpoente = document.getElementById("resultadoExpoente");

    if(isNaN(numeroBase) || isNaN(numeroExpoente)){
        resultadoExpoente.value = "Valores Inválidos";
        return;
    }

    resultadoExpoente.value = numeroBase ** numeroExpoente;
}

function encontraRaizQuadrada(){
    let raizQuadrada = parseFloat(document.getElementById("raizQuadrada").value);
    let numeroRaizQuadrada = document.getElementById("numeroRaizQuadrada");

    if(isNaN(raizQuadrada)){
        numeroRaizQuadrada.value = "Valor Inválido";
        return;
    }

    numeroRaizQuadrada.value = Math.sqrt(raizQuadrada);
}

function calculaAreas(){
    let comprimentoRetangulo = parseFloat(document.getElementById("comprimentoRetangulo").value);
    let larguraRetangulo = parseFloat(document.getElementById("larguraRetangulo").value);
    let baseTriangulo = parseFloat(document.getElementById("baseTriangulo").value);
    let alturaTriangulo = parseFloat(document.getElementById("alturaTriangulo").value);
    let comparaArea = document.getElementById("comparaArea");

    if(isNaN(comprimentoRetangulo) || isNaN(larguraRetangulo) || isNaN(baseTriangulo) || isNaN(alturaTriangulo)){
        comparaArea.value = "Valor Inválido";
        return;
    }

    let areaRetangulo = comprimentoRetangulo * larguraRetangulo;

    let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

    if(areaRetangulo === areaTriangulo){
        let areasIguais = `As duas áreas tem o mesmo tamanho de: ${areaRetangulo}.`;
        comparaArea.innerHTML = areasIguais;

    } else if(areaRetangulo > areaTriangulo){
        let comparacaoRetangulo = `A área do Retângulo é maior, cujo tamanho é: ${areaRetangulo}.`;
        comparaArea.innerHTML = comparacaoRetangulo;

    }else{
        let comparacaoTriangulo = `A área do Triângulo é maior, cujo tamanho é: ${areaTriangulo}.`;
        comparaArea.innerHTML = comparacaoTriangulo;
    }  

}

function divisaoComArredondamento(){
    let numeroDivisao = parseFloat(document.getElementById("numeroDivisao").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let resultadoDivisao = document.getElementById("resultadoDivisao");

    if(isNaN(numeroDivisao) || isNaN(divisor)){
        resultadoDivisao.value = "Número Inválido"
        return;
    }

    let divisao = numeroDivisao / divisor;
    let respostaDivisao = `O resultado da divisão arredondado é: ${Math.round(divisao)}`;
    resultadoDivisao.innerHTML = respostaDivisao;
    
}