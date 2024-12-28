import { Route,Routes } from 'react-router-dom'
import { Auth } from '@/pages/Auth/Auth'
import { SignupCard } from '@/components/organisms/Auth/signupCard';
import { SigninCard } from '@/components/organisms/Auth/signinCard';

import './App.css'

function App() {
  return (
      <Routes>
        <Route path ="/auth/signup" element ={<Auth><SignupCard /></Auth>}/>
        <Route path ="/auth/signin" element ={<Auth><SigninCard/></Auth>}/>

      </Routes>
  );
}

export default App
