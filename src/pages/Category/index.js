import React, { Component } from "react";

import { Container, ProductList, Product, Photo, Title } from "./styles";
import Header from "~/components/Header";

import { TouchableOpacity } from "react-native";
import styles from "~/components/Header/styles";

class Category extends Component {
  handleCategoryPress = (category) => {
    const {navigation} = this.props
    console.tron.log('ONPRESS')
    navigation.navigate('Sizes', { category })
  }

  render() {
    const { navigation } = this.props;
    const category = navigation.getParam("category");
    return (
      <Container>
        <Header title={category.type} />
        <ProductList
          numColumns={2}
          data={category.products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Product
              onPress={() => this.handleCategoryPress(category)}
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
              <Title>{product.description}</Title>
            </Product>
          )}
        />
      </Container>
    );
  }
}

// Category.navigationOptions = {
//   title: 'Selecione um tipo',
//   headerRight: (
//     <TouchableOpacity onPress={() => {}}>
//       <Icon name="shopping-bag" size={16} style={styles.icon} />
//     </TouchableOpacity>
//   )
// }

export default Category
