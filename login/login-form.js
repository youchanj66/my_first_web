const login_form = document.querySelector("#login-form");
const id_place = document.querySelector("#id_placeholder");
const psw_place = document.querySelector("#psw_placeholder");
const completelogin = document.querySelector("#completelogin");

function login_id(){
    const username = id_place.value;
    const password = psw_place.value;
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

}
function login_update(event){
    event.preventDefault();
    event.target.value;
}
login_form.addEventListener("input",login_update);;
login_form.addEventListener("submit",login_id);

const username = localStorage.getItem("username");
const passowrd = localStorage.getItem("password");

if (username === null && passowrd === null){
    login_form.classList.remove("hidden");
} else {
    window.open("../new.html");
    login_form.classList.add("hidden")
    completelogin.innerHTML = "로그인 성공!"
}




/* localstorage에 item이 없다면 input을 보여주고, item이 있다면 "로그인성공을 출력한다" */
