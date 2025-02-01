import { useEffect, useState } from "react";
import { SigninCard } from "./SigninCard";
import { useNavigate } from "react-router-dom";
import { useSignin } from "@/hooks/apis/auth/useSignin";


export const SigninContainer = ()=>{
       const navigate = useNavigate();
       const [validationError,setValidationError]=useState(null);
       const [signinForm,setSigninForm] = useState({
          email:"",
          password:"",
        });
   
   const { isSuccess, isPending, error, signinMutation } = useSignin();

     async function onSigninFormSubmit(e){
        e.preventDefault();
        console.log('form Signin successfully',signinForm);

         if(!signinForm.email || !signinForm.password){
              console.log('All fields are required');
              setValidationError({message:'please fill all the field'});
               return;
            };

            setValidationError(null);
            await signinMutation({
                email: signinForm.email,
                password: signinForm.password
            });
    
    };
    useEffect(()=>{
        if(isSuccess){
            setTimeout(()=>{
              navigate('/home');
            },3000);
        }
    },[isSuccess,navigate]);
 
    return (
        <SigninCard
           isPending={isPending}
           isSuccess={isSuccess}
           error={error}
           onSigninFormSubmit={onSigninFormSubmit}
           signinForm={signinForm} 
           setSigninForm ={setSigninForm}
           validationError={validationError}
        />
    )
}









// logic building 
// cheching the password and emailid
// 