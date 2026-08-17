const btn = document.querySelector(".btn")
const input = document.querySelector("#input")
const listel = document.querySelector(".list-item")

btn.addEventListener("click",()=>{
    if(input.value === ""){
        alert("please enter text first")
    }else{
        let list = document.createElement("li")
        list.textContent = input.value
        listel.prepend(list)

        let spanel = document.createElement("span")
        spanel.textContent = "\u00d7"
        list.appendChild(spanel)
    }
    input.value = ""
    saveEle()
})

listel.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveEle()
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveEle()
    }
})

function saveEle(){
    localStorage.setItem("task", listel.innerHTML)
}
function getEle(){
    listel.innerHTML = localStorage.getItem("task")
}
getEle()