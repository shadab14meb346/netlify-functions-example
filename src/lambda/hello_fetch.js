import fetch from "node-fetch";

const API_ENDPOINT = "https://icanhazdadjoke.com/";
const perPage = 20;
const currentPage = 1;
// const API_ENDPOINT =
// 	"https://api.github.com/repos/open-source-ideas/open-source-ideas/issues?per_page=20&page=1";
exports.handler = async (event, context) => {
	return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
		.then((response) => response.json())
		.then((data) => ({
			statusCode: 200,
			body: data,
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }));
};
