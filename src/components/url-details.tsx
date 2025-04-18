"use client"

import { copyToClipboard, formatDate } from "@/helpers/utils";
import { Calendar, Copy, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import { ITrackDetailsProps } from "./track-details";

export default function UrlDetails({ trackInfo }: ITrackDetailsProps) {
     return (
          <>
               <CardContent className="space-y-4">
                    <div>
                         <h3 className="text-sm font-medium text-muted-foreground mb-1">Link Original</h3>
                         <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                              <p className="text-sm truncate mr-2">{trackInfo?.originalUrl}</p>
                              <div className="flex-shrink-0">
                                   <Button variant="ghost" size="icon" onClick={() => copyToClipboard(trackInfo?.originalUrl as string)}>
                                        <Copy className="h-4 w-4" />
                                   </Button>
                                   <Button variant="ghost" size="icon" onClick={() => window.open(trackInfo?.originalUrl, "_blank")}>
                                        <ExternalLink className="h-4 w-4" />
                                   </Button>
                              </div>
                         </div>
                    </div>

                    <div>
                         <h3 className="text-sm font-medium text-muted-foreground mb-1">Link Rastreável</h3>
                         <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                              <p className="text-sm truncate mr-2">{trackInfo?.trackingUrl}</p>
                              <div className="flex-shrink-0">
                                   <Button variant="ghost" size="icon" onClick={() => copyToClipboard(trackInfo?.trackingUrl as string)}>
                                        <Copy className="h-4 w-4" />
                                   </Button>
                              </div>
                         </div>
                    </div>

                    <div className="flex items-center">
                         <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                         <span className="text-sm">Criado em: {formatDate(trackInfo?.created_at as string)}</span>
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