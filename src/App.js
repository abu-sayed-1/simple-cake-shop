import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
  );
}

export default App;
