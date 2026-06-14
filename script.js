const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.textContent = "Enter Size";
document.body.insertBefore(btn, container);

btn.addEventListener("click", (e)=>{

    //removes and resets grid if already present
    container.replaceChildren();

    const size = getUserInput();

    if(size > 100 || size < 10){
        createRows(1);
        createSquares(1);
        return alert("Invalid Number, Please enter a number between 10 and 100.");
    }

    //Create custom grid from userinput
    createRows(size);
    createSquares(size);

    //Changing color of grid on hover
    const squares = document.querySelectorAll(".squares");
    squares.forEach((square)=>{
        square.addEventListener("mouseover", (e)=>e.target.style.backgroundColor = "black");
    })
});

//Default size of grid
createRows(1);
createSquares(1);

//Helper Functions----------------------/
function createRows(size){
    for(let i = 0; i < size; i++){

        const div = document.createElement("div")
        div.classList.add("rows");
        container.appendChild(div);

    }
}

function createSquares(size){
    for(let i = 0; i < size; i++){

        const row = document.querySelectorAll(".rows");

        row.forEach((row)=>{
            const div = document.createElement("div");
            div.classList.add("squares");
            row.appendChild(div);
        });

    }
};

function getUserInput(){
    return prompt("Enter size between 10 and 100");  
}

//-------------------------------------/
