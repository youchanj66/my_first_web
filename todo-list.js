const todolistform = document.querySelector(".todolist-form")
const todolist = document.querySelector(".todo")
const toDoInput = document.querySelector("input")

todoarray = [];


function addtodo(event){
    event.preventDefault();
    const li = document.createElement("li");
    const span = document.createElement("span");
    const remove_button = document.createElement("button")
    todolist.appendChild(li) ;
    li.appendChild(span);
    li.appendChild(remove_button);
    remove_button.innerText = "삭제";
    const text = toDoInput.value;
    span.innerHTML = text;
    newobj = {
        text : text,
        id : Date.now(),
    };
    li.classList.add(newobj.id)

    remove_button.addEventListener("click", Deletetodo)
    todoarray.push(newobj);
    setlocal(newobj);
    input_reset();
}
const setlocal = () => {
    localStorage.setItem("value",JSON.stringify(todoarray));
     //객체로 만들어야 활용할수있음 array가 string으로 있으면 쓸모가없

}

const Deletetodo = (item) => {
    const li = item.target.parentElement;
    todoarray = todoarray.filter((todo) => todo.id !== parseInt(li.className))
    li.remove();
    setlocal()

    // localStorage.setItem("value",JSON.stringify(newtodo));
    //어떻게 remove를 눌렀을때 array 에 있는 값도 지우고 저장까지 할수 있지?
}

function input_reset(){
    toDoInput.value = "";
}
const saveditems = localStorage.getItem("value");
todolistform.addEventListener("submit",addtodo);
