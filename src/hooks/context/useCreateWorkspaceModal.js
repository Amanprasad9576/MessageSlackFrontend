import CreateWorkspaceContext from "@/context/CreateWorkspaceContext";
import { useContext } from "react";

export const useCreateWorkspaceModal = () => {
   const context = useContext(CreateWorkspaceContext);

   if (!context) {
       throw new Error("useCreateWorkspaceModal must be used within a CreateWorkspaceContextProvider");
   }

   return context;
};


// Calling the CreateWorkspaceModal to use it

// content having three main part 
// create context with context provider
// use context 
// calling the context 