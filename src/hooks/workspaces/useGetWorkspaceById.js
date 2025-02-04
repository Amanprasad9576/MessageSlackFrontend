import { useQuery } from "@tanstack/react-query"
import { fetchWorkspaceDetailRequest } from "@/api/workspaces";
import { useAuth } from "../context/useAuth";

export const useGetWorkspaceById = ()=>{
    const {auth}=useAuth
    const {isFetching,isSuccess,error,data:workspace} = useQuery({
        queryFn:()=>fetchWorkspaceDetailRequest({workspaceId:id,token:auth?.token}),
        queryKey: [`fetchWorkspaceById-${id}`],
        staleTime: 10000
    });
    return (
        isFetching,
        isSuccess,
        error,
        workspace
    )
}















// calling the api for useQuery to fetch the data 