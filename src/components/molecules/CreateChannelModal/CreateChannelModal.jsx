import { Dialog, DialogHeader, DialogTitle ,DialogContent, DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal"
import { useState } from "react";

export const CreateChannelModal =() =>{
    const { openCreateChannelModal,setOpenCreateChannelModal } = useCreateChannelModal();
    const [ channelName,setChannelName] =useState();

    function handleClose(){
        setOpenCreateChannelModal(false);
    }
    function handleFormSubmit(e){
      e.preventDefault();
      console.log('form submitted succesfully');
    }
    return (
        <Dialog 
          open={openCreateChannelModal}
          onOpenChange={handleClose}
        >
           <DialogContent>
             <DialogHeader>
                <DialogTitle>
                    Create a channel 
                </DialogTitle>
                <form onSubmit={handleFormSubmit}>
                   <Input
                    value={channelName}
                    onChange={(e)=>setChannelName(e.target.value)}
                    minLength={3}
                    placeholder="Channel Name like team announcement"
                    required
                   />
                  <div
                   className="flex justify-end mt-4"
                  > 
                     Create channel
                  </div>
                </form>
             </DialogHeader>
           </DialogContent>
        </Dialog>
    )
}



// In a workspace there can be so many channel present
// This is a ui component 
// CreatingChannel is global state and making the global state 
// use the context api and there are three component of context api
// use , create and provide 
// register CreateChannelContextProvider in app Context provider for code clearity
// register CreateChannelModal in Modal so that trigger from any where 












