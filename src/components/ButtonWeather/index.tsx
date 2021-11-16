import React, {useEffect, useState} from 'react';
import {Animated, TouchableOpacityProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';

import {
  Container,
  Header,
  Icon,
  Day,
  Content,
  Temperature,
  Line,
} from './styles';

interface Props extends TouchableOpacityProps {
  icon: string;
  active: boolean;
  dayWeek: string;
  dayHour: string;
  temperature: string;
}

export function ButtonWeather({
  icon,
  active,
  dayWeek,
  dayHour,
  temperature,
  ...rest
}: Props) {
  const [button] = useState(new Animated.Value(RFValue(35)));

  const theme = useTheme();

  useEffect(() => {
    if (active) {
      Animated.spring(button, {
        toValue: RFValue(70),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(button, {
        toValue: RFValue(35),
        useNativeDriver: false,
      }).start();
    }
  }, [active, button]);

  return (
    <Container active={active} {...rest}>
      <Header>
        <Icon name={icon} />
        <Day>{dayWeek}</Day>
        <Day>{dayHour}</Day>
      </Header>
      <Content>
        <Temperature>{temperature}</Temperature>
      </Content>
      <Animated.View
        style={{
          width: button,
          position: 'absolute',
          bottom: active ? 0 : -1,
          alignItems: 'center',
          left: '22%',
        }}>
        <Line
          colors={[theme.colors.secondary_dark, theme.colors.secondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      </Animated.View>
    </Container>
  );
}
