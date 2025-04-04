import { createContext, useState } from "react";

const CreateChannelContext = createContext();

export const CreateChannelContextProvider = ({children}) =>{
    const [openCreateChannelModal , setOpenCreateChannelModal] = useState(false);
     //console.log('value of openCreateChannelModal',openCreateChannelModal);
     return (
        <CreateChannelContext.Provider value ={{openCreateChannelModal,setOpenCreateChannelModal}}>
            {children}
        </CreateChannelContext.Provider>
     )
}
 
export default CreateChannelContext;











// provide context 