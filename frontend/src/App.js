import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import './auth/Registration.js';
import Registration from './auth/Registration.js';


function App() {
return (
  <BrowserRouter>
    <div>
      <Registration/>
    </div>
  </BrowserRouter>
)
}

export default App;
