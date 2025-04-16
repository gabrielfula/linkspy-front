'use client'

import { QueryClient, QueryClientProvider as QueryClientProviderContent } from '@tanstack/react-query';

export const queryClient = new QueryClient();


export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProviderContent client={queryClient}>
      {children}
    </QueryClientProviderContent>
  );
}
