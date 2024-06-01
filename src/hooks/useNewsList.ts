import {useQuery} from '@tanstack/react-query';
import {getNewsList} from '../services/api';

export const useNewsList = () => {
  return useQuery({
    queryKey: ['newsList'],
    queryFn: () => getNewsList(),
  });
};
