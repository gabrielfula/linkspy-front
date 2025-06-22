import { apiRequest } from '@/lib/api';

type Location = {
     longitude: number | null;
     latitude: number | null;
     state: string | null;
     city: string | null;
     street: string | null;
     cep?: string | null;
     neighborhood?: string | null;
};
   
type Link = {
     uuid: string;
     original_link: string;
     new_link: string;
     created_at: string;
     location: {
          last_location: Location;
          locations_history: Location[];
     };
};

export const fetchDetailsUrl = async (uuid: string): Promise<Link> => {
     const data = await apiRequest(`admin/url/details/${uuid}`, 'GET');
     return data.url;
};