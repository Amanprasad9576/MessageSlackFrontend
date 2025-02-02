import { useMutation } from "@tanstack/react-query"
import { useAuth } from "../context/useAuth"
import { createWorkspaceRequest } from "@/api/workspaces";


export const useCreateWorkspace = () =>{
   const { auth } = useAuth();

   const{isSuccess,isPending,error,mutateAsync:createWorkspaceMutation}= 
         useMutation({
            MutationFn:(data) =>createWorkspaceRequest({...data,token:auth?.token}),
         onSuccess:(data)=> {
              console.log(data);
         },
         onError:(error)=>{
              console.log('Failed to create workspace',error);
         }
    });
    return {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    };
}




// Calling the function createWorkspaceRequest and passing 
// user token to access










// 