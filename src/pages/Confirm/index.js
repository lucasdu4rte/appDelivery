import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  ButtonsContainer,
  ButtonGoOrder,
  ButtonTextGoOrder,
  ObservationInput,
  Input,
  FormContent
} from "./styles";

import Header from "~/components/Header";
import { colors } from "~/styles";
import { View } from "react-native";

class Confirm extends Component {
  handleConfirmPress = category => {
    // const {navigation} = this.props
    // console.tron.log('ONPRESS')
    // navigation.navigate('Sizes', { category })
  };

  render() {
    const { navigation } = this.props;
    // const category = navigation.getParam("category");

    return (
      <Container>
        <Header title="Carrinho" leftComponent="R$107,00" />
        {/* Observation */}
        <FormContent>
          <ObservationInput
            multiline={true}
            numberOfLines={10}
            placeholder="Alguma observação?"
          />
          {/* CEP */}
          <Input style={{ width: "100%" }} placeholder="Qual seu CEP?" />
          {/* STREET */}
          <View>
            <Input style={{ width: "80%" }} placeholder="Rua" />
            {/* NUMBER */}
            <Input style={{ width: "20%" }} placeholder="Nº" />
          </View>
          {/* NEIGHBORHOOD */}
          <Input style={{ width: "100%" }} placeholder="Bairro" />

          <ButtonsContainer>
            <ButtonGoOrder onPress={() => navigation.navigate("Profile")}>
              <ButtonTextGoOrder>
                FINALIZAR
                <Icon name="chevron-right" size={16} style={{ marginLeft: 5 }} />
              </ButtonTextGoOrder>
            </ButtonGoOrder>
          </ButtonsContainer>
        </FormContent>
      </Container>
    );
  }
}

export default Confirm;
