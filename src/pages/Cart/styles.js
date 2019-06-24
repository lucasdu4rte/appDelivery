import styled from "styled-components/native";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { colors } from "~/styles";

export const Container = styled.View`
  flex: 1;
  /* background: #ecf0f1; */
`;

export const ProductList = styled.FlatList.attrs({
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

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 1
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
  width: 35px;
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
  color: ${colors.dark};
  margin-top: 5px;
  font-weight: 600;
  font-size: 13px;
`;

export const PrepareTime = styled.Text`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
  font-size: 13px;
  color: ${colors.darkTransparent};
`;

export const Price = styled.Text`
  color: ${colors.darker};
  font-size: 18px;
  font-weight: bold;
  margin-top: 3px;
`;

export const Actions = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const ButtonsContainer = styled.View`
  margin-bottom: ${getBottomSpace()};
  padding-left: 30px;
  padding-right: 30px;
`;

export const ButtonRemove = styled.TouchableOpacity``;

export const ButtonMore = styled.TouchableOpacity`
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
`;

export const ButtonText = styled.Text`
  color: red;
  font-size: 16px;
`;

export const ButtonGoOrder = styled.TouchableOpacity`
  background: red;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtonTextGoOrder = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextRemove = styled.Text`
  color: red;
`;
