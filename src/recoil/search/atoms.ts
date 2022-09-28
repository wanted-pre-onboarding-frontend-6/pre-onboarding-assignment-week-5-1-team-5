import { atom } from 'recoil';
import { RecentTexts } from '../../types/search/type';

export const recentTextsAtom = atom<RecentTexts[] | []>({
  key: 'recentTextsAtom',
  default: [],
});
