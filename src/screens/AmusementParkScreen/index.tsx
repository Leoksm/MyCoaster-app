import React, {useState, useEffect} from 'react';
import { View, Text, Image, ListRenderItem, FlatList, StyleSheet } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/NavigationRouter';

import { Keyboard, } from 'react-native';

import {
  Container,
  Form,
  SearchBox,
  List,
  ThemeParks,
  ButtonPark,
  Park,
  Avatar,
  Info,
  Name,
  PlaceBox,
  FlagIcon,
} from './styles';

type AmusementParkScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AmusementPark'>;

type AmusementParkScreenProps = {
  navigation: AmusementParkScreenNavigationProp;
};

export interface IAmusementPark {
  id: number;
  name: string;
  location: string;
  country: string;
  rollerCoasters: number;
  image: string;
}

const DATA = [
  {
    id: 1,
    name: 'Hopi Hari',
    location: 'São Paulo, SP',
    country: 'Brazil',
    rollerCoasters: 4,
    image: require('../../assets/images/noPhoto.png'),
  },
  {
    id: 2,
    name: 'Parque Warner Madrid',
    location: 'San Martín de la Vega, Madrid',
    country: 'Community of Madrid, Spain',
    rollerCoasters: 7,
    image: require('../../assets/images/noPhoto.png'),
  },
  {
    id: 3,
    name: 'Canada\'s Wonderland',
    location: 'Vaughan, Ontario',
    country: 'Canada',
    rollerCoasters: 18,
    image: require('../../assets/images/noPhoto.png'),
  },
  {
    id: 4,
    name: 'Thorpe Parks',
    location: 'Chertsey, Surrey,',
    country: 'England, United Kingdom',
    rollerCoasters: 7,
    image: require('../../assets/images/noPhoto.png'),
  },
];

function AmusementParkScreen({ navigation }: AmusementParkScreenProps): JSX.Element {
  const [searchAmusementPark, setSearchAmusementPark] = useState('');
  
  async function handleSearch() {
    console.log('handleSearch');
    Keyboard.dismiss();
  }

  async function handleDetailPark(data: IAmusementPark) {
    console.log(data.id);
    // navigation.navigate('ThemeParkDetail', {park});
  }

  function getAvatarImage(item: IAmusementPark) {
    return <Avatar source={{uri: item.image}} />;
  }

  const Item = ({data}: {data: IAmusementPark}) => (
    <View style={styles.parkContainer}>
      {/* {getAvatarImage(data)} */}
    <Image source={data.image} style={styles.parkImage} />
    <View style={styles.parkInfo}>
      <Text style={styles.parkName}>{data.name}</Text>
      <Text style={styles.parkLocation}>{data.location}</Text>
      <Text style={styles.parkLocation}>{data.country}</Text>
      <Text style={styles.parkLocation}>Roller Coasters: {data.rollerCoasters}</Text>
    </View>
    <View>
      <FlagIcon name="chevron-right" size={15} />
    </View>
  </View>
  //   <ButtonPark onPress={() => handleDetailPark(data)}>
  //   <Park>
  //   {getAvatarImage(data)}
  //     <Info>
  //       <Name>{data.name}</Name>
  //       <PlaceBox label={data.location} />
  //     </Info>
  //     <FlagIcon name="chevron-right" size={15} />
  //   </Park>
  // </ButtonPark>
  );

  const renderItem: ListRenderItem<IAmusementPark> = ({item}) => <Item data={item} />;

  const styles = StyleSheet.create({
    parkContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: '#fff',
    },
    parkImage: {
      width: 80,
      height: 80,
      marginRight: 10,
      borderRadius: 8,
    },
    parkInfo: {
      flex: 1,
    },
    parkName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#03508c',
    },
    parkLocation: {
      fontSize: 14,
      color: '#555',
    },
    rollerCoasterIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 8,
    },
    rollerCoasterCount: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'right',
      flex: 0.5,
    },
  });
    
  return (
    <Container>
      <Form>
        <SearchBox
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Buscar"
          value={searchAmusementPark}
          onChangeText={(text: string) => setSearchAmusementPark(text)}
          returnKeyType="send"
          onSubmitEditing={handleSearch}
        />
      </Form>
      <List>
        <ThemeParks
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item: IAmusementPark) => item.id}
        />
      </List>
    </Container>
  );
}

export default AmusementParkScreen;

