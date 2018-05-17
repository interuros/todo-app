
/*
    adds event listener on todo-items on click in order to show their respective description
*/


var setTime = (function(){
    var currentdate = new Date();
    var currentHour = currentdate.getHours();
    var currentMinutes = currentdate.getMinutes();

    console.log(currentHour);
    console.log(currentMinutes);

    currentHour = checkTime(currentHour);
    currentMinutes = checkTime(currentMinutes);


    console.log(currentHour);
    console.log(currentMinutes);

    document.getElementById('time').value = currentHour + ':' + currentMinutes;

    function checkTime(i){
        if(i < 10){
            i = "0" + i;
        }

        return i;
    };

    return currentdate;

})();


var setDate = (function(){

    var date = setTime;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();


    day = checkTime(day);
    month = checkTime(month);

    document.getElementById('date').value = [year, month, day].join('-');

    console.log(date);

    function checkTime(i){
        if(i < 10){
            i = "0" + i;
        }

        return i;
    };
    
    
})();


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

            this.style.animationName = "rotateBack";

            clicked = false;
        } else{
            clicked = true;

            descriptionOfItem.style.height = "auto";
            descriptionOfItem.style.paddingTop = "25px";

            this.style.animationName = "rotate";
        } 

        console.log('clicked');
        

    };

    for(i = 0; i < showdesc.length; i++){
        showdesc[i].addEventListener('click', showDesc);
    }

};

var itemId = 0;

var ToDoItem = function(title, date, time, description, id){
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
    this.id = id;
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
        removeItem.setAttribute('id', toDoList[i].id);

        todoitem.appendChild(showMore);

        todoitem.appendChild(descriptionContainer);

        descriptionContainer.appendChild(tododate);
        if(toDoList[i].date != 'NaN-NaN-NaN'){
            tododate.textContent = toDoList[i].date;
        }

        descriptionContainer.appendChild(todotime);
        todotime.textContent = toDoList[i].time;

        descriptionContainer.appendChild(tododescription);
        tododescription.textContent = toDoList[i].description;

    }
};


function addToList(){
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var reverseDate = new Date(document.getElementById('date').value)

    var day = reverseDate.getDate();
    var month = reverseDate.getMonth() + 1 ;
    var year = reverseDate.getFullYear();

    var date = [day, month, year].join('-');


    var time = document.getElementById('time').value;

    var toDoItem = new ToDoItem(title, date, time, description, itemId);

    toDoList.push(toDoItem);

    itemId ++;

    console.log(title);
    console.log(description);
    console.log(date);
    console.log(time);
    console.log(toDoItem);
    console.log(toDoList);
    
  
}

function removeButton(){

    var remove = document.getElementsByClassName('delete');


    for(i = 0; i < remove.length; i++){
        remove[i].addEventListener('click', removeFromList);
    }

};


function removeFromList(){
    var thisID = this.id;

    var thisParent = this.parentElement;

    console.log(thisParent);
    

    console.log(thisID);

    for(var i = 0; i < toDoList.length; i++){
        if(toDoList[i].id == thisID){

            toDoList.splice(i,1);
            thisParent.remove();

            console.log(toDoList);
            break;
        }
    }
    

}
    
    
function add(){
    addToList();
    addToUI();
    showDescription();
    removeButton();
}

document.getElementById('submit').addEventListener('click', add);






