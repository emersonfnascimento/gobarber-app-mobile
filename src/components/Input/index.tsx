import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, placeholder }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput
        placeholder={placeholder}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
      />
    </Container>
  );
};

export default Input;
