"use server"

import { apiRequest } from '@/lib/api';
import { CreateUrlData } from '@/schemas/generate-url/generate-url';
import { revalidateTag } from 'next/cache';


export const generateUrl = async (data: CreateUrlData) => {
     const response = await apiRequest('admin/url', 'POST', {
          alias: data.alias,
          old_url: data.old_url,
     });

     revalidateTag('generate-url');

     return response;
};