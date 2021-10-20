import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
    </div>
  );
}

export default App;
