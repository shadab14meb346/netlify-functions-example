exports.handler = async (event, context) => {
	fetch(
		`https://api.github.com/repos/open-source-ideas/open-source-ideas/issues?per_page=${perPage}&page=${currentPage}`,
	)
		.then((response) => response.json())
		.then((data) => {
			return {
				statusCode: 200,
				body: data,
			};
		});
};
