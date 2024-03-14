const input = document.querySelector("#taskInput");
const ul = document.querySelector("#task");


input.addEventListener("keypress", function (e) {
    if(e.key === "Enter"){
        // console.log (input.value)
        addTask(input.value);
        input.value = "";
        saveData();
    }
    
});

const addTask = (input)=>{
    let li = document.createElement("li");
    li.innerHTML= `
    ${input}
    <i class="fa-solid fa-trash"></i>
    `;
    
    li.addEventListener("click",()=>{
        li.classList.toggle("done");
        
    }); 
    li.querySelector("i").addEventListener("click", () => {
    //   console.log("cliked");
      ul.removeChild(li);
       
   });
    ul.appendChild(li);
}


function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}
showTask();