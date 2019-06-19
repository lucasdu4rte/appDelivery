import styled from "styled-components/native";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { colors } from "~/styles";

export const Container = styled.View`
  flex: 1;
  /* background: #ecf0f1; */
  padding-left: 30px;
  padding-right: 30px;
`;

export const ObservationInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`

export const ButtonsContainer = styled.View`
  flex: 1;
`;

export const ButtonGoOrder = styled.TouchableOpacity`
  background: red;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextGoOrder = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
