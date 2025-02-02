import {  useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/useAuth"

export const useFetchWorkspace =() =>{
   const { auth } = useAuth();
   const {isFetching,isSuccess,error,data} = useQuery({
      queryFn:()=>{
         fetchWorkspaceRequest({token:auth?.token});
      },
      queryKey:'fetchWorkspace',
      staleTime:30000,
   });
   return {
      isFetching,
      isSuccess,
      error,
      workspaces:data,
   }
}











// 