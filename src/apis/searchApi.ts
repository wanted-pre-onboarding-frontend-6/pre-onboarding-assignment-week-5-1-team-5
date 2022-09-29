import BaseApiImpl from './baseApi';
import { BaseApi } from './baseApi';

class SearchApi extends BaseApiImpl implements BaseApi {
  getSearchList = async (text: string) => {
    const { data } = await this.get(`?q=${text}`);
    console.info('calling API');
    return data;
  };
}

export default new SearchApi('sick');
