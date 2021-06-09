import React from 'react';

const Row = ({key, boardArray, rowIdx}) => {
    return (
        <tr>
            {
                boardArray[rowIdx].map((cell, cellIdx) => (
                    <td>
                        {cell == 1 ? 1 : null}
                    </td>
                ))
            }
        </tr>
    )
}

export default Row;