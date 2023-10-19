document.addEventListener("DOMContentLoaded", function(){
    const tarefaAtribuida = document.getElementById("tarefa");
    const adicionarTarefa = document.getElementById("adicionarTarefa");
    const listaDeTarefas = document.getElementById("listaDeTarefas")
    
    function adicionarItem(textoTarefa, marcado = false){
        const itemTarefa = document.createElement("li");
        itemTarefa.innerHTML = `
            <span class="textoItem">${textoTarefa}</span>
            <div class="seletores">
                <label class="style-checkbox">
                    <input type="checkbox" ${marcado ? "checked" : ""}>
                    <i class="fa-solid fa-circle-check fa-lg"></i>
                </label>
                <button class="editarItem fa-solid fa-pen-to-square fa-xl"></button>                
                <button class="excluirItem fa-solid fa-circle-xmark fa-xl"></button>
            </div>  
        `;

        listaDeTarefas.appendChild(itemTarefa);

        const botaoEditar = itemTarefa.querySelector(".editarItem");
        botaoEditar.addEventListener("click", function(){
            const textoItem = itemTarefa.querySelector(".textoItem");
            if (textoItem.contentEditable === "true") {
                textoItem.contentEditable = "false";
                atualizarLocalStorage();
            } else {
                textoItem.contentEditable = "true";
                textoItem.focus(); 
            }
        });
        
        const confirmaEdicao = document.querySelector(".textoItem")
        confirmaEdicao.addEventListener("keydown", function(event){
            if(event.key === "Enter"){
                event.preventDefault();
                atualizarLocalStorage();
                confirmaEdicao.contentEditable = "false";
            }
        });

        const botaoExcluir = itemTarefa.querySelector(".excluirItem");
        botaoExcluir.addEventListener("click", function(){
            itemTarefa.remove();
            atualizarLocalStorage();
        });

        const itemMarcado = itemTarefa.querySelector("input[type='checkbox']");
        itemMarcado.addEventListener("change", function () {
            const marcado = itemMarcado.checked;
            if (marcado) {
                itemTarefa.classList.add("itemMarcado");
                itemTarefa.classList.remove("itemDesmarcado");
            } else {
                itemTarefa.classList.remove("itemMarcado");
                itemTarefa.classList.add("itemDesmarcado");
            }
            atualizarLocalStorage();
        });     
    }


    function atualizarLocalStorage(){
        const tarefas = [];
        const itens = listaDeTarefas.querySelectorAll("li");
        itens.forEach(function (item){
            const marcado = item.querySelector("input[type='checkbox'").checked;
            const textoTarefa = item.querySelector("span").textContent;
            const classes = Array.from(item.classList);
            tarefas.push({ textoTarefa, marcado, classes });
        });
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    adicionarTarefa.addEventListener("click", function(){
        let textoTarefa = tarefaAtribuida.value.trim();
        if(textoTarefa !== ""){
            adicionarItem(textoTarefa);
            tarefaAtribuida.value = "";
            atualizarLocalStorage();
        }
    });

    tarefaAtribuida.addEventListener("keypress", function(Event){
        if(Event.key === "Enter"){
            adicionarTarefa.click();
        }
    });

    const tarefasArmazenadas = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefasArmazenadas){
        tarefasArmazenadas.forEach(function (tarefa){
            adicionarItem(tarefa.textoTarefa, tarefa.marcado);
            const itemTarefa = listaDeTarefas.lastChild;
            if(tarefa.classes && tarefa.classes.length > 0) {
                itemTarefa.classList.add(...tarefa.classes);
            }
        });
    }
});

document.getElementById("filtroTarefas").addEventListener("change", function(){
    const filtro = this.value;
    const listaDeTarefas = document.getElementById("listaDeTarefas");
    const itens = listaDeTarefas.getElementsByTagName("li");
    for (let i = 0; i < itens.length; i++) {
        const item = itens[i];

        if (filtro === "todasTarefas") {
            item.style.display = "flex"; 
        } else if (filtro === "tarefasPendentes" && !item.querySelector("input[type='checkbox']").checked) {
            item.style.display = "flex"; 
        } else if (filtro === "tarefasConcluidas" && item.querySelector("input[type='checkbox']").checked) {
            item.style.display = "flex"; 
        } else {
            item.style.display = "none";

        }
    }
    
})