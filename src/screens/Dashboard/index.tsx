import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {debounce} from 'lodash';
import {format, parseISO} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {useTheme} from 'styled-components';

import {
  Container,
  Title,
  SubTitle,
  ContentInput,
  ContainerBtnWeather,
  Label,
  Content,
  ModalContainer,
  ModalHeader,
  ContentHeader,
  DayWeek,
  City,
  IconModal,
  BodyModal,
  Temperature,
  Celsius,
  ModalFooter,
  ContentFooter,
  SubTitleInfo,
  Info,
} from './styles';

import {ButtonWeather} from '../../components/ButtonWeather';
import {Input} from '../../components/Input';
import api from '../../services/api';

export function Dashboard() {
  const [daySelected, setDaySelected] = useState(null);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [listWeather, setListWeather] = useState([]);
  const [infoCity, setInfoCity] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    async function loadData() {
      if (!search) {
        return;
      }

      const response = await api.get('api/weather', {
        params: {
          search,
        },
      });

      if (response.data.cod === '200') {
        setListWeather(response.data.list);
        setInfoCity(response.data.city);
      } else {
        setListWeather([]);
        setInfoCity(null);
      }
    }

    loadData();
  }, [search]);

  function getIcon(icon: string) {
    if (icon === '01d') {
      return 'sun';
    } else if (icon === '02d') {
      return 'sun';
    } else if (icon === '09d') {
      return 'cloud-drizzle';
    } else if (icon === '10d') {
      return 'cloud-rain';
    } else if (icon === '11d') {
      return 'cloud-lightning';
    } else if (icon === '13d') {
      return 'cloud-snow';
    } else {
      return 'cloud';
    }
  }

  const handleTextChange = debounce(text => {
    setSearch(text);
  }, 500);

  return (
    <Container
      colors={[theme.colors.primary, theme.colors.primary_dark]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Title>Seja bem vindo</Title>
      <SubTitle>Selecione uma Cidade</SubTitle>

      <ContentInput>
        <Input
          placeholder="Pesquisar por cidade"
          placeholderTextColor={theme.colors.text}
          icon="search"
          onChangeText={handleTextChange}
          handlePress={() => console.log(search)}
        />
      </ContentInput>

      <Label>Previsão para a semana:</Label>

      <Content>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listWeather}
          keyExtractor={item => String(item.dt)}
          renderItem={({item}) => (
            <ContainerBtnWeather>
              <ButtonWeather
                active={daySelected === item}
                dayWeek={format(parseISO(item.dt_txt), 'EEEEEE', {
                  locale: ptBR,
                })
                  .toLowerCase()
                  .replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())}
                dayHour={format(parseISO(item.dt_txt), 'dd/MM - HH:mm', {
                  locale: ptBR,
                })}
                icon={getIcon(item.weather[0].icon)}
                temperature={`${Number(item.main.temp).toFixed(1)}º`}
                onPress={() => {
                  setDaySelected(daySelected === item ? null : item);
                  if (daySelected !== item) {
                    setModal(true);
                  }
                }}
              />
            </ContainerBtnWeather>
          )}
        />
      </Content>

      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={modal}
        backdropOpacity={0.2}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        onBackdropPress={() => {
          setModal(false);
          setDaySelected('');
        }}>
        <ModalContainer>
          <ModalHeader>
            <ContentHeader>
              <DayWeek>
                {daySelected
                  ? format(parseISO(daySelected.dt_txt), 'EEEEEE, dd/MM', {
                      locale: ptBR,
                    })
                      .toLowerCase()
                      .replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())
                  : ''}
              </DayWeek>
              <City>{infoCity ? infoCity.name : ''}</City>
            </ContentHeader>
            <IconModal
              name={getIcon(daySelected ? daySelected?.weather[0].icon : '')}
            />
          </ModalHeader>
          <BodyModal>
            <Temperature>
              {daySelected ? Number(daySelected.main.temp).toFixed(1) : 0}
            </Temperature>
            <Celsius>ºC</Celsius>
          </BodyModal>
          <ModalFooter>
            <ContentFooter>
              <SubTitleInfo>Temp. Min.</SubTitleInfo>
              <Info>
                {daySelected
                  ? `${Number(daySelected.main.temp_min).toFixed(1)}ºC`
                  : 0}
              </Info>
            </ContentFooter>
            <ContentFooter>
              <SubTitleInfo>Temp. Max.</SubTitleInfo>
              <Info>
                {daySelected
                  ? `${Number(daySelected.main.temp_max).toFixed(1)}ºC`
                  : 0}
              </Info>
            </ContentFooter>
            <ContentFooter>
              <SubTitleInfo>Ventos</SubTitleInfo>
              <Info>
                {daySelected
                  ? `${Number(daySelected.wind.speed).toFixed(1)} m/s`
                  : 0}
              </Info>
            </ContentFooter>
            <ContentFooter>
              <SubTitleInfo>Humidade</SubTitleInfo>
              <Info>
                {daySelected
                  ? `${Number(daySelected.main.humidity).toFixed(1)}%`
                  : 0}
              </Info>
            </ContentFooter>
            <ContentFooter>
              <SubTitleInfo>Nebulosidade</SubTitleInfo>
              <Info>
                {daySelected
                  ? `${Number(daySelected.clouds.all).toFixed(1)}%`
                  : 0}
              </Info>
            </ContentFooter>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
