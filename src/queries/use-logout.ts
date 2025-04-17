import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const handleLogout = async () => {
     const res = await fetch('/api/logout', {
          method: 'POST',
     });

     const result = await res.json();

     if (!res.ok) throw new Error(result.message);
     return result;
};

export function useLogout() {
     const router = useRouter();

     return useMutation({
          mutationFn: handleLogout,
          onSuccess: () => {
               localStorage.removeItem('user_name');

               toast.success("Logout realizado com sucesso!");
               router.push("/login");
          },
          onError: (ex: any) => {
               toast.error(`${ex.message || "Erro desconhecido"}!`)
          }
     });
}
