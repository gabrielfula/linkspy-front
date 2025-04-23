"use client"

import { useEffect, useState } from "react"
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { firstLetters } from "@/helpers/utils"
import { useLogout } from "@/queries/use-logout"

export function NavUser() {
  const { isMobile } = useSidebar()

  const [user, setUser] = useState<string | null>(null);
  const { mutateAsync } = useLogout();

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
              {/* <ChevronsUpDown className="ml-auto size-4" /> */}
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
            <DropdownMenuItem className="cursor-pointer" onClick={() => mutateAsync()}>
              <LogOut />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
