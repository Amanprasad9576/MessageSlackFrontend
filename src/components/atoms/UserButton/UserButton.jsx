import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Avatar,AvatarFallback,AvatarImage } from "@radix-ui/react-avatar"
import { useAuth } from "@/hooks/context/useAuth"
import { SettingsIcon,LogOutIcon,PencilIcon } from "lucide-react"
import {  useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';

export const UserButton = () =>{
    const navigate = useNavigate();
    const { auth, logout } = useAuth();
    const { toast } = useToast();

    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
    
    console.log(setOpenCreateWorkspaceModal);
    function openWorkspaceCreateModal() {
       setOpenCreateWorkspaceModal(true);
    }
    
     async function handleLogout(){
          await logout();
          toast({
                message:'user logout successfully',
                type:'success',
            });
         navigate('/auth/signin');
     }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={auth?.user?.avatar}/>
                    <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={openWorkspaceCreateModal}>
                    <PencilIcon className='size-4 mr-2 h-10' />
                    Create Workspace
                </DropdownMenuItem>     
    
                <DropdownMenuItem>
                  <SettingsIcon className='size-4 mr-2 h-10' />
                      Settings
                </DropdownMenuItem>
               <DropdownMenuItem onClick={handleLogout}>
                    <LogOutIcon className='size-4 mr-2 h-10' />
                    Logout
                </DropdownMenuItem>  
            </DropdownMenuContent>
        </DropdownMenu>
    )
}












//  feature of a Button 
// showing the avatar of user 
// avatar comes from the user of signin
// 