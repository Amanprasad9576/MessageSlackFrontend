import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader";
import { useGetWorkspaceByIds } from "@/hooks/workspaces/useGetWorkspaceById";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom"

export const WorkspacePanel =()=>{

    const {workspaceId} = useParams();

    const {isFeetching, isSuccess,workspace} =useGetWorkspaceByIds(workspaceId);

    if(isFeetching){
        return (
            <div>
                <Loader className='animate-spin size-5'/>
            </div>
        )
    }
    if(!isSuccess)
        return (
            <div>
                <Loader className='animate-spin size-5'/>
                Something Wrong
            </div>
        )
    
    return (
       <div>
           <WorkspacePanelHeader workspace={workspace}/>
       </div>
    )
}







