let gridN = document.getElementById("gridN");
let reset = document.getElementById("rst");
let wrapperDiv = document.getElementById("wrapperDiv");
let rowGrid = document.getElementsByClassName('rowGrid');
let gridNum = null;


gridN.addEventListener('click',() => {
    gridNum =prompt('how many cells you want');
    if(gridNum <= 200){
        gridCreator(gridNum);
        colorizer(gridNum);

    }
    else{
        alert('please enter number that is less then 100');
    }
});

function gridCreator(gridNum){

    for(i=0; i<gridNum; i++){
        let row = document.createElement('div');
        wrapperDiv.appendChild(row).className = 'rowGrid';

    }

    for(i=0; i<gridNum; i++){
        for(j=0; j<gridNum; j++){
            let columnDiv = document.createElement('div');
            rowGrid[i].appendChild(columnDiv).className = 'cell';
        }
    }
}


let cell = document.querySelectorAll("div");
console.log(document.querySelectorAll(".cell"));



function colorizer(gridNum){

        for(i=0; i<gridNum; i++){
            for(const child of rowGrid[i].children){
            child.addEventListener('mouseover',() =>{
                child.style.backgroundColor = "black" //randomColor();
            });
        }
    }

}

reset.addEventListener('click', () =>{

    const grid = document.querySelectorAll(".rowGrid");
    for(let i=0; i<grid.length; i++){
        grid[i].remove();
    }
});

// function randomColor(){
//     let color = [];
//     for(let i=0; i<3; i++){
//         color.push(Math.floor(Math.random()*256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
// }