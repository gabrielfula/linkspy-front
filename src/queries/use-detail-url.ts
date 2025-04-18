import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/api';

type Link = {
  uuid: string;
  original_link: string;
  new_link: string;
  created_at: string;
};

const fetchDetailsUrl = async (uuid: string): Promise<Link> => {
     const data = await apiRequest(`admin/url/details/${uuid}`, "GET");
     return data.url;
};

export function useDetailsUrl(uuid: string) {
     return useQuery({
          queryKey: ['list-urls', uuid],
          queryFn: () => fetchDetailsUrl(uuid),
          staleTime: 1000 * 60 * 5,
          enabled: !!uuid,
     });
}
