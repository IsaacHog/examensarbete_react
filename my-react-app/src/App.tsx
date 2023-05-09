import './App.css';
import MyFancyButtonGroup from './components/my-fancy-button-group';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFancyButtonGroup numButtons={5}/>
      </header>
    </div>
  );
}

export default App;
