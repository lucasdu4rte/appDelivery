import React, { Component } from "react";

import {
  Container,
  OrderList,
  Order,
  Info,
  Description,
  PrepareTime,
  Price,
} from "./styles";

import Header from "~/components/Header";
import { colors } from "~/styles";

class Profile extends Component {
  handleProfilePress = category => {
    // const {navigation} = this.props
    // console.tron.log('ONPRESS')
    // navigation.navigate('Sizes', { category })
  };

  render() {
    const { navigation } = this.props;
    // const category = navigation.getParam("category");
    const items = [
      {
        id: Math.random(),
        photo_url: "",
        datetime: "Ontem às 17h",
        description: "Pedido #1",
        price: 42
      },
      {
        id: Math.random(),
        photo_url: "",
        datetime: "Há 1 semena",
        description: "Pedido #2",
        price: 42
      },
      {
        id: Math.random(),
        photo_url: "",
        datetime: "Há 2 meses",
        description: "Pedido #3",
        price: 29
      }
    ];
    return (
      <Container>
        <Header title="Carrinho" leftComponent="R$107,00" />
        <OrderList
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Order
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
              <Info>
                <Description>{item.description}</Description>
                <PrepareTime>{item.datetime}</PrepareTime>
                <Price>
                  R$
                  {Number(item.price)
                    .toFixed(2)
                    .replace(".", ",")}
                </Price>
              </Info>
            </Order>
          )}
        />
      </Container>
    );
  }
}

// Profile.navigationOptions = {
//   title: 'Selecione um tipo',
//   headerRight: (
//     <TouchableOpacity onPress={() => {}}>
//       <Icon name="shopping-bag" size={16} style={styles.icon} />
//     </TouchableOpacity>
//   )
// }

export default Profile;
