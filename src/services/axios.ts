import axios from "axios";

export const fideliMaxAPI = axios.create({
  baseURL: process.env.FIDELIXMAX_API,
});

export const placeholderAPI = axios.create({
  baseURL: process.env.JSONPLACEHOLDER_API,
});
