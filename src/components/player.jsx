import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
	const [playerName, setPlayerName] = useState(name);
	const [isEditing, setIsEditing] = useState(false);

	const onEdit = () => {
		console.log("hello");
		
		// setIsEditing(!isEditing);  wrong approach
		setIsEditing((editing) => !editing);
	};

	const handleChange = (e) => {
		const onChangeName = e.target.value;
		setPlayerName(onChangeName);
	};
	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						required
						value={playerName}
						onChange={handleChange}
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}

				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={onEdit}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
