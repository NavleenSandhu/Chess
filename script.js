setBoard()

let boardSquares = board.querySelectorAll("div")
boardSquares.forEach(function (square) {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let draggedElement
let draggedElementTag= null
function dragStart(e) {
    draggedElement = e.target
    draggedElementTag = draggedElement.outerHTML
}

function dragOver(e) {
    e.preventDefault()
}

let endSquare
let endPosition

function pieceMovedSuccessfully() {
    if (!hasPiece(draggedPiece(), endPosition) || endPosition == draggedPiece().startingPosition) {
        return false
    }
    return true
}
let previousPosition
let takenPiece= null
function dragDrop(e) {
    e.preventDefault()
    endSquare = e.target
    let validMove = false
    if (endSquare.parentElement == board) {
        endPosition = parseInt(endSquare.getAttribute("id").substr(6))
        if (draggedPiece().tag.substring(14, 18) == "pawn") {
            validMove = checkValidMoveForNonAttackingPawn(draggedPiece(), endPosition)
        } else {
            for (i = 0; i < draggedPiece().legalMoveSquares.length; i++) {
                if ((draggedPiece().legalMoveSquares[i] == endPosition)) {
                    validMove = true
                    break;
                }
            }
        }
        if (validMove) {
            if (draggedPiece().alliance == turn) {
                endSquare.append(draggedElement)
                if (pieceMovedSuccessfully()) {
                    if (draggedPiece() != undefined) {
                        previousPosition = draggedPiece().startingPosition
                    }
                    previousMoveBtn.disabled=false
                    nextMoveBtn.disabled=true
                    takenPiece=null
                    setBoard()
                    setTurn()
                    isInCheck()
                    onlyCheckSaverMoves()
                }
            }
        }
    } else {
        parent = endSquare.parentElement
        endPosition = parseInt(parent.getAttribute("id").substr(6))
        if (draggedPiece().tag.substring(14, 18) == "pawn") {
            validMove = checkValidMoveForAttackingPawn(draggedPiece(), endPosition)
        } else {
            for (i = 0; i < draggedPiece().legalMoveSquares.length; i++) {
                if ((draggedPiece().legalMoveSquares[i] == endPosition)) {
                    validMove = true
                    break;
                }
            }
        }
        if (validMove) {
            if (draggedPiece().alliance == turn) {
                if (getPiece(endPosition) != draggedPiece() && getPiece(endPosition).alliance == "white") {
                    whitePieces = whitePieces.filter(pieces => pieces != getPiece(endPosition))
                    document.querySelector("#white-taken-pieces").append(endSquare)
                    takenPiece=endSquare
                } else if (getPiece(endPosition) != draggedPiece() && getPiece(endPosition).alliance == "black") {
                    blackPieces = blackPieces.filter(pieces => pieces != getPiece(endPosition))
                    document.querySelector("#black-taken-pieces").append(endSquare)
                    takenPiece=endSquare
                }
                parent.appendChild(draggedElement)
                if (pieceMovedSuccessfully()) {
                    if (draggedPiece() != undefined) {
                        previousPosition = draggedPiece().startingPosition
                    }
                    setBoard()
                    setTurn()
                    isInCheck()
                    onlyCheckSaverMoves()
                    checkForWin()
                }
            }
        }
    }
}

let previousMoveBtn=document.querySelector("#previous-move")
previousMoveBtn.addEventListener('click',previousMove)
let nextMoveBtn=document.querySelector("#next-move")
nextMoveBtn.addEventListener('click',nextMove)
previousMoveBtn.disabled=true
nextMoveBtn.disabled=true
function previousMove(){
    document.querySelector("#square"+previousPosition).append(draggedElement)
    if(takenPiece!=null){
        document.querySelector("#square"+endPosition).append(takenPiece)
    }
    
    setTurn()
    previousMoveBtn.disabled=true
    nextMoveBtn.disabled=false
}
function nextMove(){
    if(takenPiece!=null){
        if(takenPiece.outerHTML.charAt(12)=='b'){
            document.querySelector("#black-taken-pieces").append(takenPiece)
        }
        else if(takenPiece.outerHTML.charAt(12)=='w'){
            document.querySelector("#white-taken-pieces").append(takenPiece)
        }
    }   
    document.querySelector("#square"+endPosition).append(draggedElement)
    setTurn()
    nextMoveBtn.disabled=true
    previousMoveBtn.disabled=false
}