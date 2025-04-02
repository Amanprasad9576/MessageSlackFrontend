import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizonalIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { SideBarItem } from '@/components/atoms/SideBarItem/SideBarItem';
import { WorkspacePanelHeader } from '@/components/molecules/Workspace/WorkspacePanelHeader';
import { WorkspacePanelSection } from '@/components/molecules/Workspace/WorkspacePanelSection';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useGetWorkspaceByIds } from '@/hooks/apis/workspaces/useGetWorkspaceById';
import { UserItem } from '@/components/atoms/UserItem/UserItem';

export const WorkspacePanel = () => {

    const { workspaceId } = useParams();

    const { setOpenCreateChannelModal,openCreateChannelModal } = useCreateChannelModal();
    const { workspace, isFetching, isSuccess } = useGetWorkspaceByIds(workspaceId);
    console.log("Modal Open State:", openCreateChannelModal);
    console.log("Modal close State:", setOpenCreateChannelModal);

    if(isFetching) {

        return (
            <div
                className='flex flex-col gap-y-2 h-full items-center justify-center text-white'
            >
                <Loader className='animate-spin size-6 text-white' />
            </div>
        );
    }

    if(!isSuccess) {
        return (
            <div
                className='flex flex-col gap-y-2 h-full items-center justify-center text-white'
            >
                <AlertTriangleIcon className='size-6 text-white' />
                Something went wrong
            </div>
        );
    }

    return (
        <div
            className="flex flex-col h-full bg-slack-medium"
        >
            <WorkspacePanelHeader workspace={workspace} />

            <div
                className='flex flex-col px-2 mt-3'
            >
                <SideBarItem 
                    label="Threads"
                    icon={MessageSquareTextIcon}
                    id="threads"
                    variant='active'
                />
                <SideBarItem 
                    label="Drafts & Sends"
                    icon={SendHorizonalIcon}
                    id="drafts"
                    variant='default'
                />
            </div>

            <WorkspacePanelSection
                label={'Channels'}
                onIconClick={() => {
                   console.log("PlusIcon clicked!"); // Debugging
                   setOpenCreateChannelModal(true);
                 //  console.log("Update Modal State:", setOpenCreateChannelModal);
                }}
             
            >
               
                {workspace?.channels?.map((channel) => {
                    return <SideBarItem key={channel._id} icon={HashIcon} label={channel.name} id={channel._id} />;
                })}
            </WorkspacePanelSection>

            <WorkspacePanelSection
              label = "Direct messages"
              onIconClick={()=>{}}
            >
                {workspace?.members?.map((item)=>{
                    return <UserItem key={item.memberId._id}  label={item.memberId.username} id={item.memberId._id} image={item.memberId.avatar}/>; //id ,label ,image, variant
                })}

            </WorkspacePanelSection>
           
        </div>
    );
};
// member and userItem

//fetch the channel name by using the workspace


// while clicking on the create channel button 
// An api goes to backend 
// detroyed the cache data and refetch it 




