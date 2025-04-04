import { useMutation } from "@tanstack/react-query"
import { createWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";


export const useCreateWorkspace = () => {
    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: createWorkspaceMutation } = useMutation({
        mutationFn: async (data) => await createWorkspaceRequest({ ...data, token: auth?.token }),

        onSuccess: (data) => {
            console.log('Successfully created workspace', data);
        },
        onError: (error) => {
            console.error('Failed to create workspace', error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    };
};



// Calling the function createWorkspaceRequest and passing 
// user token to access










// 