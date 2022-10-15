import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URI,
};
export const axiosInstance = axios.create(axiosConfig);
