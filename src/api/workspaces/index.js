import axiosConfig from "@/config/axiosConfig";


export const createWorkspaceRequest = async ({ name, description, token }) => {

    try {
        const response = await axiosConfig.post('/workspaces', { name, description}, {
            headers: {
                'x-access-token': token
            }
        });
        console.log('Response in create workspace request', response);
        return response?.data?.data;

    } catch(error) {
        console.log('Error in create workspace request', error);
        throw error.response.data;
    }
};


export const fetchWorkspacesRequest = async ({ token }) => {
    try {
        const response = await axiosConfig.get('/workspaces', {
            headers: {
                'x-access-token': token
            }
        });
        console.log('Response in fetch workspace request', response);
        return response?.data?.data;
    } catch(error) {
        console.log('Error in fetching workspace request', error);
        throw error.response.data;
    }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axiosConfig.get(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
   //     console.log('token',token);
        console.log('Response in fetching workspace details request', response);
        return response?.data?.data;
    } catch(error) {
        console.log('Error in fetching workspace details request', error);
        throw error.response;
    }
};

export const updateWorkspaceRequest = async ({workspaceId,name,token})=>{
    try {
        const response = await axiosConfig.put(`/workspaces/${workspaceId}`,{name},{
            headers:{
                'x-access-token':token
            }
        })
        console.log('Update the workspace Request',response);
        return response;
    } catch (error) {
        console.log('error in updating workspace',error)
        throw error.response;
    }
}

export const deleteWorkspaceRequest = async ({ workspaceId, token}) => {
    try {
        const response = await axiosConfig.delete(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch(error) {
        console.log('Error in deleting workspace request', error);
        throw error.response.data;
    }
};






/* 
 Implement the delete workspace api in frontend part
 who can delete the workspace --> Admin
 how can check the person is admin or not



*/
// updateWorkspaceRequest 
// who can update the workspace --> creater of the workspace
// valid user













// fetching workspace by Id