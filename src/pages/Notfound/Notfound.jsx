import { Button } from "@/components/ui/button";
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
export const NotFoundPage = () =>{
    const navigate = useNavigate();  
  return (
      <div className='flex h-screen w-full flex-col items-center justify-center bg-grey-100'>
         <Card className='text-center shadow-lg max-w-lg'>
            <CardHeader>
              <CardTitle>404 Not found </CardTitle>
                <p className='text-grey-600'>
                     The page you are looking does not exist
                </p>
            </CardHeader>
             <CardContent>
               <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"/>
               <Button 
                variant="outline"
                onClick ={(()=>navigate(-1))}
                className="mt-4"
               > Go back
             
               </Button>
            </CardContent>
         </Card>
      </div>
  ); 
}


