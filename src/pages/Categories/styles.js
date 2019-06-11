import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  /* align-items: center;
  justify-content: center;
  padding: 30px; */
`;

export const CategoryList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + 30,
    paddingBottom: 30
  }
})``;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  /* color: #fff; */
  color: #111;
`;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  margin: 20px 20px 0 20px;
  border-radius: 4px;
  background: #fff;
`;

export const Cover = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;

export const Info = styled.View`
  margin-left: 45px;
  margin-right: 35px;
`;

export const Title = styled.Text`
  /* color: #fff; */
  color: #111;
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.Text`
  /* color: #fff; */
  margin-top: 5px;
  color: #111;
  font-size: 13px;
  text-align: justify;
`;


export const Count = styled.Text`
  color: #95a5a6;
  font-size: 13px;
  margin-top: 3px;
`;
