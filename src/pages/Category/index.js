import React, { Component } from "react";

import { Container, ProductList, Product, Photo, Title } from "./styles";
import Header from "~/components/Header";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Category extends Component {
  componentDidMount() {
    const { navigation, selectedCategory } = this.props;
    // const catego = navigation.getParam("category");
    // console.tron.log(catego)
    console.tron.log(selectedCategory);
  }

  handleCategoryPress = product => {
    const { navigation } = this.props;
    console.tron.log(product);
    navigation.navigate("Sizes", { product });
  };

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
              onPress={() => this.handleCategoryPress(product)}
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
  selectedCategory: state.selectedCategory
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
