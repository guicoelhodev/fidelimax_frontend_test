import axios from "axios";

export const jsonPlaceholderAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const fidelimaxAPI = axios.create({
  baseURL: 'https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com'
})