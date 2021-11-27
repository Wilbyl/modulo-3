
import './App.css';
import Header from'./components/shared/Header/Header'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cadastro from './Pages/cadastro/cadastro'
function App() {
  return (
    <div>
    <Header>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ="/Cadastro" element={<Cadastro/>}/>
      </Routes>
    
    </Header>     
    </div>
  );
}

export default App;
