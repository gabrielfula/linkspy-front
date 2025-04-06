'use server';

import { apiRequest } from "@/lib/api";

export async function create(prevData: any, data: FormData) {
     const url = data.get("old_url");

     if (!url) {
          return {
               response: "error",
          };
     }

     try {
          const json = await apiRequest("admin/url", "POST", { old_url: url });

          return {
               response: "success",
               data: json,
          };
     } catch (error) {
          return {
               response: "error",
               message: (error as Error).message,
          };
     }
}
