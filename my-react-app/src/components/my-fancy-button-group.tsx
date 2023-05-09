import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

type ButtonProps = {
  label: string;
  colorScheme: string;
  onClick: () => void;
};

const MyButton: React.FC<ButtonProps> = ({ label, colorScheme, onClick }) => {
  return (
    <Button colorScheme={colorScheme} onClick={onClick} size="lg">
      {label}
    </Button>
  );
};

type MyFancyButtonGroupProps = {
  numButtons: number;
};

const MyFancyButtonGroup: React.FC<MyFancyButtonGroupProps> = ({ numButtons }) => {
  const handleButtonClick = (buttonNum: number) => {
    console.log(`Button ${buttonNum} clicked!`);
  };

  const buttons = [];

  for (let i = 1; i <= numButtons; i++) {
    buttons.push(
      <MyButton
        key={i}
        label={`Button ${i}`}
        colorScheme="blue"
        onClick={() => handleButtonClick(i)}
      />
    );
  }

  return <ButtonGroup spacing={4}>{buttons}</ButtonGroup>;
};

export default MyFancyButtonGroup;
