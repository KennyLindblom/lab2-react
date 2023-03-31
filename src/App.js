
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
;


function App() {
  return ( 
    <div>   
      <Navbar />
      <Sidebar />
      
      <div className='container'>
        
        <Projects />
      </div>
      

    </div>
    

    
    

    
  );
   

  
}

export default App;
