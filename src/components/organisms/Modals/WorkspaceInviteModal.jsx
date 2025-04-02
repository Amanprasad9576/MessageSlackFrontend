import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CopyIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RefreshCcwIcon } from "lucide-react";
import { useResetJoinCode } from "@/hooks/apis/workspaces/useResetJoinCode";

export const WorkspaceInviteModal =({workspaceName,joinCode,openInviteModal,setOpenInviteModal,workspaceId})=>{

    const { toast }= useToast();
    const { resetJoinCodeMutation } = useResetJoinCode({workspaceId});

    async function handleCopy() {
        const inviteLink = `${joinCode}`;
        await navigator.clipboard.writeText(inviteLink);
        toast({
            title: 'Link copied to clipboard',
            type: 'success'
        });
    }

    async function handleResetCode() {
        try {
            await resetJoinCodeMutation();
        toast({
            title: 'Join code reset successfully',
            type: 'success'
        });

        } catch(error) {
           console.log('Error in resetting join code', error); 
        }
    }


    return (
      <Dialog 
          open={openInviteModal}
          onOpenChange={setOpenInviteModal}
      >
        <DialogContent>
            <DialogHeader>
               <DialogDescription>
                  <DialogTitle>
                     Invite user to {workspaceName} 
                  </DialogTitle> 
                  Use the code below to invite the user to workspace
               </DialogDescription>
            </DialogHeader>
             <div
                className="flex flex-col items-center justify-center px-4 "
             >
             <p 
                className="font-bold text-4xl uppercase"
              >
                {joinCode}
             </p>
             <Button 
                size='sm'
                variant='ghost'
                onClick={handleCopy}
             >
               Copy Code 
               <CopyIcon className="size=sm ml-2 "/>
             </Button>
             </div>
             <a
                href={`/workspaces/join/${workspaceId}`}
                target="_blank"
                rel="noreferrer"
                className='text-blue-500'
            >
                Redirect to join page
            </a>
            <div
                    className='flex items-center justify-center w-full'
                >
                    <Button variant="outline" onClick={handleResetCode}>
                        Reset Join Code
                        <RefreshCcwIcon className='size-4 ml-2' />
                    </Button>
                </div>

        </DialogContent>
     </Dialog>
    )
}


// ui component
// 