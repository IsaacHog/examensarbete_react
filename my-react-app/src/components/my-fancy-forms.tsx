import React, { useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

type FormInputProps = {
  label: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
};

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, type = 'text', onChange }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={handleInputChange} style={{ color: 'black' }} />
    </Box>
  );
};

type FormProps = {
  numForms: number;
};

const MyFancyForms: React.FC<FormProps> = ({ numForms }) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  const handleInputChange = (formNum: number, inputValue: string) => {
    console.log(`Form ${formNum} input changed to: ${inputValue}`);
  };

  const forms = [];

  for (let i = 1; i <= numForms; i++) {
    forms.push(
      <Box key={i} borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
        <form onSubmit={handleFormSubmit}>
          <FormInput label='Input' onChange={(value) => handleInputChange(i, value)}/>
          <Flex justify="flex-end">
            <Button type="submit" mt={4} colorScheme="teal">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    );
  }

  return <>{forms}</>;
};

export default MyFancyForms;
