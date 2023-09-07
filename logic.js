let gameBoard = (()=>{
    const row = 3
    const col = 3
    let board = []

    function createBoard(){
        for (let i = 0; i<3; i++){
            for (let j = 0; j<3; j++){
                let playTile = document.createElement('div')
                playTile.classList.add('tile')
                document.querySelector('.board').appendChild(playTile)
            }
        }
    }

    return {createBoard}
})()

gameBoard.createBoard()

const player =(move,turn)=>{
    return {move, turn}
};

const player1 = player("X",true)
const player2 = player("O",false)


function checkTurn(Event){
    if (player1.turn === true){
        if (Event.target.innerHTML === ''){
            Event.target.innerHTML = 'X'
            player1.turn = false
            player2.turn = true
        } else{
            ;;
        }
    } else{
        if (player2.turn === true){
            if (Event.target.innerHTML === ''){
                Event.target.innerHTML = 'O'
                player2.turn = false
                player1.turn = true
            } else{
                ;;
            }
        }
    }
}

document.querySelector('.board').addEventListener('mouseenter',function(){
    document.querySelectorAll('.tile').forEach(element => {
        element.addEventListener('click', checkTurn)
    });
})

function newBoard(){
    gameBoard.createBoard()
}

function detectVictory(){}