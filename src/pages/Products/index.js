import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container, ProductList, Product, Photo, Title } from "./styles";
import Header from "~/components/Header";

import { Creators as ProductsActions } from "~/store/ducks/products";

class Products extends Component {
  componentDidMount() {
    const { navigation, loadProductsRequest } = this.props;
    const category = navigation.getParam("category");
    loadProductsRequest(category.id);
  }

  handleProductPress = product => {
    const { navigation } = this.props;

    navigation.navigate("Sizes", { product });
  };

  render() {
    const { navigation, products } = this.props;

    const category = navigation.getParam("category");
    return (
      <Container>
        <Header title={category.type} />
        <ProductList
          numColumns={2}
          data={products.data}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Product
              onPress={() => this.handleProductPress(product)}
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

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
