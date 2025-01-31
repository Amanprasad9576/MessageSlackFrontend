import { AppRoutes } from './Routes';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import './App.css'

function App() {
  const queryClient = new QueryClient();
  return (
     <QueryClientProvider client={queryClient}>
        <AppRoutes/>
       <Toaster/>
     </QueryClientProvider> 
  );
}

export default App
