const inputBox = document.querySelector("#inputBox");
const resetbtn=document.querySelector("#btnrst");
const btn = document.querySelector("#btn");
const listcontainer = document.querySelector("#list-container");


btn.addEventListener("click", addItem);
resetbtn.addEventListener("click",resetAll)

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

listcontainer.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function addItem() {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let abc = document.createElement("span");
        abc.classList.add("close-button");
        abc.innerHTML = "\u00d7";
        li.appendChild(abc);

        listcontainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
function resetAll() {
    
    listcontainer.innerHTML = "";

    
    localStorage.removeItem("data");
}
showData();
