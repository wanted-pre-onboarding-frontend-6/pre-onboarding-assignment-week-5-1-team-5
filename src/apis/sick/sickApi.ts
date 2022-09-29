import Http from 'apis/http';
import { SickAptiImpl } from './sickImpl';

class Sick implements SickAptiImpl {
  private http = new Http({ baseURL: process.env.REACT_APP_BASE_URL });
  private path = '/sick';

  public async getSickList({ params }: any) {
    return this.http.axios.get(`${this.path}`, { params });
  }
}
export default new Sick();
