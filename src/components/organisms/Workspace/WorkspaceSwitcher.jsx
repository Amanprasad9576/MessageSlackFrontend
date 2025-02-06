import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useFetchWorkspace } from "@/hooks/workspaces/useFetchWorkspace";
import { useGetWorkspaceByIds } from "@/hooks/workspaces/useGetWorkspaceById";
import { Loader } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom"

export const WorkspaceSwitcher = ()=>{
   
    const navigate = useNavigate();

    const { workspaceId } = useParams();
  //  console.log('workspaceId',workspace);
    const { isFetching,workspace} = useGetWorkspaceByIds(workspaceId);

    const { workspaces ,isFetching:isFetchingWorkspace } = useFetchWorkspace();
    // getting the current workspace name
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button
               className='bg-[#ABABAD] hover:bg-[#ABABAD]/40 size-9 font-bold text-slate-800 text-xl' 
            >
             {isFetching ? (<Loader className='size-5 animate-spin'/>):workspace?.name.charAt(0).toUpperCase()}

             </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    className='cursor-pointer flex-col justify-start items-start'
                >
                    {workspace?.name}
                    <span className='text-xs text-muted-foregorund'>
                        (Active Workspace)
                    </span>
                </DropdownMenuItem>
                {isFetchingWorkspace ? ( <Loader className='size-5 animate-spin' /> ) : 
                    workspaces?.map((workspace) => {
                        if(workspace._id === workspaceId) {
                            return null;
                        }
                        return (
                            <DropdownMenuItem
                                className='cursor-pointer flex-col justify-start items-start'
                                onClick={() => navigate(`/workspaces/${workspace._id}`)}
                                key={workspace._id}
                            >
                                <p
                                    className='truncate'
                                >{workspace?.name}</p>
                            </DropdownMenuItem>
                        );
                    }
                        
                    )
                }

            </DropdownMenuContent>
        </DropdownMenu>
    );
};







// fetching  all name of the workspace 
// Dropdown menu also 
// 