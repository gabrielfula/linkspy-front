"use client"

import { useListUrl } from "@/queries/use-list-url";
import Link from "next/link";

export default function ListGeneratedUrl() {
     const { data: links } = useListUrl();

     return (
          <>
               {links && links.map((item) => (
                    <Link
                         href={`/tracking/${item.uuid}`}
                         key={item.uuid}
                         className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                         <div className="flex w-full items-center gap-2">
                              <span className="font-bold">{item.alias}</span>
                         </div>
                         <span className="truncate max-w-[260px] text-xs text-zinc-500">{item.original_link}</span>
                         <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                              Yesterday
                         </span>
                    </Link>
               ))}
          </>
     );
}