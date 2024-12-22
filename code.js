let tCount = 0;
let cCount = 0;
document.getElementById("enter-btn").addEventListener("click",function(e){
  e.preventDefault();
  addTask();
});
function addTask() {
  tCount += 1;
    const taskContent = document.getElementById("task-content").value.trim();
  
    if (taskContent !== '') {
      
      const li = document.createElement('li');
      li.innerHTML = `
                <input id="checkbox" type="checkbox" class="checkbox" onClick="checkStatus(this)"/>
                <p id="content" style="margin-top: 5px; text-align:left;"><br>${taskContent} </p>
                <img src="./trash.png" onclick="removeTask(this)">
      `;
      document.getElementById("task-list").appendChild(li);
      progBarFill();
    } 
    else {
      alert('Please enter a task!');
    }
}
function checkStatus(checkbox){
    if (checkbox.checked) {
      cCount += 1;
    } else {
      cCount -= 1;
    }
  progBarFill();
}
//<img src="./media/pen.png" onclick="editTask(this)"></img>
function removeTask(button) {
  tCount -= 1;
  const li = button.parentElement; // Get the parent list item
  document.getElementById("task-list").removeChild(li); // Remove it from the list
  const checkbox = li.querySelector(".checkbox");
  if (checkbox.checked) {
    cCount -= 1;
    console.log("ccount delete checked" + cCount);
  }
  progBarFill();
}
/*function editTask(button){
  console.log("inside");
  const li = button.parentElement;
  console.log("li" + li);
  const tMaterial=li.querySelector("#content");
  console.log("Tmaterial" + ' ${tMaterial}' );
  document.getElementById("task-content").value= '${tMaterial}';
  console.log("before remove after inserting");
  removeTask(button);
  progBarFill();
  console.log("last");
}*/
function removeTask(button) {
  tCount -= 1;
  const li = button.parentElement; // Get the parent list item
  document.getElementById("task-list").removeChild(li); // Remove it from the list
  const checkbox = li.querySelector(".checkbox");
  if (checkbox.checked) {
    cCount -= 1;
    console.log("ccount delete checked" + cCount);
  }
  progBarFill();
}
function progBarFill(){
  document.getElementById("task-content").value=' ';
  let percent=(cCount/tCount)*100;
  document.getElementById("prog-fill").style.width = `${percent}%`;
  document.getElementById("num").innerHTML = `${cCount}/${tCount}`;
  if(cCount == tCount && cCount !=0){
    console.log("congratulations");
  }
  if(tCount==0){
    document.getElementById("prog-fill").style.width = "0%";
    document.getElementById("num").innerHTML = "0";
  }
}
  