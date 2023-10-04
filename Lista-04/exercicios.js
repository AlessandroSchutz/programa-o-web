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
        comparaArea.innerHTML = "Valor Inválido";
        return;
    }

    let areaRetangulo = comprimentoRetangulo * larguraRetangulo;

    let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

    if(areaRetangulo === areaTriangulo){
        comparaArea.innerHTML = `As duas áreas tem o mesmo tamanho de: ${areaRetangulo}.`;

    } else if(areaRetangulo > areaTriangulo){
        comparaArea.innerHTML =`A área do Retângulo é maior, cujo tamanho é: ${areaRetangulo}.`;

    }else{
        comparaArea.innerHTML =  `A área do Triângulo é maior, cujo tamanho é: ${areaTriangulo}.`;
    }  

}

function divisaoComArredondamento(){
    let numeroDivisao = parseFloat(document.getElementById("numeroDivisao").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let resultadoDivisao = document.getElementById("resultadoDivisao");

    if(isNaN(numeroDivisao) || isNaN(divisor)){
        resultadoDivisao.innerHTML = "Número Inválido";
        return;
    }

    let divisao = numeroDivisao / divisor;
    resultadoDivisao.innerHTML = `O resultado da divisão arredondado é: ${Math.round(divisao)}`;

}

function parOuImpar(){
    let numParOuImpar = parseFloat(document.getElementById("numParOuImpar").value);
    let resultadoParOuImpar = document.getElementById("resultadoParOuImpar");

    if(isNaN(numParOuImpar)){
        resultadoParOuImpar.innerHTML = "Número Inválido";
        return;
    }

    if(numParOuImpar % 2 === 0){
        resultadoParOuImpar.innerHTML = `${numParOuImpar} é um número PAR.`;
    }else{
        resultadoParOuImpar.innerHTML = `${numParOuImpar} é um número IMPAR.`;
    }

}

function comparacaoSimples(){
    let num1Compara = parseFloat(document.getElementById("num1Compara").value);
    let num2Compara = parseFloat(document.getElementById("num2Compara").value);
    let resultadoComparacao = document.getElementById("resultadoComparacao");

    if(isNaN(num1Compara) || isNaN(num2Compara)){
        resultadoComparacao.innerHTML = "Número Inválido";
        return;
    }

    if(num1Compara === num2Compara){
        resultadoComparacao.innerHTML = `${num1Compara} e ${num2Compara} são IGUAIS.`
    }else if(num1Compara > num2Compara){
        resultadoComparacao.innerHTML = `${num1Compara} é MAIOR que ${num2Compara}.`
    }else{
        resultadoComparacao.innerHTML = `${num2Compara} é MAIOR que ${num1Compara}.`
    }
}

function verificaIdade(){
    let numIdade = parseFloat(document.getElementById("numIdade").value);
    let resultadoIdade = document.getElementById("resultadoIdade");

    if(isNaN(numIdade)){
        resultadoIdade.innerHTML = "Número Inválido"
        return;
    }

    if(numIdade >= 18){
        resultadoIdade.innerHTML = `Maior de Idade.`
    }else{
        resultadoIdade.innerHTML = `Menor de Idade.`
    }

}

function verificaNota(){
    let numNota = parseFloat(document.getElementById("numNota").value);
    let resultadoNota = document.getElementById("resultadoNota");

    if(isNaN(numNota)){
        resultadoNota.innerHTML = "Número Inválido"
        return;
    }

    if(numNota >= 90){
        resultadoNota.innerHTML = `Nota "A"`
    }else if(numNota >= 80){
        resultadoNota.innerHTML = `Nota "B"`
    }else if(numNota >= 70){
        resultadoNota.innerHTML = `Nota "C"`
    }else if(numNota >= 60){
        resultadoNota.innerHTML = `Nota "D"`
    }else{
        resultadoNota.innerHTML = `Nota "F"`
    }

}

function verificaDia(){
    let numDia = parseFloat(document.getElementById("numDia").value);
    let resultadoDia = document.getElementById("resultadoDia");

    if(isNaN(numDia)){
        resultadoDia.innerHTML = "Valor Inválido"
        return; 
    }

    switch (numDia){
        case 1:
            resultadoDia.innerHTML = `Dia ${numDia} é Domingo.`;
            break;
        case 2:
            resultadoDia.innerHTML = `Dia ${numDia} é Segunda.`;
            break;
        case 3:
            resultadoDia.innerHTML = `Dia ${numDia} é Terça.`;
            break;
        case 4:
            resultadoDia.innerHTML = `Dia ${numDia} é Quarta.`;
            break;
        case 5:
            resultadoDia.innerHTML = `Dia ${numDia} é Quinta.`;
            break;
        case 6:
            resultadoDia.innerHTML = `Dia ${numDia} é Sexta.`;
            break;
        case 7:
            resultadoDia.innerHTML = `Dia ${numDia} é Sábado.`;
            break;
        default:
            resultadoDia.innerHTML = `Dia ${numDia} não corresponde a nenhum dia da semana`
    }
}

function verificaValor(){
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);
    let resultadoValor = document.getElementById("resultadoValor");

    if(isNaN(numA) || isNaN(numB)){
        resultadoValor.innerHTML = "Valor Inválido"
        return; 
    }
    if(numA + numB === 25){
        resultadoValor.innerHTML = `A + B é 25.` 
    }else if(numA + numB > 25){
        resultadoValor.innerHTML = "A + B é maior que 25"
    }else{
        resultadoValor.innerHTML = "A + B é menor que 25"
    }

}

function verificaEstacao(){
    let numEstacao = parseFloat(document.getElementById("numEstacao").value);
    let resultadoEstacao = document.getElementById("resultadoEstacao");

    if(isNaN(numEstacao)){
        resultadoEstacao.innerHTML = "Valor Inválido"
        return; 
    }
    
    if(numEstacao >= 1 && numEstacao < 3 || numEstacao === 12){
        resultadoEstacao.innerHTML = "Estamos no Verão";
    }else if(numEstacao >= 3 && numEstacao < 6){
        resultadoEstacao.innerHTML = "Estamos no Outono";
    }else if(numEstacao >= 6 && numEstacao < 9){
        resultadoEstacao.innerHTML = "Estamos no Inverno";
    }else if(numEstacao >= 9 && numEstacao < 12){
        resultadoEstacao.innerHTML = "Estamos no Primavera";
    }else{
        resultadoEstacao.innerHTML = "Não corresponde a uma estação do ano."
    }
}

function descontoCompra(){
    let valorCompra = parseFloat(document.getElementById("valorCompra").value);
    let valorDescontado = document.getElementById("valorDescontado");

    if(isNaN(valorCompra)){
        valorDescontado.innerHTML = "Valor Inválido"
        return; 
    }

    if(valorCompra > 100 && valorCompra <= 500){
        let valor = valorCompra - (valorCompra * 0.1);
        valorDescontado.innerHTML = `O Valor das suas compras é de R$${valor}`;
    }else if(valorCompra > 500){
        let valor = valorCompra - (valorCompra * 0.2);
        valorDescontado.innerHTML = `O Valor das suas compras é de R$${valor}`;
    }else{
        valorDescontado.innerHTML = `O Valor das suas compras não atingiu o valor mínimo para receber descontos. O Valor das suas compras é de R$${valorCompra}`
    }

}

function calculaAnoBissexto(){
    let ano = parseFloat(document.getElementById("ano").value);
    let anoBissexto = document.getElementById("anoBissexto");

    if(isNaN(ano)){
        anoBissexto.innerHTML = "Valor Inválido"
        return; 
    }
    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        anoBissexto.innerHTML = `${ano} é um ano bissexto`
    }else{
        anoBissexto.innerHTML = `${ano} não é um ano bissexto`
    }
    
}

function verificaString(){
    let cor = document.getElementById("cor").value;
    let resultadoCor = document.getElementById("resultadoCor");

    if(cor === "azul"){
        resultadoCor.innerHTML = `O céu é azul.`;
    }else{
        resultadoCor.innerHTML = `A cor não é azul.`
    }
}

function calculaSentimentos(){
    let pergunta1 = parseInt(document.getElementById("pergunta1").value);
    let pergunta2 = parseInt(document.getElementById("pergunta2").value);
    let pergunta3 = parseInt(document.getElementById("pergunta3").value);
    let pergunta4 = parseInt(document.getElementById("pergunta4").value);
    let comoVoceEsta = document.getElementById("comoVoceEsta");

    if(isNaN(pergunta1) || isNaN(pergunta2) || isNaN(pergunta3) || isNaN(pergunta4)){
        comoVoceEsta.innerHTML = "Valor Inválido";
        return;
    }
    let calculoPerguntas = pergunta1 + pergunta2 + pergunta3 + pergunta4;

    if(calculoPerguntas >= 4 && calculoPerguntas <= 20){
        comoVoceEsta.innerHTML = `Parece que você está tendo um dia ruim! Relaxe e respire.`
    }else if(calculoPerguntas >= 21 && calculoPerguntas <= 30){
        comoVoceEsta.innerHTML = `Seu dia está OK! Mantenha o ânimo.`
    }else if(calculoPerguntas >= 31 && calculoPerguntas <= 40){
        comoVoceEsta.innerHTML = `Você está tendo um ótimo dia! Continue assim!`
    }else{
        comoVoceEsta.innerHTML = `Seus valores estão fora do padrão, procure ajuda!`
    }
}

function calculaTempoViagem(planetaSelecionado){
    let velocidadeNave = parseInt(document.getElementById("velocidadeNave").value);
    let tempoViagem = document.getElementById("tempoViagem");

    if(isNaN(velocidadeNave)){
        tempoViagem.innerHTML = "Valor Inválido";
        return;
    }

    let tempo = 0;

    switch (parseInt(planetaSelecionado)){
        case 1:
            tempo = 77000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Mercúrio é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        case 2:
            tempo = 41000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Vênus é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        
        case 3:
            tempo = 78000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Júpiter é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        case 4:
            tempo = 628000000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Saturno é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        case 5:
            tempo = 1275000000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Urano é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        case 6:
            tempo = 2724000000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Netuno é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        case 7:
            tempo = 4351000000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Marte é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        case 8:
            tempo = 5906000000000 / velocidadeNave;
            tempoViagem.innerHTML = `A duração da sua viagem até Plutão é de ${tempo} horas, ou ${(tempo/24).toFixed(2)} dias.`
            break;
        default:
            tempoViagem.innerHTML = `Não foi possível calcular.`
    }
}