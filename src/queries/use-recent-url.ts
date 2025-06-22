'use server';

import { apiRequest } from '@/lib/api';

export type Link = {
  uuid: string;
  original_link: string;
  new_link: string;
  alias: string;
  date: string;
};

export const fetchRecentUrls = async (): Promise<Link[]> => {
     const data = await apiRequest('admin/url/recent', 'GET', undefined, {
          next: {
               tags: ['generate-url']
          }
     });

     return data.url;
};