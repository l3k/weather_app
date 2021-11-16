import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, TxtInput, Button, Icon} from './styles';

interface Props extends TextInputProps {
  icon: string;
  placeholder: string;
  handlePress: () => void;
}

export function Input({icon, handlePress, ...rest}: Props) {
  return (
    <Container>
      <TxtInput {...rest} />
      {icon && (
        <Button onPress={handlePress}>
          <Icon name={icon} />
        </Button>
      )}
    </Container>
  );
}
