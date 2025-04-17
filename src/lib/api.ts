import { getCookie } from "@/helpers/utils";

export async function apiRequest(path: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: any) {
     const baseUrl     = process.env.API_BASE_URL || "http://localhost:4001";
     const fullUrl     = `${baseUrl}/v1/${path.replace(/^\/+/, "")}`;
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
          const result   = await response.json();

          if (!response.ok || result.success === false) {
               throw new Error(result.message || 'Erro desconhecido');
          }

          return result;
        } catch (error: any) {
          throw error;
     }
}