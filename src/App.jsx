import { Route,Routes } from 'react-router-dom'
import { Auth } from '@/pages/Auth/Auth'
import { SignupCard } from '@/components/organisms/Auth/signupCard';
import { SigninCard } from '@/components/organisms/Auth/signinCard';
import { NotFoundPage } from '@/pages/Notfound/Notfound';

import './App.css'

function App() {
  return (
      <Routes>
        <Route path ="/auth/signup" element ={<Auth><SignupCard /></Auth>}/>
        <Route path ="/auth/signin" element ={<Auth><SigninCard/></Auth>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App
