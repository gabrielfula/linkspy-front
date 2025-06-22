"use client"

import { Link } from "@/queries/use-recent-url";
import CopyRecentUrl from "./copy-recent-url";

interface RecentUrlProps {
  url: Link[];
}

export default function RecentUrl({ url }: RecentUrlProps) {
     return (
          <>
               <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-medium">URLs recentes geradas</h3>
                    {/* {isLoading && <p>Carregando...</p>} */}
                    <div className="space-y-3">
                         {url && url.length > 0 ? (
                              url.map((item: Link) => (
                                   <CopyRecentUrl
                                        key={item.uuid}
                                        new_link={item.new_link}
                                        original_link={item.original_link}
                                   />
                              ))
                              ) : (
                                   <p className="mt-4 text-sm">Nenhuma URL gerada</p>
                              )
                         }
                    </div>
               </div>
          </>
     );
}