'use client'

import { Button } from "./ui/button";
import { CreateUrlData, createUrlSchema } from "@/schemas/generate-url/generate-url";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "./input-text";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import { generateUrl } from "@/queries/use-generate-url";


export default function GenerateUrl() {

     const [isOpen, setIsOpen] = useState<boolean>(false);

     const { control, handleSubmit, trigger, reset } = useForm<CreateUrlData>({
          resolver: zodResolver(createUrlSchema),
     });
      
     const handleOpenModal = async () => {
          const isValid = await trigger("old_url");
          if (isValid) {
               reset((prev) => ({ ...prev, alias: "" }));
               setIsOpen(true);
          }
     };

     const handleCreateLink = async (data: CreateUrlData) => {
          reset({ old_url: "", alias: "" });
          await generateUrl(data);
          setIsOpen(false);
     };

     return (
          <form className="space-y-4">
               <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="w-[90%] md:max-w-md md:w-full md:ml-32 md:p-5">
                         <DialogHeader>
                              <DialogTitle className="text-center mb-4 md:text-base text-sm">Informe o motivo do link gerado</DialogTitle>
                              <TextInput
                                   name="alias"
                                   control={control}
                                   placeholder="ex: Um conhecido está perdido"
                                   className="h-10"
                                   // disabled={isPending}
                              />
                              <Button type="button" onClick={handleSubmit(handleCreateLink)} size="lg" className="h-12 px-6 cursor-pointer" >
                                   {/* {isPending ? "Gerando..." : "Gerar"} */}
                                   Gerar
                              </Button>
                         </DialogHeader>
                    </DialogContent>
               </Dialog>
               <div className="space-y-2">
                    <div className="flex gap-2">
                         <TextInput
                              name="old_url"
                              control={control}
                              placeholder="https://exemplo.com/de/link/para/rastrear"
                              className="flex-1 h-12 text-base"
                              // disabled={isPending}
                         />
                         <Button type="button" onClick={handleOpenModal} size="lg" className="h-12 px-6 cursor-pointer">
                              {/* {isPending ? "Gerando..." : "Gerar"} */}
                              Gerar
                         </Button>
                    </div>
               </div>
          </form>
     );
}