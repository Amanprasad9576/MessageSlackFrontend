import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { AppContextProvider } from '@/context/AppContext';
import { CreateWorkspaceContextProvider } from '@/context/CreateWorkspaceContext';  // Import the missing provider
import { Modals } from '@/components/organisms/Modals/Modals';
import { AppRoutes } from '@/Routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <CreateWorkspaceContextProvider> 
          <AppRoutes />
          <Modals />
        </CreateWorkspaceContextProvider>
      </AppContextProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;




//        <WorkspacePreferenceModal/>
