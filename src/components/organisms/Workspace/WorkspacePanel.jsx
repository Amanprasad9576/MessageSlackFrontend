import {  SideBarItem } from "@/components/atoms/SideBarItem/SideBarItem";
import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader";
import { WorkspacePanelSection } from "@/components/molecules/Workspace/WorkspacePanelSection";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { useGetWorkspaceByIds } from "@/hooks/workspaces/useGetWorkspaceById";
import { Loader, MessageSquareTextIcon,HashIcon, SendHorizonalIcon } from "lucide-react";
import { useParams } from "react-router-dom"

export const WorkspacePanel =()=>{

    const {workspaceId} = useParams();
    const { setOpenCreateChannelModal } = useCreateChannelModal();
    const {isFeetching, isSuccess,workspace} =useGetWorkspaceByIds(workspaceId);
      console.log('workspacePanel',workspace);

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
           <div
              className="flex flex-col px-2 mt-4"
           >
           <SideBarItem
              label='threads'
              icon={MessageSquareTextIcon}
              id='thread'
              variant='active'
           />
             <SideBarItem
              label='Draft & send'
              icon={SendHorizonalIcon}
              id='draft'
              variant='default'
           />
           </div>
            <WorkspacePanelSection 
                label='channel'
                onIconClick={()=>setOpenCreateChannelModal(true)}
            >
              {workspace?.channels?.map((channel)=>{
                  return <SideBarItem key={channel._id} icon={HashIcon} label={channel.name}  id={channel.name}/>
             })}
            </WorkspacePanelSection>
       </div>
      
    )
}


//fetch the channel name by using the workspace


// while clicking on the create channel button 
// An api goes to backend 
// detroyed the cache data and refetch it 




