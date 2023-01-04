import Container from "../components/Container";
import Header from "../components/Header";
import { data } from "../data/emoji";
import Input from "../components/Input";
import { Main } from "../components/Main";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Pagination } from "../components/Pagination";
import { Select } from "../components/Select";
import { useState } from "react";
import { getUnicData } from "../utils/getUnicData"; // отдельная функиция сортировки и отрисовки 

function App() {
	// эмоджи по фильтру
	const [value, setValue] = useState("");
	//текущая страничка
	const [page, setPage] = useState(1);
	//количество эмоджи на странице
	const [select, setSelect] = useState(12);
	// поиск 
	const unicData = getUnicData(data);
	//получение данных, сортировка
	let sortArr = unicData.filter(
		({ title, keywords }) =>
			!value ||
			title.toLowerCase().includes(value) ||
			keywords.toLowerCase().includes(value)
	);
	// количество страниц
	let perPage = Math.ceil(sortArr.length / select);
	// индекс последней эмоджи
	let lastElem = page * select;
	//эмоджи первой на странице
	let firstElem = page * select - select;
	// количество сраниц
	let test = sortArr.slice(firstElem, lastElem);
	function getSelect(e) {
		setSelect(e.target.value);
	}
	// переменные для хранения крайних номеров для страницы пагинации
	let startPage = 0;
	let endPage = perPage;
	if (page === 1 || page === 2) {
		startPage = 0;
		endPage = 5;
	} else if (
		page === perPage ||
		page === perPage - 1 ||
		page === perPage - 2
	) {
		startPage = perPage - 5;
		endPage = perPage;
	} else if (perPage > 2) {
		startPage = page - 3;
		endPage = page + 2;
	}

	return (
		<>
			<Header>
				<Input setPage={setPage} onInput={setValue} />
			</Header>
			<Main>
				<Container>
					{test.map(({ title, symbol, keywords }) => (
						<Card
							key={title}
							title={title}
							symbol={symbol}
							keywords={keywords}
						/>
					))}
				</Container>
				<Footer>
					<Pagination
						perPage={perPage}
						setPage={setPage}
						page={page}
						startPage={startPage}
						endPage={endPage}
					>
						<Select getSelect={getSelect} />
					</Pagination>
				</Footer>
			</Main>
		</>
	);
}

export default App;
