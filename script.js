const button = document.querySelector('#btn-add-task')
const input = document.querySelector('#input-task')
const listaCompleta = document.querySelector('#list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })


    input.value = ''

    listarTarefas()
}

function listarTarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach( (item, index) =>{

        novaLi = novaLi + ` 

            <li class="task ${item.concluida && "ok"}">
                <img src="img/checked.png" alt="check-image" onclick = "tarefaConcluida(${index})">
                <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="trash-image" onclick = "deletarItem(${index})">
            </li>

            `
    } )
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function tarefaConcluida(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    listarTarefas()
}

function deletarItem(index){
    minhaListaDeItens.splice(index, 1)

    listarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    } 

    listarTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa )