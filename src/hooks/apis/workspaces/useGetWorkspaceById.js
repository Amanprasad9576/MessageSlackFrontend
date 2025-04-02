import { useQuery } from "@tanstack/react-query"
import { fetchWorkspaceDetailsRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";

export const useGetWorkspaceByIds = (id) => {
    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: workspace } = useQuery({
        queryFn: () => fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token }),
        queryKey: [`fetchWorkspaceById-${id}`],
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspace
    };
};


/*  Apply the feature  on click button edit that  
 edit workspace name . name of workspace is update 
 in all the place   
 how to implement it 
 delete the workspace from the cache 
 


*/












// calling the api for useQuery to fetch the data 