import { useState } from "react";
import Light from "./Light";


function Board({ rows, collums }) {

    const makeBoard = () => {
        let newBoard = [];

        for (let i = 0; i < rows; i++) {
            const row = Array.from({ length: collums }, (v) => v = 0)
            newBoard.push(row)
        }

        newBoard.forEach((r, y) => {
            r.forEach((c, x) => Math.floor(Math.random() * 2) == 0 ? toggleAdjacent(y, x, newBoard) : null)
        })

        return newBoard;

    }

    let [board, UpdateBoard] = useState(makeBoard);

    function handleFlip(y, x) {

        const newBoard = Array.from(board);

        toggleAdjacent(y, x, newBoard);

        UpdateBoard(newBoard);

    }

    function toggleAdjacent(y, x, newBoard) {
        toggle(y, x, newBoard);
        toggle(y - 1, x, newBoard);
        toggle(y + 1, x, newBoard);
        toggle(y, x - 1, newBoard);
        toggle(y, x + 1, newBoard);
    }

    function toggle(y, x, newBoard) {
        if ((y >= 0 && y < collums) && (x >= 0 && x < rows)) {
            newBoard[y][x] = (newBoard[y][x] == 0 ? 1 : 0);
        }
    }

    function checkWin(newBoard) {
        return newBoard.flat(Infinity).every((v) => v == 0)
    }

    return (
        <>
            {checkWin(board) ? <h1>You win!</h1> :

                <table>
                    <tbody>

                        {board.map((row, ridx) =>
                            <tr key={`row${ridx}`}>
                                {row.map((v, cidx) => <Light key={`col${cidx}`} on={v} toggle={() => handleFlip(ridx, cidx)} />)}
                            </tr>
                        )}

                    </tbody>
                </table>}
        </>
    )
}


export default Board;