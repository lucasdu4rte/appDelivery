import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CartActions } from "~/store/ducks/cart";

import {
  Container,
  ProductList,
  Product,
  Cover,
  Actions,
  Info,
  ButtonRemove,
  ButtonText,
  Description,
  PrepareTime,
  Price,
  ButtonMore,
  ButtonGoOrder,
  ButtonTextGoOrder,
  ButtonTextRemove,
  ButtonsContainer
} from "./styles";

import Header from "~/components/Header";
// import { colors } from "~/styles";

class Cart extends Component {
  handleCartPress = category => {
    // const {navigation} = this.props
    // console.tron.log('ONPRESS')
    // navigation.navigate('Sizes', { category })
  };

  render() {
    const { cart: items, removeItem } = this.props;
    console.tron.log("items", items);
    // const category = navigation.getParam("category");

    return (
      <Container>
        <Header title="Carrinho" leftComponent="R$107,00" />
        <ProductList
          // data={[]}
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product
              // onPress={() => this.handleCategoryPress(category)}
              style={{
                shadowColor: "#bdc3c7",
                shadowOffset: {
                  width: 0,
                  height: 7
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,
                elevation: 15
              }}
            >
              <Cover source={{ uri: item.photo_url }} />
              <Info>
                <Description>{item.description}</Description>
                <PrepareTime>{item.size}</PrepareTime>
                <Price>
                  R$
                  {Number(item.price)
                    .toFixed(2)
                    .replace(".", ",")}
                </Price>
              </Info>
              <Actions>
                <ButtonRemove>
                  <ButtonTextRemove>
                    <Icon name="trash" size={20} />
                  </ButtonTextRemove>
                </ButtonRemove>
              </Actions>
            </Product>
          )}
        />
        <ButtonsContainer>
          <ButtonMore>
            <ButtonText>Adicionar mais itens</ButtonText>
          </ButtonMore>
          <ButtonGoOrder>
            <ButtonTextGoOrder>
              Realizar Pedido
              <Icon name="chevron-right" size={16} style={{marginLeft: 5}} />
            </ButtonTextGoOrder>
          </ButtonGoOrder>
        </ButtonsContainer>
      </Container>
    );
  }
}

// Cart.navigationOptions = {
//   title: 'Selecione um tipo',
//   headerRight: (
//     <TouchableOpacity onPress={() => {}}>
//       <Icon name="shopping-bag" size={16} style={styles.icon} />
//     </TouchableOpacity>
//   )
// }

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
