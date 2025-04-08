export default function GameBoard({ handleActivePlayer,gameBoard }){


	return <ol id="game-board">
		{gameBoard?.map((row, rowIndex)=><li key={rowIndex}>
		<ol>
			{row.map((col, colIndex) => <li key={colIndex}>
				<button 
				onClick={()=>handleActivePlayer(rowIndex,colIndex)}
				disabled={col!== null}
				>{col}</button>
				</li>)}
		</ol>
		</li>)}
	</ol>
}