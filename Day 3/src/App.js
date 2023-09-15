import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/Login" element ={<Login />}></Route>
    <Route path="/" element ={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;