import React, { Component } from "react";

import { Container, SizeList, Size, Photo, Title, Price, Details } from "./styles";
import Header from "~/components/Header";

 class Sizes extends Component {
  render() {
    const { navigation } = this.props;
    const category = navigation.getParam("category");
    return (
      <Container>
        <Header title="Selecionar um tamanho" />
        <SizeList
          numColumns={2}
          data={category.products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Size
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
              <Photo source={{ uri: category.photo_url }} />
              <Details>
                <Title>{product.description}</Title>
                <Price>R$42,00</Price>
              </Details>
            </Size>
          )}
        />
      </Container>
    );
  }
}

// Sizes.navigationOptions = {
//   title: 'Selecionar um tamanho',
// }

export default Sizes
