import { VStack } from '@chakra-ui/react';
import './App.css';
import MyFancyButtonGroup from './components/my-fancy-button-group';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VStack>
          <MyFancyButtonGroup numButtons={5} />
          <MyFancyButtonGroup numButtons={2} />
        </VStack>
      </header>
    </div>
  );
}

export default App;
