import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

interface TypeProps {
  active: boolean;
}

export const Container = styled.TouchableOpacity<TypeProps>`
  width: ${RFValue(100)}px;
  height: ${RFValue(120)}px;
  padding: ${RFValue(15)}px;
  justify-content: space-between;
  border-radius: ${RFValue(20)}px;

  ${({active}) =>
    active
      ? css`
          background-color: ${({theme}) => theme.colors.active};
        `
      : css`
          border-width: 1px;
          border-color: ${({theme}) => theme.colors.text};
        `}
`;

export const Header = styled.View`
  width: 100%;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.text_white};
`;

export const Day = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Content = styled.View``;

export const Temperature = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_white};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Line = styled(LinearGradient)`
  height: ${RFValue(2.5)}px;
  width: 100%;
  border-radius: ${RFValue(20)}px;
`;
