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

export const addChannelToWorkspaceRequest = async ({ workspaceId, channelName, token }) => {
    try {
        const response = await axiosConfig.put(`/workspaces/${workspaceId}/channels`, { channelName }, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in adding channel to workspace request', error);
        throw error.response.data;
    }
};

export const resetJoinCodeRequest = async ({ workspaceId,token }) => {
    try {
        const response = await axiosConfig.put(`/workspaces/${workspaceId}/joinCode/reset`, {}, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in resetting join code request', error);
        throw error.response.data;
    }
};
export const addMemberToWorkspaceRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axiosConfig.put(`/workspaces/${workspaceId}/members`, {}, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in adding member to workspace request', error);
        throw error.response.data;
    }
};

export const joinWorkspaceRequest = async ({ workspaceId, joinCode, token }) => {
    try {
        const response = await axiosConfig.put(`/workspaces/${workspaceId}/join`, { joinCode }, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in joining workspace request', error);
        throw error.response.data;
    }
};










// what should be the input of the joinWorkspaceRequest
 //   token
 //   workspaceId
// joinCode

/* what should be the input to addMemberToWorkspace
    workspaceId,
    memberId,
    role,
    userId


*/

/*
  who can reset the join code --> workspace Admin
  having token
*/









/* 
procedure for adding channel name to the workspace 
workspaceId, channel name , token


*/


/* 
 Implement the delete workspace api in frontend part
 who can delete the workspace --> Admin
 how can check the person is admin or not



*/
// updateWorkspaceRequest 
// who can update the workspace --> creater of the workspace
// valid user













// fetching workspace by Id