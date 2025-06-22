import * as React from "react"
import { Command } from "lucide-react"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import ListGeneratedUrl from "./list-generated-url"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
     <Sidebar
          collapsible="icon"
          className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
          {...props}
     >
          <Sidebar
               className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r flex flex-col justify-between"
          >
               <SidebarHeader>
                    <SidebarMenu>
                         <SidebarMenuItem>
                              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                                   <a href="/home">
                                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                             <Command className="size-4" />
                                        </div>
                                   </a>
                              </SidebarMenuButton>
                         </SidebarMenuItem>
                    </SidebarMenu>
               </SidebarHeader>
          </Sidebar>
          <Sidebar>
               <SidebarHeader className="gap-3.5 border-b p-4 mt-[7px]">
                    <SidebarMenu>
                         <div className="flex w-full items-center justify-between">
                              <div className="text-base font-medium text-foreground">
                                   Links
                              </div>
                         </div>
                    </SidebarMenu>
               {/* <SidebarInput placeholder="Digite para buscar..." /> */}
               </SidebarHeader>
               <SidebarContent>
                    <SidebarGroup>
                         <SidebarGroupContent>
                              <ListGeneratedUrl />
                         </SidebarGroupContent>
                    </SidebarGroup>
               </SidebarContent>
               <SidebarFooter className="flex justify-center">
                    <NavUser />
               </SidebarFooter>
          </Sidebar>
     </Sidebar>
  )
}
