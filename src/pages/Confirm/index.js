import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  ButtonsContainer,
  ButtonGoOrder,
  ButtonTextGoOrder,
  ObservationInput,
  Input
} from "./styles";

import Header from "~/components/Header";
import { colors } from "~/styles";

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
        <ObservationInput
          multiline={true}
          numberOfLines={4}
          placeholder="Alguma observação?"
        />
        {/* CEP */}
        <Input style={{ width: "100%" }} placeholder="Qual seu CEP?" />
        {/* STREET */}
        <Input style={{ width: "80%" }} placeholder="Rua" />
        {/* NUMBER */}
        <Input style={{ width: "20%" }} placeholder="Nº" />
        {/* NEIGHBORHOOD */}
        <Input style={{ width: "100%" }} placeholder="Bairro" />

        <ButtonsContainer>
          <ButtonGoOrder>
            <ButtonTextGoOrder>
              Realizar Pedido
              <Icon name="arrow-right" size={20} />
            </ButtonTextGoOrder>
          </ButtonGoOrder>
        </ButtonsContainer>
      </Container>
    );
  }
}

export default Confirm;
