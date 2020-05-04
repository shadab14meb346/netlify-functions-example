import fetch from "node-fetch";
import axios from "axios";
const perPage = 20;
const currentPage = 1;
const API_ENDPOINT = "https://api.github.com/markdown";
const { TOKEN } = process.env;
exports.handler = async (event, context) => {
	return axios({
		method: "POST",
		API_ENDPOINT,
		headers: {
			Authorization: `token ${TOKEN}`,
			"Content-Type": "application/json",
		},
		data: {
			text:
				"## Project description\r\n\r\nThe idea is to use firebase cloud services for the website. As far as I know, the basic idea of firebase is server less deployment. I run into a situation where I need to use firebase and django together. I have implemented authentication using [firebase admin](https://github.com/firebase/firebase-admin-python) and [firebase-webui.](https://github.com/firebase/firebaseui-web).\r\nAt the moment I have the following things, it can be updated\r\n\r\n1.   Deploy [authentication](https://github.com/binoyudayan/django_firebase_authetication) as an open source ( if you think its useful for somebody)\r\n-  Login using firebase/google id token, manage the sessions\r\n-  Handle user permissions - create user object like django auth [user](https://docs.djangoproject.com/en/3.0/topics/auth/default/#user-objects) from firebase [authentication](https://firebase.google.com/docs/auth?authuser=0) and users document(where additional user information and permissions are saved). Use this user object for different permission [mixins](https://docs.djangoproject.com/en/3.0/topics/auth/default/#limiting-access-to-logged-in-users) and context processing for user and permissions\r\n2.  Make something similar to django Model and Manager to abstract firestore Documents and Collections(can be additional methods to existing classes in firebase admin package). Since [firestore](https://firebase.google.com/docs/firestore?authuser=0) is a non relational database, we can't define all the fields in advance. But in situations like, \r\n- the mandatory fields with defaults values can be defined\r\n- document field types can be validated\r\n- It might be useful for form field validation\r\n- field value access using attributes instead of dictionary key\r\n3.  Handle firebase cloud function [calls](https://firebase.google.com/docs/functions/callable-reference?authuser=0)\r\n     - Function call, authentication, response/error handling for end user\r\n\r\n## Relevant Technology\r\nPython, django and firebase\r\n\r\n## Complexity and required time\r\n\r\n<!--[_Please only tick off one box in each category by changing `[ ]` to `[x]`. The labels on the project will then be updated by the maintainers as soon as possible._]-->\r\n\r\n### Complexity\r\n\r\n- [x] Intermediate - The user should have some prior knowledge of the technolog(y|ies) to the point where they know how to use it, but not necessarily all the nooks and crannies of the technology\r\n\r\n### Required time (ETA)\r\n- [x] Much work - The project will take more than a couple of weeks and serious planning is required\r\n\r\n### Categories\r\n- [x] Web app\r\n- [x] Frontend/UI\r\n- [x] APIs/Backend\r\n- [x] Security\r\n",
			mode: "gfm",
			context: "github/gollum",
		},
	})
		.then((response) => ({
			statusCode: 200,
			body: JSON.stringify(response.data),
		}))
		.catch((error) => ({ statusCode: 422, body: String(error) }));

	// return axios
	// 	.get(API_ENDPOINT)
	// 	.then((response) => ({
	// 		statusCode: 200,
	// 		body: JSON.stringify(response.data),
	// 	}))
	// 	.catch((error) => ({ statusCode: 422, body: String(error) }));
};
