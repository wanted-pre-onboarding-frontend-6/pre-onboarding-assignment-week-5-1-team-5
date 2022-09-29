import Axios, { AxiosInstance } from 'axios';

type baseApiConstructorType = {
  baseURL: string | undefined;
  token?: string | undefined;
};

class Http {
  axios: AxiosInstance;
  token: string | undefined;

  constructor({ baseURL }: baseApiConstructorType) {
    this.axios = Axios.create({
      baseURL: baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
export default Http;
