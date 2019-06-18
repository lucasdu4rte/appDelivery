import styled from 'styled-components/native';
import { getStatusBarHeight  } from "react-native-iphone-x-helper"

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  /* background: #ecf0f1; */
`;

export const ProductList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 47%;
  height: 200px;
  padding: 20px;
  margin: 1.5%;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 6px;
`;

export const Photo = styled.Image`
  width: 130px;
  height: 130px;
  border-width: 1px;
`;

export const Title = styled.Text`
  flex: 1;
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
  margin-top: 15px;
`;

