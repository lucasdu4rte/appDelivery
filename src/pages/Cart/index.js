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
    const { navigation, items, total, removeItem } = this.props;
    // const category = navigation.getParam("category");

    return (
      <Container>
        <Header
          title="Carrinho"
          rightComponent={
            "R$" +
            Number(total)
              .toFixed(2)
              .replace(".", ",")
          }
        />
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
                <ButtonRemove onPress={() => removeItem(item)}>
                  <ButtonTextRemove>
                    <Icon name="trash" size={20} />
                  </ButtonTextRemove>
                </ButtonRemove>
              </Actions>
            </Product>
          )}
        />
        <ButtonsContainer>
          <ButtonMore onPress={() => navigation.navigate("Categories")}>
            <ButtonText>Adicionar mais itens</ButtonText>
          </ButtonMore>

          <ButtonGoOrder onPress={() => navigation.navigate("Confirm")}>
            <ButtonTextGoOrder>Realizar Pedido</ButtonTextGoOrder>
            <Icon
              name="chevron-right"
              size={14}
              color="#fff"
              style={{ marginLeft: 10 }}
            />
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
  items: state.cart,
  total: state.cart.reduce((acc, currentItem) => currentItem.price + acc, 0)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
