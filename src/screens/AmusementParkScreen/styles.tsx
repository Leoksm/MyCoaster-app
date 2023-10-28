import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Search from '../../components/common/SearchBox';
import Place from '../../components/common/Place';
import Button from '../../components/common/Button';

import Icon from 'react-native-vector-icons/FontAwesome';
import {IAmusementPark} from './index';


export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: #03508c;
`;

export const Form = styled.View`
  flex-direction: row;
  padding: 16px;
  padding-bottom: 10px;
`;

export const SearchBox = styled(Search)``;

export const List = styled.View`
  background-color: #03508c;
  margin-top: 0px;
`;


export const ThemeParks = styled(FlatList as new () => FlatList<IAmusementPark>)`
  margin-top: 20px;
`;

export const Park = styled.View`
  background: #fff;
  margin-bottom: 1px;
  align-items: center;
  flex-direction: row;
  height: 60px;
`;
export const Avatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
  margin-left: 15px;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const Name = styled.Text`
  font-size: 17px;
  color: #000000;
`;
export const PlaceBox = styled(Place)`
  font-size: 15px;
  color: #8e8e93;
  margin-top: 2px;
`;

export const FlagIcon = styled(Icon)`
  color: #8e8e93;
  padding-right: 20px;
`;

export const ButtonPark = styled(TouchableOpacity)``;

//Details
export const ParkImage = styled.Image`
  flex: 1;
  background: #eee;
`;

export const ParkInfo = styled.View`
  flex: 2;
  background: #ffffff;
  padding-top: 25px;
`;

export const ParkName = styled.Text`
  font-size: 25px;
  color: #494949;
  margin-left: 45px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const ParkData = styled.View`
  margin-left: 20px;
  flex-direction: row;
`;

export const DataIcon = styled.Image``;

export const DataText = styled.Text`
  font-size: 15px;
  color: #8e8e93;
  margin-left: 10px;
`;

export const CheckInBox = styled.View`
  margin-bottom: 10px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const CheckInButton = styled(Button)`
  margin-top: 5px;
`;

export const SubTitleTextBold = styled.Text`
  font-size: 18px;
  color: #494949;
  margin-left: 10px;
  font-weight: bold;
`;

export const ContainerRollerCoasterList = styled.View`
  margin-top: 0px;
  flex: 1;
`;

export const RollerCoasterList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
export const ListBox = styled.View`
  flex-direction: row;
  height: 45px;
  justify-content: center;
  align-items: center;
`;

export const ListText = styled.Text`
  font-size: 17px;
  color: #8e8e93;
  margin-left: 10px;
  flex: 1;
`;

export const ItemSeparator = styled.View`
  height: 0.5px;
  background-color: #c8c8c8;
`;
