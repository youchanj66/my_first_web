const clock = document.querySelector(".clock");


function Now_date(){ 
    const date = new Date()
    const second = String(date.getSeconds()).padStart(2,"0")
    const minute = String(date.getMinutes()).padStart(2,"0")
    const hour = String(date.getHours()).padStart(2,"0")

    clock.innerText = `${hour}:${minute}`
}
setInterval(Now_date,6000)
Now_date()