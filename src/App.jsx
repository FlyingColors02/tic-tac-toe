import Player from "./components/player";
import GameBoard from "./components/gameBoard";
import { useState } from "react";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS";
import GameOver from "./components/gameOver";
const players=[{
	name:"Player 1",
	symbol:"X",
},{
	name:"Player 2",
	symbol:"O",
}];

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function App() {
	const [gameTurns, setGameTurns] = useState([]);

function derivedBoard({gameTurns}){
	let gameBoard = [...initialGameBoard.map(array => [...array])];
	for (const turn of gameTurns  ){
		const {square, player } = turn;
		const {row, col} = square;
		gameBoard[row][col] = player;
	}
	return gameBoard;
}
	function derivedWinner({gameBoard}){
		let winner;

		for(const combination of WINNING_COMBINATIONS){
			const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
			const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column];
			const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
	
			if(firstSquareSymbol && (firstSquareSymbol === secondSquareSymbol) && (firstSquareSymbol === thirdSquareSymbol)){
	
				winner = players.filter(player=>player.symbol == firstSquareSymbol)[0].name;
				
			}
	
		}
		return winner;
	}


	function handleActivePlayer(rowIndex, colIndex){
		setGameTurns(prevTurns=>{

			let currentPlayer = 'X';
			if(prevTurns.length > 0  && prevTurns[0].player=== 'X'){
				currentPlayer = 'O';
			}
			

			const updatedTurns = [
				{
					square:{
						row: rowIndex, col: colIndex
					},
					player: currentPlayer,
		}, ...prevTurns]

		return updatedTurns;
		});


	}

	function reStart(){
		setGameTurns([]);
	}
	const gameBoard = derivedBoard(gameTurns)
	const winner = derivedWinner(gameBoard);
	const hasDraw = (gameTurns.length === 9) && !winner;
  return (
   <main>
		<div id="game-container" >
			<ol id="players" className="highlight-player">
				{
					players.map((player)=>{
						return<Player name={player.name} symbol={player.symbol} isActive={gameTurns[0]?.player === player.symbol}/>
					})
				}
			</ol>
			{(winner || hasDraw) && <GameOver winner={winner } reStart={reStart}/>}
			<GameBoard handleActivePlayer={handleActivePlayer} gameBoard={gameBoard}/>
		</div>
		<Log turns={gameTurns}/> 
	 </main>
  )
}

export default App
