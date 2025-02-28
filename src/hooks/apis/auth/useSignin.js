import { signInRequest } from "@/api/auth"
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query"
//import {setAuth} from '@/hooks/context/useAuth';

export const useSignin = ()=>{
     const { toast } = useToast();
   //  const {setAuth} = setAuth();
     const { isPending, isSuccess, error, mutateAsync:signinMutation } = useMutation({
        mutationFn:signInRequest,
        onSuccess :(response)=>{
          console.log('User signin successfully',response);

          const userObject = JSON.stringify(response.data);
          
          localStorage.setItem('user',userObject);
          localStorage.setItem('token',response.data.token);
 /*          
          setAuth({
               token: response.data.token,
               user: response.data,
               loading: false
            });
 */
          toast({
               varient:'destructive',
               message:'User Signin Successfully',
               description:'signin successfully',
               type:'success',
          })
       },
         onError :(data) =>{
            console.log('Something error',data);
            toast({
               varient:'destructive',
               message:'Something wrong',
               description:'Wrong on Error',
               type:'error',
            })
         }
      })
    return ({
      isPending,
      error,
      isSuccess,
      signinMutation
    })
}  


// This part to fetch the request from server side data