import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URI,
};
export const axiosInstance = axios.create(axiosConfig);

// 파일명이 잘못된것 같아요.
// Path: src/apis/index.ts
