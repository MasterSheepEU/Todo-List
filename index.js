"use strict"
/* déclaration des variables */

const globalForm = document.querySelector('form')
const todoInput = document.getElementById('todo-name')
const sendTodoInput = document.getElementById('send-btn')
const todoList = document.querySelector('ul')
const confirmMessage = 'Voulez-vous vraiment supprimer la tâche'

/* récupération de la valuer de l'inpur type texte */

const takeTodoValue = () => {

    const todoTask = todoInput.value
    return todoTask
}

/* fonction Stockage des todo dans le LocalStorage */

const storeList = () => {
    localStorage.setItem('todo', todoList.innerHTML)
}

/* fonction création et affichage des todo */

const displayTodoTask = (todo) => {

    //Il est plus sécurisé d'utiliser CreateElement pour créer de nouveau élément, mais dans ce cas ou le contenue viens de l'application elle même les risques sont moindres

    todoList.innerHTML += `

    <li>
        <div class="todo-content">
            <p class="todo-task">${todo}</p>
        </div>
        <div class="todo-delete">
            <button class="btn-supp"><i class="fa-solid fa-trash"></i></button>
        </div>
    </li>
    `
    storeList();
}

/* fonction suppresion des todo */

const deleteTodo = (e) => {

    const liElement = e.target.closest('li');

    if (e.target.classList.contains('btn-supp') && confirm(confirmMessage)) {

        liElement.remove();
        storeList()

    } else if (e.target.classList.contains('fa-trash') && confirm(confirmMessage)) {

        liElement.remove();
        storeList()


    }

}

/* fonction récupération des Todo */

const displayList = () => {
    todoList.innerHTML = localStorage.getItem('todo')
}


/*Affichage des todo aux chargement*/

displayList()



/* --- Gestionnaire des events --- */

/* Ajout des Todo et stockage dans le LocalStorage */
globalForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (takeTodoValue() === "") {

        alert('Veuillez écrire une todo')

    } else {

        displayTodoTask(takeTodoValue())
        globalForm.reset()
    }

})

/* Suppresion des Todo du DOM et du LocalStorage */

todoList.addEventListener('click', (e) => {

    deleteTodo(e)

});


todoList.addEventListener('click', (e) => {

    if (e.target.classList.contains("todo-task")) {

        e.target.classList.toggle('content-cross')
        storeList()

    }


})

/*  // Maniére de créer mes todo avec createElement


// Création nouveau li
const newLi = document.createElement('li')

// Création 1ére div pour le contenu
const newDivContent = document.createElement('div')
newDivContent.classList.add('todo-content')

// Création de la 2éme div pour le boutton delete
const newDivTrash = document.createElement('div')
newDivTrash.classList.add('todo-delete')

// Création de la checkBox
const newCheckBox = document.createElement('input')
newCheckBox.type = "checkbox"

//Création du "p" pour le contenue
const newP = document.createElement('p')
const newTodoContent = document.createTextNode(todo)
newP.appendChild(newTodoContent)

// Création du boutton
const btnDelete = document.createElement('button')
btnDelete.classList.add('btn-supp')
const trash = document.createElement('i')
trash.classList.add('fa-solid')
trash.classList.add('fa-trash')
btnDelete.appendChild(trash)

// Attache des créations entre elles
todoList.appendChild(newLi)

newLi.appendChild(newDivContent)
newLi.appendChild(newDivTrash)

newDivContent.appendChild(newCheckBox)
newDivContent.appendChild(newP)

newDivTrash.appendChild(btnDelete)
*/

