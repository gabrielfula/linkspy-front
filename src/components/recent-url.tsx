"use client"

import { useRecentUrls } from "@/queries/use-recent-url";
import CopyRecentUrl from "./copy-recent-url";

export default function RecentUrl() {

     const { data: url, isLoading } = useRecentUrls();

     return (
          <>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-medium">URLs recentes geradas</h3>
                    {isLoading && <p>Carregando...</p>}
                    <div className="space-y-3">
                         {url && url.map((item) => {
                              return (
                                   <CopyRecentUrl
                                        key={item.uuid}
                                        new_link={item.new_link} 
                                        original_link={item.original_link} 
                                   />
                              )
                         })}
                    </div>
               </div>
          </>
     );
}