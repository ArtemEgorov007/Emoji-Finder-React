import style from "./style.module.scss";

export function Main({ children }) {
	return <main className={style.main}>{children}</main>;
}
