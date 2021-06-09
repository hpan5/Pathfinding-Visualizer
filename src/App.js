import React from "react"
import NavBar from './Components/NavBar';
import Board from './Components/Board';

function App() {
    let board_width = 10;
    let board_height = 10;
    let bomb_x = 2;
    let bomb_y = 2;
    let boardArray = new Array(10);
    boardArray.fill(new Array(10).fill(0));
    boardArray[bomb_x][bomb_y] = 1;
    return (
    <div>
        <h1>Doris's very first pathfinding visualizer</h1>
        <NavBar />
        <Board boardArray={boardArray}/>
    </div>)
}

export default App