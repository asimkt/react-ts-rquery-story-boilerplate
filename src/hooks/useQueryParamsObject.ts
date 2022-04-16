import { useSearchParams } from 'react-router-dom';

interface IQueryObj {
  query: string;
  color: string;
  orientation: string;
  order_by: string;
  [k: string]: string;
}

export const useQueryParamsObject = () => {
  let [searchParams] = useSearchParams();

  const object = Object.fromEntries(searchParams.entries()) as IQueryObj;

  const refKey = [
    ...Object.keys(object),
    '---keys__values---',
    ...Object.values(object),
  ].join('-');

  return { refKey, searchParamsObj: object };
};
