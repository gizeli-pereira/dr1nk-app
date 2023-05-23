import sendRequest from './send-request.js';
const BASE_URL = '/api/drinks';

export function getAllDrinks() {
    return sendRequest(`${BASE_URL}`)
}
export async function createDrink(drink) {
    return sendRequest(`${BASE_URL}`, 'POST', drink);
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}

export function getDrink(drinkId) {
    return sendRequest(`${BASE_URL}/${drinkId}`);
}  

export async function deleteDrink(drinkId) {
    return sendRequest(`${BASE_URL}/${drinkId}`, 'DELETE');
}

export async function updateDrink(drinkId, drink) {
return sendRequest(`${BASE_URL}/${drinkId}`, 'PUT', drink);
}
