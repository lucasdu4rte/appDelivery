import styled from 'styled-components/native'

export const Container = styled.View`
  flex:1;
  background: ${({backgroundColor}) => backgroundColor || '#000'};
  align-items: stretch;
  justify-content: center;
  padding: ${({noPadding}) => noPadding ? '0' : '30px'};
`

export const Background = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
`;

export const Logo = styled.Image`
  /* position: absolute;
  left: 0;
  top: 0; */
  align-self: center;
  margin-bottom: 30px;
  width: 72px;
  height: 72px;
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

export const Button = styled.TouchableOpacity`
  background: #e5283e;
  border-radius: 3px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`

export const ButtonSignup = styled.TouchableOpacity`
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`

export const ButtonTextSignup = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
`

export const Error = styled.Text`
  color: #e74c3c;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px #000;
`
