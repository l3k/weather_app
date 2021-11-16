import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding: ${RFValue(15)}px;
  padding-top: ${isIphoneX()
    ? getStatusBarHeight() + RFValue(10)
    : RFValue(10)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text_white};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text_white};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const ContentInput = styled.View`
  margin: ${RFValue(15)}px 0;
`;

export const ContainerBtnWeather = styled.View`
  margin: ${RFValue(5)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text_white};
  font-family: ${({theme}) => theme.fonts.medium};
  margin-bottom: ${RFValue(10)}px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ModalContainer = styled.View`
  width: 100%;
  height: 50%;
  justify-content: space-between;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 ${RFValue(20)}px;
  padding-top: ${RFValue(25)}px;
`;

export const ContentHeader = styled.View``;

export const DayWeek = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text_dark};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const City = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text_dark};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const IconModal = styled(Feather)`
  font-size: ${RFValue(35)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const BodyModal = styled.View`
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
`;

export const Temperature = styled.Text`
  font-size: ${RFValue(50)}px;
  color: ${({theme}) => theme.colors.text_dark};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Celsius = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text_dark};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const ModalFooter = styled.View`
  border-top-color: ${({theme}) => theme.colors.text};
  border-top-width: 2px;
  padding: 0 ${RFValue(20)}px;
  padding-top: ${RFValue(15)}px;
  padding-bottom: ${getBottomSpace() + RFValue(15)}px;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitleInfo = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.medium};
`;

export const Info = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
`;
