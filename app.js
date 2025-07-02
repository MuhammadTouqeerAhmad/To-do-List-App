let taskInput=document.querySelector("input");
let btn=document.querySelector("#add");
let taskList=document.querySelector("#list");
let clear=document.querySelector(".fullremove");
btn.addEventListener("click",()=>{
    let newTask=document.createElement("li");
    newTask.innerText=taskInput.value;
    newTask.style.paddingLeft='3px';
    let deleteIcon = document.createElement("span");
    deleteIcon.innerHTML = "remove"; // or use an icon font/image
    deleteIcon.classList.add("delete-icon");
    deleteIcon.style.display = "none"; // hide by default
    
    newTask.appendChild(deleteIcon);
    taskList.appendChild(newTask);

    taskInput.value="";
    
    newTask.addEventListener("mouseenter",()=>{
    newTask.style.width='330px';
    newTask.style.backgroundColor='transparent';
    newTask.style.border='2px solid black';
    newTask.style.margin='10px';
    deleteIcon.style.display = "inline";
    deleteIcon.addEventListener("click",()=>{
    taskList.removeChild(newTask);
})
    })
    newTask.addEventListener("mouseleave",()=>{
        newTask.style.backgroundColor='transparent';
        newTask.style.border='none';
        deleteIcon.style.display = "none"; // hide by default
    })
    
})
clear.addEventListener("click",()=>{
    //taskList.remove();
    taskList.innerHTML="";
})


