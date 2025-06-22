const button = document.querySelector('#btn-add-task')
const input = document.querySelector('#input-task')
const listaCompleta = document.querySelector('#list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push(input.value)


    input.value = ''

    listarTarefas()
}

function listarTarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach( (tarefa, index) =>{

        novaLi = novaLi + ` 

            <li class="task">
                <img src="img/checked.png" alt="check-image" onclick = "tarefaConcluida(${index})">
                <p>${tarefa}</p>
                <img src="img/trash.png" alt="trash-image" onclick = "deletarItem(${index})">
            </li>

            `
    } )
    listaCompleta.innerHTML = novaLi
}

function tarefaConcluida(index){
    


}

function deletarItem(index){
    minhaListaDeItens.splice(index, 1)

    listarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa )