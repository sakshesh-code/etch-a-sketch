const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.textContent = "Enter Size";
document.body.insertBefore(btn, container);

btn.addEventListener("click", (e)=>{

    //removes and resets grid if already present
    container.replaceChildren();

    const size = getUserInput();

    if(size > 100 || size < 10 || !Number.isInteger(parseInt(size))){
        createRows(1);
        createSquares(1);
        return alert("Invalid Number, Please enter a number between 10 and 100.");
    }

    //Create custom grid from userinput
    createRows(size);
    createSquares(size);

    //Changing color of grid on hover
    const squares = document.querySelectorAll(".squares");
    squares.forEach(randomBg);

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
};

function randomBg(element){

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        let interaction = 1;

        element.addEventListener("mouseover", (e)=>{
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            //Increases opacity on each interaction until fully opaque
            if(interaction < 10){
                e.target.style.opacity = (interaction * 10) + "%"
                interaction++;
            }
        });

};

//-------------------------------------/

