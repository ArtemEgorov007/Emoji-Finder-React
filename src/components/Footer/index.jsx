import style from "./style.module.scss";

export function Footer({ children }) {
	return <div className={style.container}>{children}</div>;
}
