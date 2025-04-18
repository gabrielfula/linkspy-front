import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/api';

type Link = {
  uuid: string;
  original_link: string;
  new_link: string;
};

const fetchListUrl = async (): Promise<Link[]> => {
     const data = await apiRequest("admin/url/list", "GET");
     return data.url;
};

export function useListUrl() {
     return useQuery({
          queryKey: ['list-urls'],
          queryFn: fetchListUrl,
          staleTime: 1000 * 60 * 5,
     });
}
