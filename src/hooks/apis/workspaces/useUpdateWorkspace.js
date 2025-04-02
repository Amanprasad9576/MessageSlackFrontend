import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";
import { updateWorkspaceRequest } from "@/api/workspaces";

export const useUpdateWorkspace =()=>{

    const { auth } = useAuth();

    const { isSuccess,isPending,error,mutateAsync:updateWorkspaceMutation  } = useMutation({
        mutationFn:(name) => updateWorkspaceRequest({workspaceId,name,token:auth?.token}),
        onSuccess:(name)=>{
           console.log('Update workspace successfully',name);
        },
        onError:(error) =>{
          console.log('Error in updating the workspace',error);
        }
    });

    return {
      isSuccess,
      isPending,
      error,
      updateWorkspaceMutation
    };
};



// useUpdateWorkspace uses the updateWorkspaceRequest 