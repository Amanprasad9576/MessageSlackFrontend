import { useState,useEffect } from "react";
import { SignupCard } from "./SignupCard";
import {  useNavigate } from "react-router-dom";
import { useSignup } from "@/hooks/apis/auth/useSignup";

export const SignupContainer = ()=>{
      const navigate = useNavigate();

      const [signupForm,setSignupForm] = useState({
          email :"",
          password:"",
          username :"",
          confirmPassword:"",
        });

    const [validationError,setValidationError] = useState(null);

    const {isPending,isSuccess,error,signupMutation} = useSignup();
     
    async function onSignupFormSubmit(e){
        e.preventDefault();
        console.log('Form submited successfully',signupForm);
    

     if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username){
          console.log("All the fields are required");
          setValidationError({message:'All fields are required'})
          return;
        }
   
      if(signupForm.password !== signupForm.confirmPassword){
          console.log("Password and confirm Password don't match ");
          setValidationError({message:'passwords do not match '});
           return;
        }
        setValidationError(null);
        await signupMutation({
            email:signupForm.email,
            password:signupForm.password,
            username:signupForm.username,
        });
   }
     useEffect(()=>{
        if(isSuccess){
            setTimeout(()=>{
              navigate('/auth/signin'); 
            },3000);
        }
     },[isSuccess,navigate]);

    return (
       <SignupCard  
        isSuccess={isSuccess}
        isPending={isPending}
        error={error}
        signupForm={signupForm} 
        setSignupForm={setSignupForm} 
        validationError={validationError}
        onSignupFormSubmit={onSignupFormSubmit}

        />
    );
}