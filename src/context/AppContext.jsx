import combineContext from "@/utils/combineContext";
import { AuthContextProvider} from "./AuthContext";
import  { WorkspaceContextProvider } from "./WorkspaceContext";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext";
import  { CreateChannelContextProvider } from "./CreateChannelContext";
import { SocketContextProvider } from "./SocketContext";

export const AppContextProvider = combineContext(
    SocketContextProvider,
    AuthContextProvider,
    WorkspaceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
);


// CreateChannelContextProvider is a component function
// that's why calling in curly bracket 