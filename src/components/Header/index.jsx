import style from "./style.module.scss";
import React from "react";
const Header = ({ children }) => {
	return (
		<>
			<header className={style.header}>
				<div className={style.header__wrapper}>
					<h1 className={style.header__title}>Emoji Finder</h1>
					<h2 className={style.header__subtitle}>
						Find emoji by keywords
					</h2>
					{children}
				</div>
			</header>
		</>
	);
};
export default Header;
