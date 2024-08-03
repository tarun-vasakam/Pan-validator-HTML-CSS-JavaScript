function validate(){
    let value=document.querySelector("input").value;
    let change=document.querySelector(".answer");
    let regex=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    let result=regex.test(value)
    if (result){
        change.innerText="Valid"
        change.classList.remove("invalid")
        change.classList.add("valid")
    }
    else{
        change.innerText="Invalid"
        change.classList.remove("valid")
        change.classList.add("invalid")
    }
}