import { UserButton } from "@/components/atoms/UserButton/UserButton"
export const Home = () =>{
    return (
        <div>
           <h1 className= 'bg-slate-600 m-4 text-white '> This is the home page</h1>
             <div className=' size-12'>
                 <UserButton/>
             </div>
        </div>
    )
}


// background colour , 
// display - flex , 
// items -center 
// te
// protectedRoute -- for the routing path
// function isAuthenticated -- for checking the user token 
//
