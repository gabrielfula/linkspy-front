import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
     return (
          <>
               <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <h1 className="text-xl font-semibold">LinkSpy</h1>
               </header>
          </>
     );
}