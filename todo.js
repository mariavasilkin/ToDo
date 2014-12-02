
var todo = document.getElementById("todo");
var titems = todo.children;
var done = document.getElementById("done");

var move = function(){
    this.classList.toggle('green');
    done.appendChild(this);
}

for (var i = 0; i < titems.length; i++){
    titems[i].addEventListener('click', move)
}


var buttonCallback = function(){
    var newli = document.createElement("li");
    newli.innerHTML = document.getElementById("newtodo").value;
    newli.addEventListener('click', move);
    todo.appendChild(newli);
}

var tester = function(){
    console.log(document.getElementById("newtodo").value);
}

var button = document.getElementById("submit");

button.addEventListener('click',buttonCallback);
button.addEventListener('click',tester);
