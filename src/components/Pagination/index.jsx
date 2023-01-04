import style from "./style.module.scss";

export function Pagination({
	perPage,
	setPage,
	page,
	children,
	endPage,
	startPage
}) {
	const itemToShow = [];
	for (let i = 1; i <= perPage; i++) {
		itemToShow.push(i);
	}

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.marg}>
					<button
						className={style.first}
						disabled={page === 1}
						onClick={() => setPage(1)}
					>
						First
					</button>
					{itemToShow.slice(startPage, endPage).map((e) => (
						<button
							className={page === e ? style.activ : style.btn}
							key={e}
							onClick={() => setPage(e)}
						>
							{e}
						</button>
					))}
					<button
						className={style.last}
						disabled={page === perPage}
						onClick={() => setPage(perPage)}
					>
						Last
					</button>
				</div>
				{children}
			</div>
		</>
	);
}
