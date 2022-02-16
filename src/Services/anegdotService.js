import axios from 'axios';
const baseURL = 'https://arcane-castle-81085.herokuapp.com/anegdots';

const getAll = () => {
    return axios.get(baseURL);
}

const create = (anegdotObj) => {
    return axios.post(baseURL, anegdotObj);
}

const update = (id, anegdotObj) => {
    return axios.put(`${baseURL}/${id}`, anegdotObj);
}

export default { getAll, create, update };