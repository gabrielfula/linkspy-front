
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

export default function Sidebar() {
     return (
          <>
               <SidebarMain>
                    <SidebarHeader>
                         <SidebarMenu>
                              <SidebarMenuItem>
                                   <SidebarMenuButton size="lg">
                                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                             <LinkIcon className="size-4" />
                                        </div>
                                        <div className="flex flex-col gap-0.5 leading-none">
                                             <span className="font-semibold">LinkSpy</span>
                                             <span className="text-xs text-muted-foreground">Criação de Links Rastreáveis</span>
                                        </div>
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
                                                       <LinkCheck className="size-4" />
                                                       <span>Gerar URLs</span>
                                                  </Link>
                                             </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                             <SidebarMenuButton asChild>
                                                  <Link href="/home">
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