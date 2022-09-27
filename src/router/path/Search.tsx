import { RouteObject } from 'react-router-dom';
import Search from '../../pages/search';

export default function Searchpath(): RouteObject[] {
  return [
    {
      path: Search_PATH,
      element: <Search />,
    },
  ];
}

export const Search_PATH = '/';
