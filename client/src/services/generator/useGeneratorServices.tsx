import axios from 'axios';


const BASE_URL = 'http://localhost:4000';

export const useGeneratorServices = async (setData, lang, throwError) => {
	setData({project_name:"Anime Recommendation System", project_desc:"This project requires building a full-stack anime recommendation website with defined functional and technical constraints. The system must implement secure user authentication, persistent user profiles, and CRUD operations for ratings, reviews, and watchlists. A RESTful backend API is responsible for managing user data, interfacing with an external anime metadata service, and executing recommendation logic using content-based features (genres, tags, studios) and basic collaborative filtering. The frontend must consume the API to provide searchable, filterable anime listings and personalized recommendation views within a responsive UI. Additional requirements include database-backed persistence, modular service design, and clean, well-documented code to support maintainability and future scaling.", project_diff:"Intermediate", project_lang:"Python"})
	// if (lang == "") {
	// 	await axios(`${BASE_URL}/api/generate/`, {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'Access-Control-Allow-Origin': '*', 
	// 		},
	// 	}).then(response => {
	// 		const responseData = response.data[0];
	// 		setData(responseData);
	// 	}).catch(error => {
	// 		// Handle any errors that may occur during the request
	// 		throwError(true);
	// 		console.error('An error occurred:', error);
	// 	});
	// } else {
	// 	await axios(`${BASE_URL}/api/generate/lang/` + lang, {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'Access-Control-Allow-Origin': '*', // Allow requests from any origin
	// 		},
	// 	}).then(response => {
	// 		const responseData = response.data[0];
	// 		setData(responseData);
	// 	}).catch(error => {
	// 		throwError(true);
	// 		console.error('An error occurred:', error);
	// 	});
	// }
}
