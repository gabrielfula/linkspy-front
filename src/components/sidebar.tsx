"use client"

import { Link as LinkIcon, CheckIcon as LinkCheck, MapPinCheck } from "lucide-react"

import {
  Sidebar as SidebarMain,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLogout } from "@/queries/use-logout";
import { firstLetters } from "@/helpers/utils";
import { useEffect, useState } from "react";

export default function Sidebar() {

     const { mutate: logout } = useLogout();

     const [userName, setUserName] = useState<string>("");

     useEffect(() => {
          const name = localStorage.getItem("user_name");
          if (name) {
               setUserName(name);
          }
     }, []);

     return (
          <>
               <SidebarMain>
                    <SidebarHeader>
                         <SidebarMenu>
                              <SidebarMenuItem>
                                   <SidebarMenuButton size="lg" asChild>
                                        <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                  <button className="flex items-center gap-2 cursor-pointer">
                                                       <div className="flex aspect-square p-2 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                                            <p className="uppercase text-sm">{firstLetters(userName)}</p>
                                                       </div>
                                                       <div className="flex flex-col gap-0.5 leading-none text-left">
                                                            <span className="font-semibold">LinkSpy</span>
                                                            <span className="text-xs text-muted-foreground">Criação de Links Rastreáveis</span>
                                                       </div>
                                                  </button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                                                  <DropdownMenuItem onClick={() => logout()} className="text-sm">Sair da Conta</DropdownMenuItem>
                                             </DropdownMenuContent>
                                        </DropdownMenu>
                                   </SidebarMenuButton>
                              </SidebarMenuItem>
                         </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent>
                         <SidebarGroup>
                              <SidebarGroupLabel>Gerenciamento</SidebarGroupLabel>
                              <SidebarGroupContent>
                                   <SidebarMenu>
                                        <SidebarMenuItem>
                                             <SidebarMenuButton asChild isActive>
                                                  <Link href="/home">
                                                       <LinkIcon className="size-4" />
                                                       <span>Gerar URLs</span>
                                                  </Link>
                                             </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                             <SidebarMenuButton asChild>
                                                  <Link href="/tracking">
                                                       <MapPinCheck className="size-4" />
                                                       <span>Monitoramento</span>
                                                  </Link>
                                             </SidebarMenuButton>
                                        </SidebarMenuItem>
                                   </SidebarMenu>
                              </SidebarGroupContent>
                         </SidebarGroup>
                    </SidebarContent>
                    <SidebarRail />
               </SidebarMain>
          </>
     );
}