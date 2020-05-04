import axios from "axios";
const API_ENDPOINT = "https://api.github.com/markdown";
const { TOKEN } = process.env;
exports.handler = async (event, context) => {
	const body = JSON.parse(event.body);
	const markdownText = body.markdownText;
	return axios({
		method: "POST",
		url: API_ENDPOINT,
		headers: {
			Authorization: `token ${TOKEN}`,
			"Content-Type": "application/json",
		},
		data: {
			text: markdownText,
			mode: "gfm",
			context: "github/gollum",
		},
	})
		.then((response) => ({
			statusCode: 200,
			body: JSON.stringify(response.data),
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }));
};
