
import './App.css';
import Header from'./components/shared/Header/Header'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
function App() {
  return (
    <div>
    <Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    
    </Header>     
    </div>
  );
}

export default App;
