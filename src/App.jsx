import { AppRoutes } from './Routes';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import './App.css'
import { AppContextProvider } from './context/AppContext';

function App() {
  const queryClient = new QueryClient();
  return (
     <QueryClientProvider client={queryClient}>
       <AppContextProvider>
        <AppRoutes/>
        </AppContextProvider>
       <Toaster/>
     </QueryClientProvider> 
  );
}

export default App
