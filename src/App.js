
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      <Header></Header>

      <div className="app_body">
        <Sidebar></Sidebar>
      </div>
    

    </div>
  );
}

export default App;
