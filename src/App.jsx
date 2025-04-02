import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { AppContextProvider } from '@/context/AppContext';
import { CreateWorkspaceContextProvider } from '@/context/CreateWorkspaceContext';  // Import the missing provider
import { Modals } from '@/components/organisms/Modals/Modals';
import { AppRoutes } from '@/Routes';
import { CreateChannelContextProvider } from './context/CreateChannelContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <CreateWorkspaceContextProvider> 
          <CreateChannelContextProvider>
          <AppRoutes />
          <Modals />
          </CreateChannelContextProvider>
        </CreateWorkspaceContextProvider>
      </AppContextProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;




//        <WorkspacePreferenceModal/>
