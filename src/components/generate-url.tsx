"use client"

import { useActionState, useEffect } from "react"

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { create } from "@/app/actions/create-link";
import { useQueryClient } from "@tanstack/react-query";


export default function GenerateUrl() {
     const [state, action] = useActionState(create, undefined);

     const queryClient = useQueryClient();

     useEffect(() => {
          if (state?.response === "success") {
               queryClient.invalidateQueries({ queryKey: ["recent-urls"] });
          }
     }, [state]);

     return (
          <>
              <form action={action} className="space-y-4">
                    <div className="space-y-2">
                         <div className="flex gap-2">
                              <Input
                                   id="old_url"
                                   placeholder="https://example.com/very/long/url/that/needs/shortening"
                                   name="old_url"
                                   className="flex-1 h-12 text-base"
                                   required
                              />
                              <Button type="submit" size="lg" className="h-12 px-6">
                                   Gerar
                              </Button>
                         </div>
                    </div>
               </form>
          </>
     );
}