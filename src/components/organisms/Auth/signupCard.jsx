import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export const SignupCard = ()=>{
   // const [email,setEmail]=useState();
    const [signupForm,setSignupForm]=useState({
        email:'',
        password:'',
        confirmPassword:'',
        username:'',
    })
    const navigate =useNavigate();
    return(
        <Card classname="h-full w-full">
          <CardHeader>
                <CardTitle>SignUp</CardTitle>
                <CardDescription>SignUp to access your account</CardDescription>
          </CardHeader>
            <CardContent>
              <form className='space-y-3'>
                 <Input
                  placeholder="Email"
                  required
                  onChange={(e)=> setSignupForm({...signupForm,email:e.target.value})}
                  value={signupForm.email}
                  type="email"
                  disabled={false}
                />
                 <Input
                  placeholder="Password"
                  required
                  onChange={(e)=>setSignupForm({...signupForm,password:e.target.value})}
                  value={signupForm.password}
                  type="password"
                  disabled={false}
                />
                 <Input
                  placeholder="Confirm password"
                  required
                  onChange={(e)=>setSignupForm({...setSignupForm,confirmPassword:e.target.value})}
                  value ={signupForm.confirmPassword}
                  type="password"
                  disabled={false}
                />
                 <Input
                  placeholder="Username"
                  required
                  onChange={(e)=>setSignupForm({...setSignupForm,username:e.target.value})}
                  value ={signupForm.username}
                  type="String"
                  disabled={false}
                />
                <Button
                  className="w-full"
                  type="submit"
                  size="lg"
                  disabled={false}
                 >Continue
                </Button>
              </form>
             <separator className="my-5"/>
             <p
               className='text-s text-muted-foreground mt-4'
             >
              Already have an account ? {' '}
                    <span 
                        className='text-sky-600 hover:underline cursor-pointer'
                        onClick={() => navigate('/auth/signin')}
                    >
                        Sign In
                    </span>
             </p>
            </CardContent>
        </Card>
    ); 
}




//tailwind css
// card -->shadcn ui --> 