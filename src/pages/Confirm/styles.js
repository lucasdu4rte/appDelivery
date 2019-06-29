import styled from "styled-components/native";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { colors } from "~/styles";

export const Container = styled.View`
  flex: 1;
`;

export const FormContent = styled.View`
  padding: 20px;
`;

export const ObservationInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  /* box-shadow: 2px 2px 20px #000; */
  background: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  height: 130px;
  font-size: 16px;
  color: #333;
  margin-bottom: 13px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  /* box-shadow: 5px 2px 5px #000; */
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 13px;
`
export const ButtonsContainer = styled.View`
  margin-top: 20px;
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
