import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/api/auth";

export const useSignup =()=>{
  const {isPending,isSuccess,error,mutateAsync:signupMutation} = useMutation({
       mutationFn:signUpRequest,
        onSuccess: (data)=>{
          console.log('successfully signup request',data);
        },
        onError :(error)=>{
          console.log('failed to signUp',error);
        }
  });
   return ({
      isPending,
      error,
      isSuccess,
      signupMutation
  });
};