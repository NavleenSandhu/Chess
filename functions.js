const board = document.querySelector("#board")
const whiteKing = {
    tag: '<img class="w king" src="white-king.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whiteQueen1 = {
    tag: '<img class="w queen" id="1" src="white-queen.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whiteBishop1 = {
    tag: '<img class="w bishop" id="1" src="white-bishop.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whiteBishop2 = {
    tag: '<img class="w bishop" id="2" src="white-bishop.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whiteKnight1 = {
    tag: '<img class="w knight" id="1" src="white-knight.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whiteKnight2 = {
    tag: '<img class="w knight" id="2" src="white-knight.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whiteRook1 = {
    tag: '<img class="w rook" id="1" src="white-rook.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whiteRook2 = {
    tag: '<img class="w rook" id="2" src="white-rook.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn1 = {
    tag: '<img class="w pawn" id="1" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn2 = {
    tag: '<img class="w pawn" id="2" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn3 = {
    tag: '<img class="w pawn" id="3" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn4 = {
    tag: '<img class="w pawn" id="4" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn5 = {
    tag: '<img class="w pawn" id="5" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn6 = {
    tag: '<img class="w pawn" id="6" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn7 = {
    tag: '<img class="w pawn" id="7" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const whitePawn8 = {
    tag: '<img class="w pawn" id="8" src="white-pawn.png" draggable="true">',
    alliance: 'white',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackKing = {
    tag: '<img class="b king" src="black-king.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackQueen1 = {
    tag: '<img class="b queen" id="1" src="black-queen.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackBishop1 = {
    tag: '<img class="b bishop" id="1" src="black-bishop.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackBishop2 = {
    tag: '<img class="b bishop" id="2" src="black-bishop.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackKnight1 = {
    tag: '<img class="b knight" id="1" src="black-knight.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackKnight2 = {
    tag: '<img class="b knight" id="2" src="black-knight.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackRook1 = {
    tag: '<img class="b rook" id="1" src="black-rook.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackRook2 = {
    tag: '<img class="b rook" id="2" src="black-rook.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn1 = {
    tag: '<img class="b pawn" id="1" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn2 = {
    tag: '<img class="b pawn" id="2" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn3 = {
    tag: '<img class="b pawn" id="3" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn4 = {
    tag: '<img class="b pawn" id="4" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn5 = {
    tag: '<img class="b pawn" id="5" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn6 = {
    tag: '<img class="b pawn" id="6" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn7 = {
    tag: '<img class="b pawn" id="7" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}
const blackPawn8 = {
    tag: '<img class="b pawn" id="8" src="black-pawn.png" draggable="true">',
    alliance: 'black',
    legalMoveSquares: [],
    startingPosition: 0
}

function setBoard() {
    for (let i = 1; i <= 64; i++) {
        if (getPiece(i) != undefined) {
            getPiece(i).startingPosition = i
            setMoves(getPiece(i))
        }
    }
}

function hasPiece(piece, position) {
    let targetSquare = document.querySelector("#square" + position)
    if (targetSquare.firstChild == null) {
        return false;
    } else {
        if (isPieceWhite(position) && piece.alliance == 'black') {
            if (piece.startingPosition % 8 == 0 && position % 8 == 1 || piece.startingPosition % 8 == 1 && position % 8 == 0 || piece.startingPosition % 8 == 0 && position % 8 == 2 || piece.startingPosition % 8 == 7 && position % 8 == 1 || piece.startingPosition % 8 == 1 && position % 8 == 7 || piece.startingPosition % 8 == 2 && position % 8 == 0) {
                return false
            } else {
                piece.legalMoveSquares.push(position)
                return true;
            }
        } else if (isPieceBlack(position) && piece.alliance == 'white') {
            if (piece.startingPosition % 8 == 0 && position % 8 == 1 || piece.startingPosition % 8 == 1 && position % 8 == 0 || piece.startingPosition % 8 == 0 && position % 8 == 2 || piece.startingPosition % 8 == 7 && position % 8 == 1 || piece.startingPosition % 8 == 1 && position % 8 == 7 || piece.startingPosition % 8 == 2 && position % 8 == 0) {
                return false
            } else {
                piece.legalMoveSquares.push(position)
                return true;
            }
        }
        return true;
    }
}

function isPieceWhite(position) {
    let targetSquare = document.querySelector("#square" + position)
    if (targetSquare.firstChild.outerHTML.charAt(12) == "w") {
        return true;
    }
    else { return false; }
}

function isPieceBlack(position) {
    let targetSquare = document.querySelector("#square" + position)
    if (targetSquare.firstChild.outerHTML.charAt(12) == "b") {
        return true;
    }
    else { return false; }
}


function getPiece(position) {
    let targetSquare = document.querySelector("#square" + position)
    if (targetSquare.firstChild != null) {
        if (targetSquare.firstChild.outerHTML == whiteKing.tag) {
            return whiteKing
        } else if (targetSquare.firstChild.outerHTML == blackKing.tag) {
            return blackKing
        } else if (targetSquare.firstChild.outerHTML == whiteQueen1.tag) {
            return whiteQueen1
        } else if (targetSquare.firstChild.outerHTML == blackQueen1.tag) {
            return blackQueen1
        } else if (targetSquare.firstChild.outerHTML == whiteBishop1.tag) {
            return whiteBishop1
        } else if (targetSquare.firstChild.outerHTML == whiteBishop2.tag) {
            return whiteBishop2
        } else if (targetSquare.firstChild.outerHTML == blackBishop1.tag) {
            return blackBishop1
        } else if (targetSquare.firstChild.outerHTML == blackBishop2.tag) {
            return blackBishop2
        } else if (targetSquare.firstChild.outerHTML == whiteKnight1.tag) {
            return whiteKnight1
        } else if (targetSquare.firstChild.outerHTML == whiteKnight2.tag) {
            return whiteKnight2
        } else if (targetSquare.firstChild.outerHTML == blackKnight1.tag) {
            return blackKnight1
        } else if (targetSquare.firstChild.outerHTML == blackKnight2.tag) {
            return blackKnight2
        } else if (targetSquare.firstChild.outerHTML == whiteRook1.tag) {
            return whiteRook1
        } else if (targetSquare.firstChild.outerHTML == whiteRook2.tag) {
            return whiteRook2
        } else if (targetSquare.firstChild.outerHTML == blackRook1.tag) {
            return blackRook1
        } else if (targetSquare.firstChild.outerHTML == blackRook2.tag) {
            return blackRook2
        } else if (targetSquare.firstChild.outerHTML == whitePawn1.tag) {
            return whitePawn1
        } else if (targetSquare.firstChild.outerHTML == whitePawn2.tag) {
            return whitePawn2
        } else if (targetSquare.firstChild.outerHTML == whitePawn3.tag) {
            return whitePawn3
        } else if (targetSquare.firstChild.outerHTML == whitePawn4.tag) {
            return whitePawn4
        } else if (targetSquare.firstChild.outerHTML == whitePawn5.tag) {
            return whitePawn5
        } else if (targetSquare.firstChild.outerHTML == whitePawn6.tag) {
            return whitePawn6
        } else if (targetSquare.firstChild.outerHTML == whitePawn7.tag) {
            return whitePawn7
        } else if (targetSquare.firstChild.outerHTML == whitePawn8.tag) {
            return whitePawn8
        } else if (targetSquare.firstChild.outerHTML == blackPawn1.tag) {
            return blackPawn1
        } else if (targetSquare.firstChild.outerHTML == blackPawn2.tag) {
            return blackPawn2
        } else if (targetSquare.firstChild.outerHTML == blackPawn3.tag) {
            return blackPawn3
        } else if (targetSquare.firstChild.outerHTML == blackPawn4.tag) {
            return blackPawn4
        } else if (targetSquare.firstChild.outerHTML == blackPawn5.tag) {
            return blackPawn5
        } else if (targetSquare.firstChild.outerHTML == blackPawn6.tag) {
            return blackPawn6
        } else if (targetSquare.firstChild.outerHTML == blackPawn7.tag) {
            return blackPawn7
        } else if (targetSquare.firstChild.outerHTML == blackPawn8.tag) {
            return blackPawn8
        }
    }
}

function draggedPiece() {
    if (draggedElementTag != undefined) {
        if (draggedElementTag == whiteKing.tag) {
            return whiteKing
        } else if (draggedElementTag == blackKing.tag) {
            return blackKing
        } else if (draggedElementTag == whiteQueen1.tag) {
            return whiteQueen1
        } else if (draggedElementTag == blackQueen1.tag) {
            return blackQueen1
        } else if (draggedElementTag == whiteBishop1.tag) {
            return whiteBishop1
        } else if (draggedElementTag == whiteBishop2.tag) {
            return whiteBishop2
        } else if (draggedElementTag == blackBishop1.tag) {
            return blackBishop1
        } else if (draggedElementTag == blackBishop2.tag) {
            return blackBishop2
        } else if (draggedElementTag == whiteKnight1.tag) {
            return whiteKnight1
        } else if (draggedElementTag == whiteKnight2.tag) {
            return whiteKnight2
        } else if (draggedElementTag == blackKnight1.tag) {
            return blackKnight1
        } else if (draggedElementTag == blackKnight2.tag) {
            return blackKnight2
        } else if (draggedElementTag == whiteRook1.tag) {
            return whiteRook1
        } else if (draggedElementTag == whiteRook2.tag) {
            return whiteRook2
        } else if (draggedElementTag == blackRook1.tag) {
            return blackRook1
        } else if (draggedElementTag == blackRook2.tag) {
            return blackRook2
        } else if (draggedElementTag == whitePawn1.tag) {
            return whitePawn1
        } else if (draggedElementTag == whitePawn2.tag) {
            return whitePawn2
        } else if (draggedElementTag == whitePawn3.tag) {
            return whitePawn3
        } else if (draggedElementTag == whitePawn4.tag) {
            return whitePawn4
        } else if (draggedElementTag == whitePawn5.tag) {
            return whitePawn5
        } else if (draggedElementTag == whitePawn6.tag) {
            return whitePawn6
        } else if (draggedElementTag == whitePawn7.tag) {
            return whitePawn7
        } else if (draggedElementTag == whitePawn8.tag) {
            return whitePawn8
        } else if (draggedElementTag == blackPawn1.tag) {
            return blackPawn1
        } else if (draggedElementTag == blackPawn2.tag) {
            return blackPawn2
        } else if (draggedElementTag == blackPawn3.tag) {
            return blackPawn3
        } else if (draggedElementTag == blackPawn4.tag) {
            return blackPawn4
        } else if (draggedElementTag == blackPawn5.tag) {
            return blackPawn5
        } else if (draggedElementTag == blackPawn6.tag) {
            return blackPawn6
        } else if (draggedElementTag == blackPawn7.tag) {
            return blackPawn7
        } else if (draggedElementTag == blackPawn8.tag) {
            return blackPawn8
        }
    }
    return undefined;
}

function setMoves(piece) {
    let isBishop = piece.tag.substr(14, 6) == "bishop"
    let isKnight = piece.tag.substr(14, 6) == "knight"
    let isRook = piece.tag.substr(14, 4) == "rook"
    let isQueen = piece.tag.substr(14, 5) == "queen"
    let isKing = piece.tag.substr(14, 4) == "king"
    let isWhitePawn = piece.tag.substr(12, 6) == "w pawn"
    let isBlackPawn = piece.tag.substr(12, 6) == "b pawn"
    while (piece.legalMoveSquares.length > 0) {
        piece.legalMoveSquares.pop()
    }
    if (isRook) {
        const vectors = [-8, -1, 1, 8]
        for (let legalMoveSquarePosition = piece.startingPosition - 8; legalMoveSquarePosition > 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[0]) {
            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition - 1; legalMoveSquarePosition % 8 != 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[1]) {
            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 1; legalMoveSquarePosition % 8 != 1 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[2]) {
            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 8; legalMoveSquarePosition <= 64 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[3]) {
            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
    } else if (isBishop) {
        const vectors = [-9, -7, 7, 9]
        for (let legalMoveSquarePosition = piece.startingPosition - 9; legalMoveSquarePosition % 8 != 0 && legalMoveSquarePosition > 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[0]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition - 7; legalMoveSquarePosition % 8 != 1 && legalMoveSquarePosition > 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[1]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 7; legalMoveSquarePosition % 8 != 0 && legalMoveSquarePosition <= 64 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[2]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 9; legalMoveSquarePosition % 8 != 1 && legalMoveSquarePosition <= 64 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[3]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
    } else if (isQueen) {
        const vectors = [-9, -8, -7, -1, 1, 7, 8, 9]
        for (let legalMoveSquarePosition = piece.startingPosition - 9; legalMoveSquarePosition % 8 != 0 && legalMoveSquarePosition > 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[0]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition - 8; legalMoveSquarePosition > 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[1]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition - 7; legalMoveSquarePosition % 8 != 1 && legalMoveSquarePosition > 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[2]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition - 1; legalMoveSquarePosition % 8 != 0 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[3]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 1; legalMoveSquarePosition % 8 != 1 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[4]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 7; legalMoveSquarePosition % 8 != 0 && legalMoveSquarePosition <= 64 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[5]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 8; legalMoveSquarePosition <= 64 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[6]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
        for (let legalMoveSquarePosition = piece.startingPosition + 9; legalMoveSquarePosition % 8 != 1 && legalMoveSquarePosition <= 64 && !hasPiece(piece, legalMoveSquarePosition); legalMoveSquarePosition += vectors[7]) {

            piece.legalMoveSquares.push(legalMoveSquarePosition)
        }
    } else if (isKnight) {
        let vectors = [-17, -15, -10, -6, 6, 10, 15, 17];
        let destination
        vectors.forEach(vector => {
            destination = piece.startingPosition + vector
            if (destination > 0 && destination <= 64 && !hasPiece(piece, destination)) {
                if (piece.startingPosition % 8 == 1) {
                    if (vector == -15 || vector == -6 || vector == 10 || vector == 17) {
                        piece.legalMoveSquares.push(destination)
                    }
                } else if (piece.startingPosition % 8 == 2) {
                    if (vector == -17 || vector == -15 || vector == -6 || vector == 10 || vector == 15 || vector == 17) {
                        piece.legalMoveSquares.push(destination)
                    }
                } else if (piece.startingPosition % 8 == 7) {
                    if (vector == -17 || vector == -15 || vector == -10 || vector == 6 || vector == 15 || vector == 17) {
                        piece.legalMoveSquares.push(destination)
                    }
                } else if (piece.startingPosition % 8 == 0) {
                    if (vector == -17 || vector == -10 || vector == 6 || vector == 15) {
                        piece.legalMoveSquares.push(destination)
                    }
                } else {
                    piece.legalMoveSquares.push(destination)
                }
            }
        })
    } else if (isKing) {
        let vectors = [-9, -8, -7, -1, 1, 7, 8, 9]
        let destination
        for (let i = 0; i < vectors.length; i++) {
            destination = piece.startingPosition + vectors[i]
            if (destination >= 0 && destination <= 64 && !hasPiece(piece, destination)) {
                if (piece.startingPosition % 8 == 1) {
                    if (vectors[i] == -8 || vectors[i] == -7 || vectors[i] == 1 || vectors[i] == 8 || vectors[i] == 9) {
                        piece.legalMoveSquares.push(destination);
                    }
                } else if (piece.startingPosition % 8 == 0) {
                    if (vectors[i] == -9 || vectors[i] == -8 || vectors[i] == -1 || vectors[i] == 7 || vectors[i] == 8) {
                        piece.legalMoveSquares.push(destination);
                    }
                } else {
                    piece.legalMoveSquares.push(destination);
                }
            }
        }
    } else if (isBlackPawn) {
        if (piece.startingPosition < 57) {
            if (!hasPiece(piece, piece.startingPosition + 8)) {
                piece.legalMoveSquares.push(piece.startingPosition + 7)
                piece.legalMoveSquares.push(piece.startingPosition + 8)
                piece.legalMoveSquares.push(piece.startingPosition + 9)
                if (piece.startingPosition == 9 && !hasPiece(piece, piece.startingPosition + 16) || piece.startingPosition == 10 && !hasPiece(piece, piece.startingPosition + 16) || piece.startingPosition == 11 && !hasPiece(piece, piece.startingPosition + 16) || piece.startingPosition == 12 && !hasPiece(piece, piece.startingPosition + 16) || piece.startingPosition == 13 && !hasPiece(piece, piece.startingPosition + 16) || piece.startingPosition == 14 && !hasPiece(piece, piece.startingPosition + 16) || piece.startingPosition == 15 && !hasPiece(piece, piece.startingPosition + 16) || piece.startingPosition == 16 && !hasPiece(piece, piece.startingPosition + 16)) {
                    piece.legalMoveSquares.push(piece.startingPosition + 16)
                } else {
                    piece.legalMoveSquares.splice(1, 1)
                }
            } else {
                piece.legalMoveSquares.shift()
            }
        }
    } else if (isWhitePawn) {
        if (piece.startingPosition > 8) {
            if (!hasPiece(piece, piece.startingPosition - 8)) {
                piece.legalMoveSquares.push(piece.startingPosition - 7)
                piece.legalMoveSquares.push(piece.startingPosition - 8)
                piece.legalMoveSquares.push(piece.startingPosition - 9)
                if (piece.startingPosition == 49 && !hasPiece(piece, piece.startingPosition - 16) || piece.startingPosition == 50 && !hasPiece(piece, piece.startingPosition - 16) || piece.startingPosition == 51 && !hasPiece(piece, piece.startingPosition - 16) || piece.startingPosition == 52 && !hasPiece(piece, piece.startingPosition - 16) || piece.startingPosition == 53 && !hasPiece(piece, piece.startingPosition - 16) || piece.startingPosition == 54 && !hasPiece(piece, piece.startingPosition - 16) || piece.startingPosition == 55 && !hasPiece(piece, piece.startingPosition - 16) || piece.startingPosition == 56 && !hasPiece(piece, piece.startingPosition - 16)) {
                    piece.legalMoveSquares.push(piece.startingPosition - 16)
                } else {
                    piece.legalMoveSquares.splice(1, 1)
                }
            } else {
                piece.legalMoveSquares.shift()
            }
        }
    }
}

let whitePieceTags = document.querySelectorAll(".w")
let blackPieceTags = document.querySelectorAll(".b")
let turn = "white"
function setTurn() {
    if (turn == "white") {
        turn = "black"
        blackPieceTags.forEach(element => {
            element.addEventListener('dragstart', dragStart)
        })
        whitePieceTags.forEach(element => {
            element.removeEventListener('dragstart', dragStart)
        })
    } else if (turn == "black") {
        turn = "white"
        whitePieceTags.forEach(element => {
            element.addEventListener('dragstart', dragStart)
        })
        blackPieceTags.forEach(element => {
            element.removeEventListener('dragstart', dragStart)
        })
    }
    document.querySelector("h1").innerHTML = "Turn: " + turn
}

let whitePieces = [whiteKing, whiteBishop1, whiteBishop2, whiteKnight1, whiteKnight2, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8, whiteQueen1, whiteRook1, whiteRook2]
let blackPieces = [blackKing, blackBishop1, blackBishop2, blackKnight1, blackKnight2, blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, blackQueen1, blackRook1, blackRook2]
let blackqueens = [blackQueen1]
let whitequeens = [whiteQueen1]
let pieceGivingCheck
let kingInCheck
function isInCheck() {
    let inCheck
    for (let i = 0; i < whitePieces.length; i++) {
        for (let j = 0; j < whitePieces[i].legalMoveSquares.length; j++) {
            inCheck = whitePieces[i].legalMoveSquares[j] == blackKing.startingPosition
            if (inCheck) {
                pieceGivingCheck = whitePieces[i]
                kingInCheck = "black"
                document.querySelector("#square" + blackKing.startingPosition).setAttribute("style", "background-color:red;")
                return true
            }
        }
    }
    for (let i = 0; i < blackPieces.length; i++) {
        for (let j = 0; j < blackPieces[i].legalMoveSquares.length; j++) {
            inCheck = blackPieces[i].legalMoveSquares[j] == whiteKing.startingPosition
            if (inCheck) {
                pieceGivingCheck = blackPieces[i]
                document.querySelector("#square" + whiteKing.startingPosition).setAttribute("style", "background-color:red;")
                kingInCheck = "white"
                return true
            }
        }
    }
    kingInCheck = null
    document.querySelectorAll("div").forEach(element => { element.removeAttribute("style") })
    return inCheck
}

function possibleCheck(alliance, move) {
    let inCheck
    if (alliance == "black") {
        for (let i = 0; i < whitePieces.length; i++) {
            inCheck = whitePieces[i].legalMoveSquares.includes(move)
            if (inCheck) {
                return true
            }
        }
    } else if (alliance == "white") {
        for (let i = 0; i < blackPieces.length; i++) {
            inCheck = blackPieces[i].legalMoveSquares.includes(move)
            if (inCheck) {
                return true
            }
        }
    }
    return inCheck
}

function onlyCheckSaverMoves() {
    blackKing.legalMoveSquares.forEach(move => {
        if (possibleCheck("black", move)) {
            blackKing.legalMoveSquares = blackKing.legalMoveSquares.filter(newMoves => newMoves != move)
        }
    })
    whiteKing.legalMoveSquares.forEach(move => {
        if (possibleCheck("white", move)) {
            whiteKing.legalMoveSquares = whiteKing.legalMoveSquares.filter(newMoves => newMoves != move)
        }
    })
    if (kingInCheck == "black") {
        blackPieces.forEach(piece => {
            if (piece != blackKing) {
                let newMoves = [pieceGivingCheck.startingPosition]
                piece.legalMoveSquares.forEach(move => {
                    if (pieceGivingCheck.legalMoveSquares.includes(move)) {
                        newMoves.push(move)
                    }
                })
                piece.legalMoveSquares = newMoves
            }

        })
    } else if (kingInCheck == "white") {
        whitePieces.forEach(piece => {
            if (piece != whiteKing) {
                let newMoves = [pieceGivingCheck.startingPosition]
                piece.legalMoveSquares.forEach(move => {
                    if (pieceGivingCheck.legalMoveSquares.includes(move)) {
                        piece.legalMoveSquares = piece.legalMoveSquares.filter(newMove => newMove == move)
                    }
                })
                piece.legalMoveSquares = newMoves
            }
        })
    }
}

function checkForWin() {
    if (!whitePieces.includes(whiteKing)) {
        alert('Black wins!')
        location.reload();
    } else if (!blackPieces.includes(blackKing)) {
        alert('White wins!')
        location.reload();
    }
}

function checkValidMoveForAttackingPawn(pawn, endPosition) {
    if (pawn.alliance == "black") {
        if ((pawn.startingPosition + 7 == endPosition || pawn.startingPosition + 9 == endPosition) && hasPiece(pawn, endPosition)) {
            return true
        }
    } else if (pawn.alliance == "white") {
        if ((pawn.startingPosition - 7 == endPosition || pawn.startingPosition - 9 == endPosition) && hasPiece(pawn, endPosition)) {
            return true
        }
    }
    return false
}
function checkValidMoveForNonAttackingPawn(pawn, endPosition) {
    if (pawn.alliance == "black") {
        if ((pawn.startingPosition + 8 == endPosition || pawn.startingPosition + 16 == endPosition) && !hasPiece(pawn, endPosition)) {
            return true
        }
    } else if (pawn.alliance == "white") {
        if ((pawn.startingPosition - 8 == endPosition || pawn.startingPosition - 16 == endPosition) && !hasPiece(pawn, endPosition)) {
            return true
        }
    }
    return false
}

function promote(pawn) {
    if (pawn.tag.substring(14, 18) == "pawn" && (pawn.startingPosition <= 8 || pawn.startingPosition >= 57)) {
        //append a queen to startingPosition div and add an object as per the queens array
        let promotingSquare = document.querySelector("#square" + pawn.startingPosition)
        let promotingElement = promotingSquare.firstChild
        promotingSquare.removeChild(promotingElement)
        if (pawn.alliance == "white") {

        }
    }
}