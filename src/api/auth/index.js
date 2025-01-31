import axiosConfig from "@/config/axiosConfig";

export const signUpRequest = async ({email,password,username})=>{
    try {
       const response = await axiosConfig.post('/users/signUp',{
        email,
        password,
        username
       })
       console.log(response);
       return response.data; 
    } catch (error) {
      console.log(error);
      throw error.response.data; 
    }
}

export const signInRequest = async ({email,password})=>{
    try {
     const response = await axiosConfig.post('/users/signIn',{
        email,
        password
     });
     return response.data;   
    } catch (error) {
      console.log(error);
      throw error.response.data; 
    }
}

   
