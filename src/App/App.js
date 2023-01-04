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
function App() {
	const [value, setValue] = useState("");
	const [page, setPage] = useState(1);
	const [select, setSelect] = useState(12);

	let sortArr = data.filter(
		({ title, keywords }) =>
			!value ||
			title.toLowerCase().includes(value) ||
			keywords.toLowerCase().includes(value)
	);

	let perPage = Math.ceil(sortArr.length / select);
	let lastElem = page * select;
	let firstElem = page * select - select;
	let test = sortArr.slice(firstElem, lastElem);
	function getSelect(e) {
		setSelect(e.target.value);
	}

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
							keywords={[...new Set(keywords.split(" "))].join(
								","
							)}
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
