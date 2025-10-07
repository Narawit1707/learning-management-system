import { SidebarProvider} from '@/components/ui/sidebar'
import AppSideBar from '@/app/workspace/_components/AppSideBar'
import AppHeader from '@/app/workspace/_components/AppHeader'
import React from 'react'

function WorkspaceProvider({ children }) {
  return (
    <SidebarProvider>
        <AppSideBar/>
            <div className='w-full'>
              <AppHeader/>
              {children}
            </div>
    </SidebarProvider>
  )
}

export default WorkspaceProvider