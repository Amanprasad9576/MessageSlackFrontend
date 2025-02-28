import { Route,Routes } from "react-router-dom";
import { Auth } from "@/pages/Auth/Auth.jsx";
import { SignupContainer } from "@/components/organisms/Auth/SignupContainer.jsx";
import { SigninContainer } from "@/components/organisms/Auth/SigninContainer.jsx"; 
import { NotFoundPage } from "@/pages/Notfound/Notfound.jsx";
import { Home } from "./pages/Home/Home"; 
import { ProtectedRoute } from "./components/molecules/ProtectedRoute/protectedRoute";
import { WorkspaceLayout } from "./pages/Workspace/Layout";
export const AppRoutes = () =>{
   return (
        <>
         <Routes>
            <Route path ="/auth/signup" element ={<Auth><SignupContainer /></Auth>}/>
            <Route path ="/auth/signin" element ={<Auth><SigninContainer/></Auth>}/>
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          
            <Route path="/workspaces/:workspaceId" element={<ProtectedRoute><WorkspaceLayout>Workspace</WorkspaceLayout></ProtectedRoute>} />
            <Route 
            path="/workspaces/:workspaceId/channels/:channelId"
            element={<ProtectedRoute>channel</ProtectedRoute>} />

            <Route path="*" element={<NotFoundPage />} />
         </Routes>
       </>
   )
}










// export const Approutes = ()=>{
//     }
// export default 