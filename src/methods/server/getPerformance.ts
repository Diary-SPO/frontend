import { PerformanceCurrent } from 'diary-shared';
import { getUserId } from '../bridge/getUserId';
import makeRequest from './makeRequest';

export const getPerformance = async (): Promise<PerformanceCurrent | 418 | 429> => {
  const id = await getUserId() || localStorage.getItem('id');

  return makeRequest<PerformanceCurrent>(`/performance.current/${id}`);
};
