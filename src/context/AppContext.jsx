import combineContext from "@/utils/combineContext";
import { AuthContextProvider} from "./AuthContext";
import  { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import  { WorkspaceContextProvider } from "./WorkspaceContext";

export const AppContextProvider = combineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspaceContextProvider
);