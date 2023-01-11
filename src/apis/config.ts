import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URI,
  timeout: 5 * 1000,
};
export const axiosInstance = axios.create(axiosConfig);
