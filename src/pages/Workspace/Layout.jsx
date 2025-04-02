import { WorkspaceSidebar } from "@/components/organisms/Workspace/WorkspaceSidebar"
import { WorkspaceNavbar } from "@/components/organisms/Workspace/WorkspaceNavbar"
import { ResizableHandle,ResizablePanelGroup,ResizablePanel } from "@/components/ui/resizable"
import { WorkspacePanel } from "@/components/organisms/Workspace/WorkspacePanel"

export const WorkspaceLayout =({children})=>{
  return (
     <div className="h-[100vh]">
        <WorkspaceNavbar />
        <div className="flex h-[calc(100vh-40px)]">
          <WorkspaceSidebar/>

          <ResizablePanelGroup
             direction="horizontal"
             autoSaveId={'workspace-resize'}
          >
             <ResizablePanel 
               minSize={11}
               defaultSize={25}
               className="bg-slack-medium"
             >
                <WorkspacePanel/>

             </ResizablePanel>
             <ResizableHandle withHandle/>
             <ResizablePanel
               minSize={25}
              >
                 {children}
             </ResizablePanel>    
          </ResizablePanelGroup>

           {children}
        </div>
     </div>
   )
}