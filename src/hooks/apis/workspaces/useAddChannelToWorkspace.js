import { addChannelToWorkspaceRequest } from "@/api/workspaces"
import { useMutation } from "@tanstack/react-query"
import { useAuth } from "@/hooks/context/useAuth";

export const useAddChannelToWorkspace = () => {

    const { auth } = useAuth();
    const { mutateAsync: addChannelToWorkspaceMutation, isPending, isSuccess, error } = useMutation({
        mutationFn: ({ workspaceId, channelName }) => addChannelToWorkspaceRequest({ workspaceId, channelName, token: auth?.token }),
        onSuccess: (data) => {
            console.log('Channel added to workspace', data);
        },
        onError: (error) => {
            console.log('Error adding channel to workspace', error);
        }
    });

    return {
        addChannelToWorkspaceMutation,
        isPending,
        isSuccess,
        error
    };
};

/* what is required for fetching the data such as parameter
 auth for token , channel name , workspaceId , 



*/


/*
const { isPending, isSuccess, error, mutateAsync: createWorkspaceMutation } = useMutation({
        mutationFn: async (data) => await createWorkspaceRequest({ ...data, token: auth?.token }),

        onSuccess: (data) => {
            console.log('Successfully created workspace', data);
        },
        onError: (error) => {
            console.error('Failed to create workspace', error);
        }
    });

*/