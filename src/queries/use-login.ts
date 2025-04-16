import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { LoginData } from '@/schemas/login/login.schema';
import { useRouter } from 'next/navigation';


const handleLogin = async (data: LoginData) => {
     const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     });

     const result = await res.json();

     if (!res.ok) throw new Error(result.message);
     return result;
};

export function useLogin() {
     const router = useRouter();

     return useMutation({
          mutationFn: async (data: LoginData) => await handleLogin(data),
          onSuccess: () => {
               toast.success("Login realizado com sucesso!");
               router.push("/home");
          },
          onError: (ex: any) => {
               toast.error(`${ex.message || "Erro desconhecido"}!`)
          }
     });
}