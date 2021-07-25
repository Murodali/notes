import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import  NotesContextProvider  from './context/NotesContext';


function App() {
  return (

    <NotesContextProvider>

    <div className="app">

      <Header></Header>

      <div className="app_body">
        <Sidebar></Sidebar>
      </div>
    

    </div>
    </NotesContextProvider>
  );
}

export default App;
