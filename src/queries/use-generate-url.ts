import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/api';
import { queryClient } from '@/providers/react-query';
import { toast } from 'sonner';
import { CreateUrlData } from '@/schemas/generate-url/generate-url';


const generateUrl = async (data: CreateUrlData) => {
     const response = await apiRequest("admin/url", "POST", {
          alias: data.alias,
          old_url: data.old_url,
     });

     return response;
};

export function useGenerateUrl() {
     return useMutation({
          mutationFn: async (data: CreateUrlData) => await generateUrl(data),
          onSuccess: () => {
               queryClient.invalidateQueries({ queryKey: ['list-urls'] });
               queryClient.invalidateQueries({ queryKey: ['recent-urls'] });

               toast.success("Link gerado com sucesso!");
          },
          onError: (ex: any) => {
               toast.error(`${ex.message || "Erro desconhecido"}!`)
          }
     });
}