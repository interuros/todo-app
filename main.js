
/*
    adds event listener on todo-items on click in order to show their respective description
*/

var toDoList = [];

function showDescription(){

    var todoItems = document.getElementsByClassName('todo-item');
    var clicked = false;
    

    var showDesc = function() {

        var todoItemsChildren = this.children;
        var description = todoItemsChildren[todoItemsChildren.length - 1];

        if(clicked){
            clicked = false;
            description.style.height = '0';
            description.style.paddingTop = '0px';

        } else{
            description.style.height = 'auto';
            description.style.paddingTop = '15px';
            
            clicked = true;
        }   
    };

    for(i = 0; i < todoItems.length; i++){
        todoItems[i].addEventListener('click', showDesc);
    }

    console.log('clicked');
    

};


var ToDoItem = function(title, date, time, description){
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
}


function addToUI(){

    var todoitem = document.createElement('div');
    todoitem.classList.add('todo-item');

    var todotitle = document.createElement('h4');
    todotitle.classList.add('todo-title');

    var tododate = document.createElement('p');
    tododate.classList.add('todo-date');

    var todotime = document.createElement('p');
    todotime.classList.add('todo-time');

    var tododescription = document.createElement('p');
    tododescription.classList.add('todo-description');

    var removeItem = document.createElement('i');
    removeItem.classList.add('ion-close')
    removeItem.classList.add('delete')

    var todolist = document.querySelector('.todo-list');

    for(i= 0; i < toDoList.length; i++){
        todolist.appendChild(todoitem);

        todoitem.appendChild(todotitle);
        todotitle.textContent = toDoList[i].title;

        todoitem.appendChild(tododate);
        tododate.textContent = toDoList[i].date;

        todoitem.appendChild(todotime);
        todotime.textContent = toDoList[i].time;

        todoitem.appendChild(removeItem);

        todoitem.appendChild(tododescription);
        tododescription.textContent = toDoList[i].description;

    }
};


function addToDoItem(){
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var reverseDate = new Date(document.getElementById('date').value)

    var day = reverseDate.getDate();
    var month = reverseDate.getMonth() + 1 ;
    var year = reverseDate.getFullYear();

    var date = [day, month, year].join('-');


    var time = document.getElementById('time').value;

    var toDoItem = new ToDoItem(title, date, time, description);

    toDoList.push(toDoItem);

    console.log(title);
    console.log(description);
    console.log(date);
    console.log(time);
    console.log(toDoItem);
    console.log(toDoList);
    
  
}
    
    
function add(){
    addToDoItem();
    addToUI();
    showDescription();
}

document.getElementById('submit').addEventListener('click', add);





