const button = document.querySelector('#btn-add-task')
const input = document.querySelector('#input-task')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push(input.value)

    listarTarefas()
}

function listarTarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach( tarefa =>{

        novaLi = novaLi + ` 

            <li class="task">
                <img src="img/checked.png" alt="check-image">
                <p>${tarefa}</p>
                <img src="img/trash.png" alt="trash-image">
            </li>

            `
    } )
}

button.addEventListener('click', adicionarNovaTarefa )