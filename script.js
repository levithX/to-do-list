//variaveis 
let novaTarefa = document.getElementById('tituloTarefa');
let criartarefa = document.getElementById('criarTarefa');
let listaPrincipal = document.getElementById('lista');
function deletar () {
    this.parentNode.remove();
}
function novoToDo () { 
    let nome = document.getElementById('tituloTarefa').value;

    if ( nome === "" ) {
        alert("escreva algo")
        return
    } else {
        let checkboxTarefa = document.createElement('input');
        let divTarefa = document.createElement('div');
        let spanTarefa = document.createElement('span');
        let delentTarefa = document.createElement('button');

        spanTarefa.value = nome;
        checkboxTarefa.type = 'checkbox';
        spanTarefa.textContent = nome;
        delentTarefa.textContent = 'deletar'
        delentTarefa.onclick = deletar
            
            
        divTarefa.appendChild(checkboxTarefa);
        divTarefa.appendChild(spanTarefa);
        divTarefa.appendChild(delentTarefa);
        document.getElementById('lista').appendChild(divTarefa);
        novaTarefa.value = "";

    }
}

function criardorBotao () {
    let todasTarefas = document.querySelectorAll('#lista > div')
    todasTarefas.forEach((tarefa) => {
        if (tarefa.querySelector('.editar-btn')) return;
        let editorMenor = document.createElement('button');
        editorMenor.textContent = 'editar'; 
        editorMenor.addEventListener("editar", editor)
        editorMenor.classList.add('editar-btn');
        tarefa.appendChild(editorMenor);

       
    })
}

function editor() { 
    
}