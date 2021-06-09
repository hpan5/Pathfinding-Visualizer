import React from 'react';
import { Grid } from '@material-ui/core';

const Board = ({boardArray}) => {
    
    return (
        <div className="board-class">
            <table>
                {
                    boardArray.map((row, rowIdx) => (
                        <Row key={rowIdx} boardArray={boardArray} rowIdx={rowIdx}/>
                    ))
                }
            </table>
        </div>
    )
}

export default Board;