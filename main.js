let string = "";
let buttons = document.querySelectorAll(".num") 
Array.from(buttons).forEach((num)=>{
    num.addEventListener("click",(e)=>{
if(e.target.innerHTML == "="){
    string = eval(string)
    document.querySelector('input').value = string
}
else if(e.target.innerHTML == "C"){
    string = ""
    document.querySelector('input').value = string
}
else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string
    }
    })
})
