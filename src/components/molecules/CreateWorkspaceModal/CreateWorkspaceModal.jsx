import { Dialog, DialogContent, DialogHeader, DialogTitle,DialogDescription } from "@/components/ui/dialog"
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { useCreateWorkspace } from "@/hooks/workspaces/useCreateWorkspace";
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

export const CreateWorkspaceModal =()=>{

    const queryClient = useQueryClient();

    const [workspaceName,setWorkspaceName]=useState('');

    const {isPending, createWorkspaceMutation} =useCreateWorkspace();

    const {openCreateWorkspaceModal, setOpenCreateWorkspaceModal} = useCreateWorkspaceModal();

    const navigate = useNavigate();

    function handleClose(){
        setOpenCreateWorkspaceModal(false);
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            const data = await createWorkspaceMutation({ name: workspaceName });
            console.log('Created the workspace', data);
            navigate(`/workspaces/${data._id}`);
            queryClient.invalidateQueries({ queryKey: ["fetchWorkspaces"] });

        } catch(error) {
            console.log('Not able to create a new workspace', error);
        } finally {
            setWorkspaceName('');
            setOpenCreateWorkspaceModal(false);
        }
    }

    return (
        <Dialog
            open={openCreateWorkspaceModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new workspace</DialogTitle>
                    <DialogDescription>This action cannot be undone. Are you sure?</DialogDescription>

                </DialogHeader>

                <form onSubmit={handleFormSubmit}>
                    <Input 
                        required
                        disabled={isPending}
                        minLength={3}
                        placeholder="Put the workspace name e.g. MyWorkspace, Dev Workspace etc .."
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                    />

                    <div className='flex justify-end mt-5'>
                       <Button type="submit" disabled={isPending}>Create workspace</Button>

                    </div>
                </form>
            </DialogContent>
            
        </Dialog>
    );
};  



// createWorkspaceModal







