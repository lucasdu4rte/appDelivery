import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { colors } from "~/styles";

export const Container = styled.View`
  flex: 1;
  /* background: #ecf0f1; */
`;

export const CategoryList = styled.FlatList.attrs({
  contentContainerStyle: {
    // paddingTop: getStatusBarHeight() + 30,
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

export const ButtonMenu = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
`;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  margin: 20px 20px 0 20px;
  border-radius: 6px;
  background: #fff;
  height: 110px;
`;

export const Cover = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 6px;
`;

export const Info = styled.View`
  margin-left: 45px;
  margin-right: 35px;
`;

export const Title = styled.Text`
  /* color: #fff; */
  color: ${colors.darker};
  font-size: 13px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${colors.darkTransparent};
  margin-top: 5px;
  font-size: 12px;
`;

export const PrepareTime = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const Count = styled.Text`
  color: ${colors.darkTransparent};
  font-size: 13px;
  margin-top: 3px;
`;
