let btn = document.querySelectorAll(".button");
let restartBtn = document.getElementById("restart");
let message = document.getElementById("message");


//definir las casillas ganadoras 

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

//player X play first
let Turn = true;
let count = 0;

//

const winchecker = () => {
    for (let i of winningPattern){
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
    }
     (element1 != "" && (element2 != "") & (element3 !=  ""))
}

btn.forEach((element) =>{
    element.addEventListener("click", () =>{

//boquear una casilla ocupadas     

    if (element.innerText !=="")return;   
  
    if (Turn) {
        Turn = false;
        element.innerText = "X";
        element.disabled = true;
    }
    else{
        Turn = true;
        element.innerText = "O";
        element.disabled = true;
    }
    });
});
