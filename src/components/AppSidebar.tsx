import { File, Activity, ChevronDown } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom";
import WIFI from "../assets/images/wifi.png"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
// Menu items.
const groupedItems = [
  {
    label: "Sensor DHT11",
    items: [
      { title: "Monitoreo", url: "/sensor-1/monitoreo", icon: Activity },
      { title: "Exportar ", url: "/sensor-1/export", icon: File },
    ],
  },
  {
    label: "Sensor UV",
    items: [
      { title: "Monitoreo", url: "/sensor-2/monitoreo", icon: Activity },
      { title: "Exportar ", url: "/sensor-2/export", icon: File },
    ],
  },
  {
    label: "Sensor MQ117",
    items: [
      { title: "Monitoreo", url: "/sensor-3/monitoreo", icon: Activity },
      { title: "Exportar", url: "/sensor-3/export", icon: File },
    ],
  },
  {
    label: "Sensor 4",
    items: [
      { title: "Monitoreo", url: "/sensor-4/monitoreo", icon: Activity },
      { title: "Exportar ", url: "/sensor-4/export", icon: File },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="h-[100px] w-full m-auto">
            <img className="h-full w-full object-contain " src={WIFI} alt="WiFi Icon" />
          </div>
          <SidebarGroupLabel>Panel Administrativo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton className="p-0">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `flex gap-2 w-full h-full p-1 px-2 ${isActive ? "font-bold" : ""
                    }`}
                >
                  Inicio
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenu>
            {groupedItems.map((item, index) => (
              <SidebarMenu key={index}>
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="flex justify-between items-center">
                        {item.label}
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />

                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((data, index) => (
                          <SidebarMenuSubItem key={index}>
                            <SidebarMenuButton className="p-0">
                              <NavLink
                                to={data.url}
                                className={({ isActive }) =>
                                  `flex gap-2 w-full h-full p-1 px-3 ${isActive ? "font-bold" : ""
                                  }`}
                              >
                                <data.icon className="w-5 h-5" />
                                {data.title}
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
