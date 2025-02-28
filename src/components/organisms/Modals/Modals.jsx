import { WorkspacePreferencesModal } from '@/components/molecules/Workspace/WorkspacePreferencesModal';
import { CreateWorkspaceModal } from '@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal';
import { CreateChannelModal } from '@/components/molecules/CreateChannelModal/CreateChannelModal';


export const Modals = () => {
    return (
        <> 
             <CreateWorkspaceModal />   
            < WorkspacePreferencesModal/>  
             <CreateChannelModal/>
        </>
    );
};
