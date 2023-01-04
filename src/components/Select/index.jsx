import style from "./style.module.scss";

export function Select({ getSelect }) {
	return (
		<>
			<div className={style.ctn}>
				<p className={style.text}>Per page</p>
				<select className={style.select} onChange={getSelect}>
					<option value={12}>12</option>
					<option value={24}>24</option>
					<option value={48}>48</option>
				</select>
			</div>
		</>
	);
}
