const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");
function addTask(){
  if(InputBox.value === "") {
    alert("Add your text!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
}
InputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
})

ListContainer.addEventListener("click", function(task) {
  if(task.target.tagName === "LI") {
    task.target.classList.toggle("checked");
  }
  else if(task.target.tagName === "SPAN") {
    task.target.parentElement.remove();
  }
});