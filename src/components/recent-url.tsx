import { LinkIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function RecentUrl() {
     return (
          <>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-medium">URLs recentes geradas</h3>
                    <div className="space-y-3">
                         <div className="flex items-center justify-between rounded-md border p-3">
                              <div className="grid gap-1">
                                   <div className="font-medium">example.com/abc123</div>
                                   <div className="text-sm text-muted-foreground truncate">
                                        https://example.com/very/long/url/that/needs/track
                                   </div>
                              </div>
                              <Button variant="outline" size="sm" className="cursor-pointer">
                                   Copiar
                                   <LinkIcon className="size-4" />
                              </Button>
                         </div>
                         <div className="flex items-center justify-between rounded-md border p-3">
                              <div className="grid gap-1">
                                   <div className="font-medium">example.com/abc123</div>
                                   <div className="text-sm text-muted-foreground truncate">
                                        https:/example.com/very/long/url/that/needs/track
                                   </div>
                              </div>
                              <Button variant="outline" size="sm" className="cursor-pointer">
                                   Copiar
                                   <LinkIcon className="size-4" />
                              </Button>
                         </div>
                         <div className="flex items-center justify-between rounded-md border p-3">
                              <div className="grid gap-1">
                                   <div className="font-medium">example.com/abc123</div>
                                   <div className="text-sm text-muted-foreground truncate">
                                        https://example.com/very/long/url/that/needs/track
                                   </div>
                              </div>
                              <Button variant="outline" size="sm" className="cursor-pointer">
                                   Copiar
                                   <LinkIcon className="size-4" />
                              </Button>
                         </div>
                    </div>
               </div>
          </>
     );
}