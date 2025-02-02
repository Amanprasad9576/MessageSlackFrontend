import axiosConfig from "@/config/axiosConfig";

export const createWorkspaceRequest= async({name,description,token}) =>{
    try {
       // const {auth} = useAuth();
       const response = axiosConfig.post('/workspaces',{name,description},{
         headers:{
            'x-access-token':token
         }
       });
       console.log('Request in create workspace',response);
        return response?.data;
    } catch (error) {
          console.log('Error in creating workspace',error);
          throw error.response.data;
     }
}


export const fetchWorkspaceRequest= async ({token}) =>{
    try {
       const response = axiosConfig.get('/workspace',{
           headers:{
               'x-access-token':token
           }
    })
    console.log('fetching the workspace data',response);
    return response?.data;

    } catch (error) {
       console.log('Error in fetching workspace data',error);
       throw error.response.error;
    }
};


// createWorkspaceRequest  --> name, descrpttion, token