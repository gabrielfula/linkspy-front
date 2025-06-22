
import { fetchListUrl } from "@/queries/use-list-url";
import { Link as ILink } from "@/queries/use-recent-url";
import Link from "next/link";

export default async function ListGeneratedUrl() {
     const links = await fetchListUrl();

     return (
          <>
               {links && links.map((item: ILink) => (
                    <Link
                         href={`/home/tracking/${item.uuid}`}
                         key={item.uuid}
                         className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                         <div className="flex w-full items-center gap-2">
                              <span className="font-bold">{item.alias}</span>
                         </div>
                         <span className="truncate max-w-[260px] text-xs text-zinc-500">{item.original_link}</span>
                         <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                              {item.date}
                         </span>
                    </Link>
               ))}
          </>
     );
}