import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailView from './views/DetailView';

function App() {
  return (
    <div className="container mt-5">
      <h1 class="text-center bg-dark text-success">Pirate Home Page</h1>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/pirate/new' element={<CreatePage />}/>
        <Route path='/pirate/:id' element={<DetailView />}/>
      </Routes>
    </div>
  );
}

export default App;
