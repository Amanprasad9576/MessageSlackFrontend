import './App.css'
import { AppRoutes } from '@/Routes';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { AppContextProvider } from '@/context/AppContext';
import { Modals } from '@/components/organisms/Modals/Modals';

function App() {
  const queryClient = new QueryClient();
  return (
     <QueryClientProvider client={queryClient}>
       <AppContextProvider>
         <AppRoutes/>
         <Modals />
        </AppContextProvider>
       <Toaster/>
     </QueryClientProvider> 
  );
}
export default App;
