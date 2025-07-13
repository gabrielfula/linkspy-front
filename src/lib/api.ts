'use server'

import { getServerCookies } from "./cookies";

export async function apiRequest(
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data?: any,
  extraOptions?: RequestInit & { next?: { tags?: string[]; revalidate?: number } }
) {
     const baseUrl                = process.env.NEXT_PUBLIC_API_BASE_URL;
     const fullUrl                = `${baseUrl}/${path.replace(/^\/+/, "")}`;
     const { token, accountCode } = await getServerCookies();

     const options: RequestInit & { next?: { tags?: string[]; revalidate?: number } } = {
          method,
          headers: {
               "Content-Type": "application/json",
               ...(accountCode ? { "X-Account-Code": accountCode } : {}),
               ...(token ? { Authorization: `Bearer ${token}` } : {})
          },
          ...(data && { body: JSON.stringify(data) }),
          ...extraOptions,
     };

     try {
          const response = await fetch(fullUrl, options);

          const result = await response.json();

          if (!response.ok || result.success === false) {
               throw new Error(result.message || 'Erro desconhecido');
          }

          return result;
     } catch (error: any) {
          throw error;
     }
}