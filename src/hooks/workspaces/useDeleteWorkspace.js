import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/useAuth"
import { deleteWorkspaceRequest } from "@/api/workspaces";


export const useDeleteWorkspace=(workspaceId)=>{
   const { auth } = useAuth();

   const { error,isSuccess,isPending,mutateAsync:deleteWorkspaceMutation} = useMutation({
    
     mutationFn:()=>deleteWorkspaceRequest({workspaceId,token:auth?.token}),
     onSuccess:()=>{
         console.log('Delete workspace successfully');
     },
     onError:(error)=>{
         console.log("Error in delete workspace",error);
     }
   })
   return {
    error,
    deleteWorkspaceMutation,
    isSuccess,
    isPending
   }
}
















// useMutation for Delete the workspace by calling the deleteWorkspaceRequest
// 