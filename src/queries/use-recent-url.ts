import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/api';

type Link = {
  uuid: string;
  original_link: string;
  new_link: string;
};

const fetchRecentUrls = async (): Promise<Link[]> => {
     const data = await apiRequest("admin/url/recent", "GET");
     return data.url;
};

export function useRecentUrls() {
     return useQuery({
          queryKey: ['recent-urls'],
          queryFn: fetchRecentUrls,
          staleTime: 1000 * 60 * 5,
     });
}
