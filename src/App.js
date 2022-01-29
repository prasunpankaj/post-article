import logo from './logo.svg';
import './App.css';
import Message from './component/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         ---Welcome Publishing the Articel-----
        </p>
        <p> <Message/> </p>
      </header>
    </div>
  );
}

export default App;
