import { SidebarProvider , SidebarTrigger } from "/components/ui/sidebar"
import React from 'react'

function WorkspaceProvider({ children }) {
  return (
    <SidebarProvider>
        <AppSideBar />
        <SidebarTrigger />
    <div>{children}</div>
   </SidebarProvider>
  )
}

export default WorkspaceProvider