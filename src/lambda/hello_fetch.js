import fetch from "node-fetch";

const perPage = 20;
const currentPage = 1;
const API_ENDPOINT = "https://swapi.dev/api/people/1/";

exports.handler = async (event, context) => {
	return fetch(API_ENDPOINT)
		.then((response) => response.json())
		.then((data) => ({
			statusCode: 200,
			body: data,
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }));
};
