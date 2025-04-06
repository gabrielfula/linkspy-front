export async function apiRequest(path: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: any) {
     const baseUrl = process.env.API_BASE_URL || "http://localhost:4001";
     const fullUrl = `${baseUrl}/v1/${path.replace(/^\/+/, "")}`;
   
     const options: RequestInit = {
          method,
          headers: {
               "Content-Type": "application/json",
          },
          ...(data && { body: JSON.stringify(data) }),
     };
   
     const response = await fetch(fullUrl, options);
   
     if (!response.ok) {
       throw new Error(`Erro na requisição: ${response.status}`);
     }
   
     return response.json();
}