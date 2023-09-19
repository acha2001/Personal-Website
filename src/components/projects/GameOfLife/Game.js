import React from 'react'

const WIDTH=800;
const HEIGHT=600;
const CELL_SIZE=20;
class Game extends React.Component {
    
    constructor() {
        super();
        this.rows=HEIGHT / CELL_SIZE;
        this.cols=WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }
    state= {
        cells: [],
        isRunning: false,
        interval: 100,
    }

    makeEmptyBoard() {

        let board = [];
        for(let y=0; y<this.rows; y++) {
            board[y]=[];
            for (let x=0; x<this.cols; x++) {
                board[y][x]=false;
            }
        }
        return board;
    }

    getElementOffset() {
        const rect= this.boardRef.getBoundingClientRect();
        const doc= document.documentElement;

        return {
            x: (rect.left+window.pageXOffset) - doc.clientLeft,
            y: (rect.top+window.pageYOffset) - doc.clientTop,
        }
    }
    
    makeCells() {
        let cells=[];
        for (let y=0; y<this.rows; y++) {
            for (let x=0; x<this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({x,y});
                }
            }
        }
    }

    handleClick = (event) => {

        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.makeCells() });
    }



    render() {
        return (
            <>
                <div className="Board" 
                style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                onClick={this.handleClick}
                ref={(n) => {this.boardRef = n; }}>     
                </div>
            </>

    );}
} export default Game;