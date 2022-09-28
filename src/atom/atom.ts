import { atom } from 'recoil';

export const textState = atom<any>({
  key: 'textState',
  default: '',
});

export const dataState = atom<any>({
  key: 'dataState',
  default: [],
});

export const recommendTextState = atom<any>({
  key: 'recommendTextState',
  default: [],
});
