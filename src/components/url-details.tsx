"use client"

import { copyToClipboard, formatDate } from "@/helpers/utils";
import { Calendar, Copy, ExternalLink } from "lucide-react";
import { CardContent } from "./ui/card";
import { useDetailsUrl } from "@/queries/use-detail-url";
import { Button } from "./ui/button";

type UrlDetailsProps = {
     uuid: string;
};
   
export default function UrlDetails({ uuid }: UrlDetailsProps) {

     const { data } = useDetailsUrl(uuid);

     return (
          <>
               <CardContent className="space-y-4">
                    <div>
                         <h3 className="text-sm font-medium text-muted-foreground mb-1">Link Original</h3>
                         <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                              <p className="text-sm truncate mr-2">{data?.original_link}</p>
                              <div className="flex-shrink-0">
                                   <Button variant="ghost" size="icon" onClick={() => copyToClipboard(data?.original_link as string)}>
                                        <Copy className="h-4 w-4" />
                                   </Button>
                                   <Button variant="ghost" size="icon" onClick={() => window.open(data?.original_link, "_blank")}>
                                        <ExternalLink className="h-4 w-4" />
                                   </Button>
                              </div>
                         </div>
                    </div>

                    <div>
                         <h3 className="text-sm font-medium text-muted-foreground mb-1">Link Rastreável</h3>
                         <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                              <p className="text-sm truncate mr-2">{data?.new_link}</p>
                              <div className="flex-shrink-0">
                                   <Button variant="ghost" size="icon" onClick={() => copyToClipboard(data?.new_link as string)}>
                                        <Copy className="h-4 w-4" />
                                   </Button>
                              </div>
                         </div>
                    </div>

                    <div className="flex items-center">
                         <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                         <span className="text-sm">Criado em: {formatDate(data?.created_at as string)}</span>
                    </div>

                    <div className="flex items-center">
                    {/* <Badge variant="outline" className="mr-2">
                         {trackInfo?.clicks} cliques
                    </Badge>
                    <Badge variant="secondary">Ativo</Badge> */}
                    </div>
               </CardContent>
          </>
     );
}