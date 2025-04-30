import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { RegisterData } from '@/schemas/register/register.schema';


const handleRegister = async (data: RegisterData) => {
     const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     });

     const result = await res.json();

     if (!res.ok) throw new Error(result.message);
     return result;
};

export function useRegister() {
     const router = useRouter();

     return useMutation({
          mutationFn: async (data: RegisterData) => await handleRegister(data),
          onSuccess: () => {
               toast.success("Conta criada realizado com sucesso!");
               router.push("/login");
          },
          onError: (ex: any) => {
               toast.error(`${ex.message || "Erro desconhecido"}!`)
          }
     });
}