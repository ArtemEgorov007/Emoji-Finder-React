import style from "./style.module.scss";

export function Card({ symbol, title, keywords }) {
	return (
		<div className={style.card}>
			<div className={style.card__img}>{symbol}</div>
			<div className={style.card__title}>{title}</div>
			<div className={style.card__desc}>{keywords}</div>
		</div>
	);
}
