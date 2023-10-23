document.addEventListener("DOMContentLoaded", function(){
    const tarefaAtribuida = document.getElementById("tarefa");
    const adicionarTarefa = document.getElementById("adicionarTarefa");
    const listaDeTarefas = document.getElementById("listaDeTarefas")
    
    const tarefas = [];

    function adicionarItem(textoTarefa, marcado = false, prioridade = "prioridade1"){
        try{
            const itemTarefa = document.createElement("li");

            itemTarefa.classList.add(prioridade);
            itemTarefa.innerHTML = `
                <span class="textoItem">${textoTarefa}</span>
                <div class="seletores">
                    <label class="estilo-checkbox">
                        <input type="checkbox" ${marcado ? "checked" : ""}>
                        <i class="fa-solid fa-circle-check fa-lg"></i>
                    </label>
                    <button class="editarItem fa-solid fa-pen-to-square fa-xl"></button>                
                    <button class="excluirItem fa-solid fa-circle-xmark fa-xl"></button>
                    <select class="filtroDePrioridades">
                        <option value="prioridade1" ${prioridade === "prioridade1" ? "selected" : ""}>Prioridade 1</option>
                        <option value="prioridade2" ${prioridade === "prioridade2" ? "selected" : ""}>Prioridade 2</option>
                        <option value="prioridade3" ${prioridade === "prioridade3" ? "selected" : ""}>Prioridade 3</option>
                    </select>
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
                    
                    textoItem.addEventListener("keydown", function(event){
                        if (event.key === "Enter") {
                            event.preventDefault();
                            atualizarLocalStorage();
                            textoItem.contentEditable = "false";
                        }
                    });
                }
            });

            const botaoExcluir = itemTarefa.querySelector(".excluirItem");
            botaoExcluir.addEventListener("click", function(){
                itemTarefa.remove();
                atualizarLocalStorage();
            });

            const selecaoPrioridade = itemTarefa.querySelector(".filtroDePrioridades");
            selecaoPrioridade.addEventListener("change", function(){
                const corPrioridade = selecaoPrioridade.value;
                itemTarefa.classList.remove("prioridade1", "prioridade2", "prioridade3");
                itemTarefa.classList.add(corPrioridade);
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
        }catch(error){
            console.error("Ocorreu um erro ao adicionar o Item:", error);
        }
    }

    /*-----------------------------------*/

    function atualizarLocalStorage(){
        const itens = listaDeTarefas.querySelectorAll("li");
        tarefas.length = 0;
        itens.forEach(function (item){
            const marcado = item.querySelector("input[type='checkbox'").checked;
            const textoTarefa = item.querySelector("span").textContent;
            const itemSelecionado = Array.from(item.classList);
            const prioridade = item.querySelector(".filtroDePrioridades").value;
            tarefas.push({ textoTarefa, marcado, itemSelecionado, prioridade });
        });
        tarefas.sort((a, b) =>{
            if(a.prioridade < b.prioridade)return -1;
            if(a.prioridade > b.prioridade)return 1;
            return 0;
        });
        const tarefasConcluidas = tarefas.filter(tarefa => tarefa.marcado).length;
        const contadorTarefasConcluidas = document.querySelector(".contadorTarefasConcluidas");
        contadorTarefasConcluidas.textContent = tarefasConcluidas.toString();

        const tarefasPendentes = tarefas.filter(tarefa => !tarefa.marcado).length;
        const contadorTarefasPendentes = document.querySelector(".contadorTarefasPendentes");
        contadorTarefasPendentes.textContent = tarefasPendentes.toString();

        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    adicionarTarefa.addEventListener("click", function(){
        try{
            let textoTarefa = tarefaAtribuida.value.trim();
            if(textoTarefa !== ""){
                adicionarItem(textoTarefa);
                tarefaAtribuida.value = "";
                atualizarLocalStorage();
            }
        }catch (error){
            console.error("Ocorreu um erro ao adicionar a Tarefa:", error);
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
            adicionarItem(tarefa.textoTarefa, tarefa.marcado, tarefa.prioridade);
            const itemTarefa = listaDeTarefas.lastChild;
            if(tarefa.itemSelecionado && tarefa.itemSelecionado.length > 0) {
                itemTarefa.classList.add(...tarefa.itemSelecionado);
            }
        });

        const tarefasConcluidas = tarefasArmazenadas.filter(tarefa => tarefa.marcado).length;
        const contadorTarefasConcluidas = document.querySelector(".contadorTarefasConcluidas");
        contadorTarefasConcluidas.textContent = tarefasConcluidas.toString();

        const tarefasPendentes = tarefasArmazenadas.filter(tarefa => !tarefa.marcado).length;
        const contadorTarefasPendentes = document.querySelector(".contadorTarefasPendentes");
        contadorTarefasPendentes.textContent = tarefasPendentes.toString();
    }
});

document.getElementById("filtroTarefas").addEventListener("change", function(){
    try{
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
    }catch(error){
        console.error("Ocorreu um erro ao carregar o Filtro:", error);
    }
});