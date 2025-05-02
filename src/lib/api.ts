import { getCookie } from "@/helpers/utils";

export async function apiRequest(path: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: any) {
     const baseUrl     = process.env.NEXT_PUBLIC_API_BASE_URL;
     const fullUrl     = `${baseUrl}/${path.replace(/^\/+/, "")}`;
     const accountCode = getCookie("account_code");
     const token       = getCookie("token");

     const options: RequestInit = {
          method,
          headers: {
               "Content-Type": "application/json",
               ...(accountCode ? { "X-Account-Code": accountCode } : {}),
               ...(token ? { Authorization: `Bearer ${token}` } : {})
          },
          ...(data && { body: JSON.stringify(data) }),
     };
   
     try {
          const response = await fetch(fullUrl, options);

          if (response.status === 401) {
               localStorage.removeItem("user_name");
          
               document.cookie = "account_code=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
               document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          
               window.location.href = "/login";
               return;
          }

          const result = await response.json();

          if (!response.ok || result.success === false) {
               throw new Error(result.message || 'Erro desconhecido');
          }

          return result;
        } catch (error: any) {
          throw error;
     }
}