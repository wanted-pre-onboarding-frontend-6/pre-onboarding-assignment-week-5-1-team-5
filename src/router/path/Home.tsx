import { RouteObject } from 'react-router-dom';
import Home from '../../pages/home';

export default function HomePath(): RouteObject[] {
  return [
    {
      path: HOME_PATH,
      element: <Home />,
    },
  ];
}

export const HOME_PATH = '/';
