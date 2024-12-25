import { Route,Routes } from 'react-router-dom'
import { Auth } from '@/pages/Auth/Auth'
import './App.css'

function App() {
  return (
      <Routes>
        <Route path ="/auth" element ={<Auth/>}/>
      </Routes>
  );
}
export default App
