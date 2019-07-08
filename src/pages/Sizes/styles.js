import styled from 'styled-components/native';
import { getStatusBarHeight  } from "react-native-iphone-x-helper"

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  /* background: #ecf0f1; */
`;

export const SizeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Size = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 47%;
  height: 210px;
  padding: 20px;
  margin: 1.5%;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 6px;
`;

export const Photo = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Details = styled.View`
  flex: 1;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
  /* margin-top: 15px; */
`;

export const Price = styled.Text`
  flex: 1;
  font-weight: bold;
  color: #666;
  font-size: 18px;
`;

