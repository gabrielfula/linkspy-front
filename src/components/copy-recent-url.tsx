'use client'

import { LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type CopyRecentUrl = {
  uuid?: string;
  original_link: string;
  new_link: string;
};

export default function CopyRecentUrl({ original_link, new_link }: CopyRecentUrl) {
     const [isCopied, setIsCopied] = useState(false);

     const handleCopy = async () => {
          await navigator.clipboard.writeText(new_link);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
     };

     return (
          <div className="flex items-center justify-between rounded-md border p-3">
               <div className="grid gap-1">
                    <div className="font-medium text-sm truncate w-full">{new_link}</div>
                    <div className="text-sm text-muted-foreground truncate">
                         {original_link}
                    </div>
               </div>
               <Button onClick={handleCopy} variant="outline" size="sm" className="cursor-pointer">
                    {isCopied ? "Copiado!" : "Copiar"}
                    <LinkIcon className="size-4 ml-2" />
               </Button>
          </div>
     );
}
