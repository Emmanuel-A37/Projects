const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector("#btn");

const addTask = () => {
    if(inputBox.value === ""){
        alert("Write something first");
    }
    else{
        let li = `<li>${inputBox.value}<span>\u00d7</span></li>`
        listContainer.innerHTML += li;
    }
    inputBox.value = "";
    saveData();
}
btn.addEventListener("click", addTask);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
},)
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}
const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();