

import './App.css';
import BussinessStore from './Components/context/BussinessStore';
import Routing from './Routing/Routing';


function App() {
  return (
    <div className="App">
      <BussinessStore><Routing /></BussinessStore>
  
    </div>
  );
}

export default App;
