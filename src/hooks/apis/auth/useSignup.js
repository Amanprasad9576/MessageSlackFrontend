import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/api/auth";
import {  useToast } from "@/hooks/use-toast";

export const useSignup =()=>{
  const { toast } = useToast();
  const {isPending,isSuccess,error,mutateAsync:signupMutation} = useMutation({
       mutationFn:signUpRequest,
        onSuccess: (data)=>{
           console.log('successfully signup request',data);
           toast({
             variant: "destructive",
             title: 'successfully signup',
             description: 'user successfully signup',
          });
        },
        onError :(error)=>{
          console.log('failed to signUp',error);
          toast({
            title: 'something error',
            description: 'something error from user side',
            variant: "destructive",
         });
        }
  });
   return ({
      isPending,
      error,
      isSuccess,
      signupMutation
  });
};