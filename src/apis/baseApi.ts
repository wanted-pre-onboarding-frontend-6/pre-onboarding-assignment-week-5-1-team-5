import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface BaseApi {
  get?<T = any, R = AxiosResponse<T>>(url?: string, config?: AxiosRequestConfig<T>): Promise<R>;
}

export type PAGE_PATH = string;

class BaseApiImpl implements BaseApi {
  axios: AxiosInstance;
  pagePath: PAGE_PATH;

  constructor(pagePath: PAGE_PATH) {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    this.pagePath = pagePath;
  }
  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return await this.axios.get(this.pagePath + url, { ...config });
  }
}

export default BaseApiImpl;
