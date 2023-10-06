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


