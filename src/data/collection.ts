import { BaseImage } from 'types';
import { getApi } from './core';

// Sample api call
export const getImages = async (collectionId: string): Promise<BaseImage[]> => {
  const response = await getApi(`/collections/${collectionId}/photos`);
  return response.data;
};
