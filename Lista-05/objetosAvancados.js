function Carro(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

Carro.prototype.ligar = function(){
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let anoDoCarro = parseInt(document.getElementById("anoDoCarro").value);

    let exibeCarro = document.getElementById("exibeCarro");
    exibeCarro.innerHTML = `O Carro ${marca}  ${modelo} do ano de ${anoDoCarro} está ligado.`;
};

function ligarCarro(){
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let anoDoCarro = parseInt(document.getElementById("anoDoCarro").value);

    let novoCarro = new Carro(marca, modelo, anoDoCarro);
    novoCarro.ligar();
}

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let email = document.getElementById("email").value;

    let pessoa = {nome, idade, email};

    const { nome: nomeCapturado, idade: idadeCapturado, email: emailCapturado} = pessoa;

    let exibeFormularioDesestruturado = document.getElementById("exibeFormularioDesestruturado");
    exibeFormularioDesestruturado.innerHTML =  `Seus dados:<br>Nome: ${nomeCapturado}<br>Idade: ${idadeCapturado}<br>E-mail: ${emailCapturado}`

    const copiaPessoa = {...pessoa, ativo: true};

    let exibeCopiaDaPessoa = document.getElementById("exibeCopiaDaPessoa");
    exibeCopiaDaPessoa.innerHTML = `Copia dos Dados:<br> Nome-Copia: ${copiaPessoa.nome}<br>Idade-Copia: ${copiaPessoa.idade}<br>E-mail-Copia: ${copiaPessoa.email}<br>Propriedade: ${copiaPessoa.ativo}`;
})


function filtraNumeros(){
    let numArray = document.getElementById("numArray").value;
    let numerosFiltrados = document.getElementById("numerosFiltrados");
    let numerosDobrados = document.getElementById("numerosDobrados");
    let numerosSomados = document.getElementById("numerosSomados");

    /*.trim() removeu todos os espaços em branco extras no início e no final da string, deixando apenas o texto significativo.*/ 
    if(numArray.trim() === ""){
        numerosFiltrados.innerHTML = "Valor Inválido"
    }else{
        let numerosSeparados = numArray.split(",");
        let numerosImpares = numerosSeparados.filter(function(numero){
            return numero % 2 !== 0;
        });
        let dobraNumeros = numerosImpares.map(function(numero){
            return numero * 2;
        });
        let somaNumeros = numerosSeparados.reduce(function(acumulador, numero){
            return acumulador + parseInt(numero);
        }, 0);
        
        numerosFiltrados.innerHTML = `Esses são os números ímpares { ${numerosImpares} } dessa sequencia { ${numerosSeparados}}.`;
        numerosDobrados.innerHTML = `O dobro de cada número ímpar da sequencia { ${numerosImpares} } é: ${dobraNumeros}.`;
        numerosSomados.innerHTML = `A soma dos números { ${numerosSeparados} } é: ${somaNumeros}.`;
    }
}

function iniciaPromise(){
    const minhaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100) + 1;
            if(numero < 50){
                resolve(`Operação Bem-Sucedida: ${numero}`);
            }else{
                reject(`Algo deu errado: ${numero}`);
            }
        }, 3000);
    });
    let resultadoPromise = document.getElementById("resultadoPromise");
    minhaPromise.then(resultado => {
        resultadoPromise.innerHTML = resultado;
    }).catch(erro => {
        resultadoPromise.innerHTML = erro;
    });
}

function contador(){
    let numeroClosures = parseInt(document.getElementById("numeroClosures").value);
    let resultadoClosures = document.getElementById("resultadoClosures");

    function numeroCrescente(){
        if(isNaN(numeroClosures)){
            resultadoClosures.innerHTML = "Valor Inválido";
        }else if(numeroClosures > 20){
            resultadoClosures.innerHTML = "Valor Maior que o permitido"
        }else{
            let numeros = "";
            for (let numero = 1; numero <= numeroClosures; numero++) {
                numeros += `${numero} `;
            }
            resultadoClosures.innerHTML = `Números Crescentes: { ${numeros} }`;
        }
    }

    numeroCrescente();
}

async function buscaDadosApi() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!resposta.ok) {
            throw new Error('Não foi possível buscar os dados da API.');
        }

        const data = await resposta.json();
        mostraData(data);
    } catch (error) {
        console.error(error);
    }
}

function mostraData(data) {
    const resultadoBuscaApi = document.getElementById('resultadoBuscaApi');
    const usarLista = document.createElement('ul');

    data.forEach(user => {
        const usarItem = document.createElement('li');
        usarItem.textContent = `Nome: ${user.name}, Email: ${user.email}`;
        usarLista.appendChild(usarItem);
    });

    resultadoBuscaApi.appendChild(usarLista);
}

function clonarObjeto(){
    const original = {
        nome: "João",
        idade: 20,
        altura: 1.90,
        peso: 90
    }

    let clone = clonaObjeto(original);
    let retornoObjetoOriginal = document.querySelector(".retornoObjetoOriginal");
    let retornoObjetoClonado = document.querySelector(".retornoObjetoClonado");

    retornoObjetoOriginal.innerHTML = `Objeto Original: ${JSON.stringify(original)}`;
    retornoObjetoClonado.innerHTML = `Objeto Clonado: ${JSON.stringify(clone)}`;
}

function clonaObjeto(original){

    let objetoClonado = JSON.parse(JSON.stringify(original));
    objetoClonado.modified = true;

    return objetoClonado;
}



