import { Dialog, DialogHeader, DialogTitle ,DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { useAddChannelToWorkspace } from "@/hooks/apis/workspaces/useAddChannelToWorkspace";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export const CreateChannelModal = () => {

    const { toast } = useToast();

    
    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();

    const [channelName, setChannelName] = useState('');

    const { addChannelToWorkspaceMutation } = useAddChannelToWorkspace();

    const {currentWorkspace} = useCurrentWorkspace();

    function handleClose() {
        setOpenCreateChannelModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        await addChannelToWorkspaceMutation({
            workspaceId: currentWorkspace?._id,
            channelName: channelName
        });

        toast({
            type: 'success',
            title: 'Channel created successfully'
        });

        //queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`);

        handleClose();
    }

    return (
        <Dialog
            open={openCreateChannelModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a channel</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleFormSubmit}>
                    <Input 
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        minLength={3}
                        placeholder="Channel Name e.g. team-announcements"
                        required
                    />

                    <div className='flex justify-end mt-4'>
                        <Button>
                            Create Channel
                        </Button>
                    </div>
                </form>
            </DialogContent>
            
        </Dialog>
    );
};
    
   


// In a workspace there can be so many channel present
// This is a ui component 
// CreatingChannel is global state and making the global state 
// use the context api and there are three component of context api
// use , create and provide 
// register CreateChannelContextProvider in app Context provider for code clearity
// register CreateChannelModal in Modal so that trigger from any where 












