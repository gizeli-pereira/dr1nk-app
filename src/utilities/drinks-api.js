import sendRequest from './send-request.js';
const BASE_URL = '/api/drinks';

export function getDrinks() {
    return sendRequest(`${BASE_URL}`)
}

export async function createDrink(drink) {
    return sendRequest(`${BASE_URL}`, 'POST', drink);
}

// For example, you had a <MoviesDetailPage> component
//export function getById(id) {
    //return sendRequest(`${BASE_URL}/${id}`);
 //}