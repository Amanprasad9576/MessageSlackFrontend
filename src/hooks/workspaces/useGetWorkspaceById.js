import { useQuery } from "@tanstack/react-query"
import { fetchWorkspaceDetailsRequest } from "@/api/workspaces";
import { useAuth } from "../context/useAuth";

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















// calling the api for useQuery to fetch the data 