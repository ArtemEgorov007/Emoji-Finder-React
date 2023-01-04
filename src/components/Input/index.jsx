import React from "react";
import style from "./style.module.scss";

const Input = ({ onInput, setPage }) => {
	function handleInput(e) {
		onInput(e.target.value.toLowerCase().trim());
		setPage(1)
		
	}
	return (
		<>
			<div>
				<form
					className={style.wrapper}
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						className={style.input}
						placeholder="Enter Emoji"
						type="text"
						onInput={handleInput}
					/>
				</form>
			</div>
		</>
	);
};
export default Input;
