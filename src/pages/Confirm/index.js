import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CartActions } from "~/store/ducks/cart";

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
// import { colors } from "~/styles";
import { View } from "react-native";
import api from "~/services/api";

const shadowStyle = {
  shadowColor: "#bdc3c7",
  shadowOffset: {
    width: 0,
    height: 7
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15
};

class Confirm extends Component {
  handleConfirmPress = async () => {
    const { navigation, items, total } = this.props;
    // const {navigation} = this.props
    console.tron.log(items)
    await api.post('/orders', {
      total,
      observation: "Retirar tomate",
      zip_code: "13408022",
      address: "Rua Dona Hilda",
      number: "12",
      complement: "",
      neighborhood: "Paulicéia",
      products: items
    })
    // navigation.navigate('Sizes', { category })
  };

  render() {
    const { navigation, total } = this.props;
    // const category = navigation.getParam("category");

    return (
      <Container>
        <Header
          title="Carrinho"
          leftComponent={
            "R$" +
            Number(total)
              .toFixed(2)
              .replace(".", ",")
          }
        />
        {/* Observation */}
        <FormContent>
          <ObservationInput
            multiline={true}
            numberOfLines={10}
            placeholder="Alguma observação?"
            style={shadowStyle}
          />
          {/* CEP */}
          <Input
            style={{ width: "100%", ...shadowStyle }}
            placeholder="Qual seu CEP?"
          />
          {/* STREET */}
          <View style={{ width: "100%", ...shadowStyle }}>
            <Input style={{ width: "80%", ...shadowStyle }} placeholder="Rua" />
            {/* NUMBER */}
            <Input style={{ width: "20%", ...shadowStyle }} placeholder="Nº" />
          </View>
          {/* NEIGHBORHOOD */}
          <Input
            style={{ width: "100%", ...shadowStyle }}
            placeholder="Bairro"
          />

          <ButtonsContainer>
            <ButtonGoOrder
            // onPress={() => navigation.navigate("Profile")}
            onPress={this.handleConfirmPress}
            >
              <ButtonTextGoOrder>
                FINALIZAR
                <Icon
                  name="chevron-right"
                  size={16}
                  style={{ marginLeft: 5 }}
                />
              </ButtonTextGoOrder>
            </ButtonGoOrder>
          </ButtonsContainer>
        </FormContent>
      </Container>
    );
  }
}

// export default Confirm;
const mapStateToProps = state => ({
  items: state.cart,
  total: state.cart.reduce((acc, currentItem) => currentItem.price + acc, 0)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
