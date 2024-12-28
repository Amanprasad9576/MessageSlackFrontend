import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const SigninCard =()=>{
    
    const [signinForm,setSigninForm] = useState({
       email:'',
       password:'', 
    });
    const navigate = useNavigate();
    return (
     <Card className="h-full w-full">
        <CardHeader>
           <CardTitle>Sign In</CardTitle> 
           <CardDescription>Sign in to access your computer </CardDescription>
        </CardHeader>
      <CardContent>
       <form className="space-y-3">
          <Input
           placeholder="Email"
           required
           value={signinForm.email}
           onChange={(e)=>setSigninForm({...signinForm,email:e.target.value})}
           type="email"
        />
       
          <Input
            placeholder="Password"
            required
            value={signinForm.password}
            onChange={(e)=>setSigninForm({...signinForm,password:e.target.value})}
            type="email"
          />

         <Button className="w-full" disabled={false} size="lg" type="submit">
              Continue
         </Button>
        
        <Separator className="space-y-5"/>
         <p className="text-s text-muted-foreground mt-4" >
          Don't have an account ? {' '}
          <span className="text--sky-600 hover:underline cursor-pointer"
            onClick ={()=> navigate('/auth/signup')} 
          >Sign Up</span>
         </p>
        
      </form>  
     </CardContent> 
       </Card> 
    )
}


// 4:00 
// email and password
 

