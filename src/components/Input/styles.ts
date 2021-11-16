import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(40)}px;
  width: 100%;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.text};
  border-radius: ${RFValue(10)}px;
  flex-direction: row;
  padding: 0 ${RFValue(10)}px;
  align-items: center;
`;

export const TxtInput = styled.TextInput`
  width: 93%;
  height: ${RFValue(40)}px;
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(12)}px;
`;

export const Button = styled.TouchableOpacity`
  margin-left: ${RFValue(5)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_white};
`;
