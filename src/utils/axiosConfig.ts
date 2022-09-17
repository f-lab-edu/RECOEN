import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
};
export const client = axios.create(axiosConfig);
