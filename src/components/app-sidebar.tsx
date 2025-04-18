"use client"

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
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { data } from "@/mocks/list-generated.mocks"
import ListGeneratedUrl from "./list-generated-url"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
     <Sidebar
          collapsible="icon"
          className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
          {...props}
     >
          <Sidebar
               collapsible="none"
               className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
          >
               <SidebarHeader>
                    <SidebarMenu>
                         <SidebarMenuItem>
                              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                                   <a href="#">
                                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                             <Command className="size-4" />
                                        </div>
                                        {/* <div className="grid flex-1 text-left text-sm leading-tight">
                                             <span className="truncate font-semibold">Acme Inc</span>
                                             <span className="truncate text-xs">Enterprise</span>
                                        </div> */}
                                   </a>
                              </SidebarMenuButton>
                         </SidebarMenuItem>
                    </SidebarMenu>
               </SidebarHeader>
               <SidebarFooter className="flex items-end h-full justify-end">
                    <NavUser />
               </SidebarFooter>
          </Sidebar>
          <Sidebar collapsible="none" className="hidden flex-1 md:flex">
               <SidebarHeader className="gap-3.5 border-b p-4">
                    <div className="flex w-full items-center justify-between">
                         <div className="text-base font-medium text-foreground">
                              Links
                         </div>
                    </div>
                    <SidebarInput placeholder="Type to search..." />
               </SidebarHeader>
               <SidebarContent>
                    <SidebarGroup className="px-0">
                         <SidebarGroupContent>
                              <ListGeneratedUrl />
                         </SidebarGroupContent>
                    </SidebarGroup>
               </SidebarContent>
          </Sidebar>
     </Sidebar>
  )
}
