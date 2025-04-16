'use client'

import { useGenerateUrl } from "@/queries/use-generate-url";
import { Button } from "./ui/button";
import { CreateUrlData, createUrlSchema } from "@/schemas/generate-url/generate-url";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "./input-text";


export default function GenerateUrl() {

     const { mutateAsync, isPending } = useGenerateUrl();

     const { control, handleSubmit, reset } = useForm<CreateUrlData>({
          resolver: zodResolver(createUrlSchema),
     });
      
     const handleCreateLink = async (data: CreateUrlData) => {
          reset();
          await mutateAsync(data);
     };

     return (
          <form onSubmit={handleSubmit(handleCreateLink)} className="space-y-4">
               <div className="space-y-2">
                    <div className="flex gap-2">
                         <TextInput
                              name="old_url"
                              control={control}
                              placeholder="https://exemplo.com/de/link/para/rastrear"
                              className="flex-1 h-12 text-base"
                              disabled={isPending}
                         />
                         <Button type="submit" size="lg" className="h-12 px-6 cursor-pointer" disabled={isPending}>
                              {isPending ? "Gerando..." : "Gerar"}
                         </Button>
                    </div>
               </div>
          </form>
     );
}