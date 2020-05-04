import fetch from "node-fetch";
import axios from "axios";
const perPage = 20;
const currentPage = 1;
const API_ENDPOINT = "https://swapi.dev/api/people/1/";

exports.handler = async (event, context) => {
	return axios
		.get(API_ENDPOINT)
		.then((response) => ({
			statusCode: 200,
			body: JSON.stringify(response.data),
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }));
};
