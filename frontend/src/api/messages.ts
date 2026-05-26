import axios from 'axios';

const BASE = 'http://localhost:3001/messages';

export const getMessage = async () => {
    return axios.get(BASE);
}

export const postMessage = async (username: string, message: string) => {
    return axios.post(BASE, { username, message });
}

export const updateMessage = async (id: string, message: string) => {
    return axios.put(`${BASE}/${id}`, { message });
}

export const deleteMessage = async (id: string) => {
    return axios.delete(`${BASE}/${id}`);
}