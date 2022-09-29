import { AxiosResponse } from 'axios';

export type SickApiParamsType = {
  params: any;
};

export interface SickAptiImpl {
  getSickList: ({ params }: SickApiParamsType) => Promise<AxiosResponse<any>>;
}
