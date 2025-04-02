import { UserButton } from "@/components/atoms/UserButton/UserButton"
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useEffect } from "react";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { useNavigate } from "react-router-dom";

export const Home = () =>{
    const { isFetching, workspaces } = useFetchWorkspace();

    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    const navigate = useNavigate();
  
    useEffect(() => {

        if(isFetching) return;

        console.log('Workspaces downloaded is', workspaces);

        if(workspaces.length === 0 || !workspaces) {
            console.log('No workspaces found, creating one');
            setOpenCreateWorkspaceModal(true);

        } else {
            navigate(`/workspaces/${workspaces[0]._id}`);
        }

    }, [isFetching, workspaces, navigate]);

    
    return (
        <div>
           <h1 className= ' text-black '> Home</h1>
             <div className=' size-12'>
                 <UserButton/>

             </div>
        </div>
    )
}



// protectedRoute -- for the routing path
// function isAuthenticated -- for checking the user token 
//
