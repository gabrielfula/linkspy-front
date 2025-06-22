'use server'

import { apiRequest } from '@/lib/api';

type Link = {
  uuid: string;
  original_link: string;
  new_link: string;
  alias: string;
  date: string;
};

export const fetchListUrl = async (): Promise<Link[]> => {
     const data = await apiRequest('admin/url/list', 'GET', undefined, {
          next: {
               tags: ['generate-url']
          }
     });

     return data.url;
};