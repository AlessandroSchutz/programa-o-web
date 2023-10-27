document.addEventListener("DOMContentLoaded", function(){
    const tarefaAtribuida = document.getElementById("tarefa");
    const dataVencimentoInput = document.getElementById("dataVencimento");
    const adicionarTarefa = document.getElementById("adicionarTarefa");
    const listaDeTarefas = document.getElementById("listaDeTarefas");

    const tarefas = [];

    function adicionarItem(textoTarefa, dataVencimento, marcado = false, prioridade = "prioridade1"){
        try{
            const itemTarefa = document.createElement("li");

            itemTarefa.classList.add(prioridade);
            itemTarefa.innerHTML = `
                <span class="textoItem">${textoTarefa}</span>
                <p class="textoData">${dataVencimento}</p> 
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
                const textoData = itemTarefa.querySelector(".textoData");
                if (textoItem.contentEditable === "true" && textoData.contentEditable === "true") {
                    textoItem.contentEditable = "false";
                    textoData.contentEditable = "false";
                    atualizarLocalStorage();
                } else {
                    textoItem.contentEditable = "true";
                    textoData.contentEditable = "true";
                    textoItem.focus();
                    textoData.focus();
                    
                    textoItem.addEventListener("keydown", function(event){
                        if (event.key === "Enter") {
                            event.preventDefault();
                            atualizarLocalStorage();
                            textoItem.contentEditable = "false";
                        }
                    });
                    textoData.addEventListener("keydown", function(event){
                        if (event.key === "Enter") {
                            event.preventDefault();
                            atualizarLocalStorage();
                            textoData.contentEditable = "false";
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
            const textoTarefa = item.querySelector("span").textContent;
            const dataVencimento = item.querySelector("p").textContent;
            const marcado = item.querySelector("input[type='checkbox'").checked;
            const itemSelecionado = Array.from(item.classList);
            const prioridade = item.querySelector(".filtroDePrioridades").value;
            tarefas.push({ textoTarefa, dataVencimento, marcado, itemSelecionado, prioridade});
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
            let dataVencimento = dataVencimentoInput.value;
            let partesData = dataVencimento.split("-");
            let dataOrdenada = partesData[2] + "-" + partesData[1] + "-" + partesData[0];
            let dataVencimentoOrdenada = dataOrdenada;
            if(textoTarefa !== ""){
                adicionarItem(textoTarefa, dataVencimentoOrdenada);
                tarefaAtribuida.value = "";
                dataVencimentoInput.value = "";
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
            adicionarItem(tarefa.textoTarefa, tarefa.dataVencimento, tarefa.marcado, tarefa.prioridade);
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
                }else if (filtro === "ordenaPorPrioridade") {

                    const tarefasOrdenadas = Array.from(itens);
                    tarefasOrdenadas.sort((a, b) => {
                        const prioridadeA = a.querySelector(".filtroDePrioridades").value;
                        const prioridadeB = b.querySelector(".filtroDePrioridades").value;
                        if (prioridadeA < prioridadeB) return -1;
                        if (prioridadeA > prioridadeB) return 1;
                        return 0;
                    });

                    listaDeTarefas.innerHTML = "";
    
                    tarefasOrdenadas.forEach(tarefa => {
                        listaDeTarefas.appendChild(tarefa);
                    });
                }else if(filtro === "ordenaPorDatas"){
                    
                    const tarefasOrdenadas = Array.from(itens);
                    tarefasOrdenadas.sort((a, b) => {
                        const dataA = a.querySelector(".textoData").textContent;
                        const dataB = b.querySelector(".textoData").textContent;

                        const partesDataA = dataA.split("-");
                        const partesDataB = dataB.split("-");

                        const dataOrdenadaA = new Date(partesDataA[2], partesDataA[1] - 1, partesDataA[0]);
                        const dataOrdenadaB = new Date(partesDataB[2], partesDataB[1] - 1, partesDataB[0]);

                        return dataOrdenadaA - dataOrdenadaB;
                    });

                    listaDeTarefas.innerHTML = "";

                    tarefasOrdenadas.forEach(tarefa => {
                        listaDeTarefas.appendChild(tarefa);
                    });
                }else {
                    item.style.display = "none";
                }
            }
        } catch (error) {
            console.error("Ocorreu um erro ao carregar o Filtro:", error);
        }
    });
});



