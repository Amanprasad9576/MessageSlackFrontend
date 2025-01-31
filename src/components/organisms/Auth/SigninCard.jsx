import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TriangleAlert } from "lucide-react";
import { LucideLoader2 } from "lucide-react";
import { FaCheck } from "react-icons/fa";

export const SigninCard =({
      signinForm,
      setSigninForm,
      onSigninFormSubmit,
      error,
      isSuccess,
      isPending,
      validationError,
     }) => {
    
    const navigate = useNavigate();
    return (
     <Card className="h-full w-full ">
        <CardHeader>
           <CardTitle>Sign In</CardTitle> 
           <CardDescription>Sign in to access your computer </CardDescription>
          
          {validationError &&(
            <div className='bg-destructive/15 p-4  rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
                <TriangleAlert className='size-5'/>
                <p>{validationError.message}</p>
            </div>
          )}
          {error &&(
              <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6 '>
                  <TriangleAlert className='size-5'/>
                  <p>{error.message}</p>
              </div>
            )}
 
          {isSuccess && (
                    <div className='bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-5'>  
                        <FaCheck className='size-5' />
                        <p>
                            Successfully signed in. You will be redirected to the home page in a few seconds.
                            <LucideLoader2 className="animate-spin ml-2" />
                        </p>
                    </div>
                )}

        </CardHeader>
      <CardContent>
       <form className="space-y-3" onSubmit={onSigninFormSubmit}>
          <Input
           disabled={isPending}
           placeholder="Email"
           required
           value={signinForm.email}
           onChange={(e)=>setSigninForm({...signinForm, email:e.target.value})}
           type="email"
        />
       
          <Input
           disabled={isPending}
            placeholder="Password"
            required
            value={signinForm.password}
            onChange={(e)=>setSigninForm({...signinForm,password:e.target.value})}
            type="password"
          />

         <Button className="w-full bg-slate-600" disabled={isPending} size="lg" type="submit">
              Continue
         </Button>
        
        <Separator className="space-y-5"/>
         <p className="text-s text-muted-foreground mt-4" >
          Don't have an account ? {' '}
          <span className="text-sky-600 hover:underline cursor-pointer"
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
 

