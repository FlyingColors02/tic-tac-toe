export default function GameOver({winner, reStart}){
	return <div id="game-over">
		<h2>Game Over!</h2>
		<p>{winner ? `${winner} won!`: "It's a Draw!" }</p>
		
		<p>
			<button onClick={reStart}>Rematch!</button>
		</p>
		</div>
}