
/*
    adds event listener on todo-items on click in order to show their respective description
*/

var toDoList = [];

function showDescription(){

    var showdesc = document.getElementsByClassName('show-desc');
    var clicked = false;

    
    

    var showDesc = function() {

        var showdescParent = this.parentElement;
        var parentChildren = showdescParent.children;
        var descriptionOfItem = parentChildren[parentChildren.length - 1];


        if(clicked){
            descriptionOfItem.style.height = "0";
            descriptionOfItem.style.paddingTop = "0";

            clicked = false;
        } else{
            clicked = true;

            descriptionOfItem.style.height = "auto";
            descriptionOfItem.style.paddingTop = "25px";
        }   


        console.log('clicked');
        console.log(showdesc.length);
        console.log(showdescParent);
        console.log(showdesc);
        console.log(descriptionOfItem);

    };

    for(i = 0; i < showdesc.length; i++){
        showdesc[i].addEventListener('click', showDesc);
    }

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

    var showMore = document.createElement('i');
    showMore.classList.add('fas');
    showMore.classList.add('fa-angle-down');
    showMore.classList.add('show-desc');

    var descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description');

    var todolist = document.querySelector('.todo-list');

    for(i= 0; i < toDoList.length; i++){

        todolist.appendChild(todoitem);

        todoitem.appendChild(todotitle);
        todotitle.textContent = toDoList[i].title;

        todoitem.appendChild(removeItem);

        todoitem.appendChild(showMore);

        todoitem.appendChild(descriptionContainer);

        descriptionContainer.appendChild(tododate);
        tododate.textContent = toDoList[i].date;

        descriptionContainer.appendChild(todotime);
        todotime.textContent = toDoList[i].time;

        descriptionContainer.appendChild(tododescription);
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





