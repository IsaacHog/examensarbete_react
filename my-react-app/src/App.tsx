import { HStack, VStack } from '@chakra-ui/react';
import './App.css';
import MyFancyButtonGroup from './components/my-fancy-button-group';
import MyFancyForms from './components/my-fancy-forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VStack>
          <MyFancyButtonGroup numButtons={5} />
          <MyFancyButtonGroup numButtons={2} />
        </VStack>

        <VStack>
          <HStack>
            <MyFancyForms numForms={1} />
            <MyFancyForms numForms={1} />
          </HStack>
          <MyFancyForms numForms={2} />
        </VStack>
      </header>
    </div>
  );
}

export default App;
