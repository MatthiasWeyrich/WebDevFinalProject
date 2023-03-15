import './App.css';
import './auth/Registration.js';
import {Route, Routes} from 'react-router-dom';
import Registration from './auth/Registration.js';
import Login from './auth/Login.js';


function App() {
return (
    <div>
      <Routes>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
)
}

export default App;
