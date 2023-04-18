// JavaScript source code
let todo_wrapper = document.querySelector('.wrapper');
let newTodo = document.querySelector('.todo_name');
let addTodo = document.querySelector('.add_todo');
let todo=[];

addTodo.addEventListener('click',() => {
    if(newTodo.nodeValue != ""){
        todo.push(newTodo.value);
        console.log(todo)

    let newTodo_list = document.createElement('div');
        newTodo_list.className = 'item';

        for(let i = 0; i < todo.length; i++){
            newTodo_list.innerHTML = newTodo.value;
            todo_wrapper.appendChild(newTodo_list);
        }
        if(todo.length > 0){
            let item=document.querySelectorAll('.item');
            for(let j = 0; j < item.length; j++){
                let delete_todo = document.createElement('div');
                delete_todo.className = 'delete';
                delete_todo.setAttribute('onclick',"this.parentNode.remove()");
                delete_todo.innerHTML = "X";
                item[j].setAttribute('draggable',true);
                item[j].addEventListener("dragstart",dragStart);
                item[j].addEventListener("dragover",dragOver);
                item[j].addEventListener("dragenter",dragEnter);                item[j].addEventListener("dragstart",dragStart);
                item[j].addEventListener("dragdrop",drop);
                item[j].addEventListener("dragleave",dragLeave);
                console.log(item[j]);
                item[j].appendChild(delete_todo)

                delete_todo.addEventListener('click', (e)=> {
                    console.log("item deleted")
                    todo_wrapper.removeChild(item[j]);
                    
                })

                }
            }            
        newTodo.value = '';
    }
})

function removeMe(e){
    var elem = e;
    elemet.remove()
}

const dragelem = document.querySelectorAll('.item');

dragelem.forEach(e => {
    e.addEventListener("dragstart",dragStart);
});
   

                                



function dragStart(event){
    event.target.classList.add('dragging')
    console.log('dragging...');
}
function dragEnter(e){
        if (!e.target.classList.contains("dropped")){
           event.target.classList.add("droppable-hover");
    }
}
function dragOver(e){
    if (!e.target.classList.contains("dropped")){
            event.preventDefault();
    }
}

function dragLeave(e){
    if (!e.target.classList.contains("dropped")){
        event.target.classList.remove("droppable-hover");
    }
}

function drop(e){
    event.preventDefault();

    var ded = document.querySelector('.dragging');

    var movedtask = ded.cloneNode(true);

        movedtask.className = "moveditem";
        movedtask.classList.add("draggable");
        movedtask.classList.add("item");
        movedtask.setAttribute('draggable',true);
        movedtask.addEventListener("dragstart",dragStart);
        movedtask.addEventListener("dragover",dragOver);
        movedtask.addEventListener("dragenter",dragEnter);                
        movedtask.addEventListener("dragdrop",drop);
        movedtask.addEventListener("dragleave",dragLeave);
        e.target.appendChild(movedtask);
        console.log('cloned');


        ded.remove();
        console.log('okay');
     }