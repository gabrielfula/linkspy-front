"use client"

import { useEffect, useState } from "react"
import {
  LogOut,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { firstLetters } from "@/helpers/utils"
import { handleLogout as ServiceLogout } from "@/queries/use-logout"
import { useRouter } from "next/navigation"

export function NavUser() {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const [user, setUser] = useState<string | null>(null);

  const handleLogout = async () => {
    await ServiceLogout();

    router.push("/login");
  }

  useEffect(() => {
    const storedName = localStorage.getItem("user_name");
    if (storedName) {
      setUser(storedName);
    }
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="w-2 sm:w-8 data-[state=open]:bg-sidebar-accent flex justify-center !bg-black p-5 data-[state=open]:text-sidebar-accent-foreground md:h-8 md:p-0"
            >
              <div className="grid flex-1 text-center justify-center text-sm leading-tight">
                <span className="text-white">
                  {firstLetters(user ?? 'Usuário')}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {user ?? 'Usuário'}
                </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              <LogOut />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
