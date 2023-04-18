// JavaScript source code
let todo_wrapper = document.querySelector('.wrapper');
let newTodo = document.querySelector('.todo_name');
let newdd = document.querySelector('.todo_date');
let addTodo = document.querySelector('.add_todo');
let todo=[];

addTodo.addEventListener('click',() => {
    if(newTodo.value.length != 0){
    //if(newTodo.nodeValue != ''){
        todo.push(newTodo);
        console.log(todo)

    let newTodo_list = document.createElement('div');
    var ddate = newdd.value;
    var dddate = new Date(newdd.value);

        newTodo_list.className = 'item';

        for(let i = 0; i < todo.length; i++){
//add info
            newTodo_list.innerHTML = newTodo.value;

// add date
            let duedate = document.createElement('Date');
            duedate.className = 'duedate';
            duedate.innerHTML= ddate.toLocaleString();
            console.log(duedate);

            //date alert
            //now.setHours(0,0,0,0);
            if (dddate < Date.now()){
                duedate.style.color = "red";
                console.log("old");
            }else{
                console.log("got time");
            }


/*priority (not finished)

var level = document.querySelector('input[name="prior"]:checked').value;

switch(true){
    case level == null:

       break;
    case levl == 0:

        break;
    case level == 1:

        break;

    case level == 3:
        break;

    
}
*/

            newTodo_list.appendChild(duedate);
            todo_wrapper.appendChild(newTodo_list);
        }
//add delete
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