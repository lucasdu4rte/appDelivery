import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CartActions } from "~/store/ducks/cart";

import {
  Container,
  SizeList,
  Size,
  Photo,
  Title,
  Price,
  Details
} from "./styles";
import Header from "~/components/Header";
import api from "~/services/api";
import { colors } from "~/styles";

class Sizes extends Component {
  state = {
    sizes: [],
    loading: true,
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const product = navigation.getParam("product");

    const { data: sizes } = await api.get(`sizes?product_id=${product.id}`);

    this.setState({
      sizes: sizes.map(size => ({
        ...size,
        priceFormated: new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL"
        }).format(size.price)
      })),
      loading: false,
    });
  };

  handleOnPressSize = size => {
    const { addItem, navigation } = this.props;
    const product = navigation.getParam("product");

    addItem({
      ...product,
      size_id: size.id,
      size: size.description,
      price: size.price
    });

    navigation.navigate("Cart");
  };

  render() {
    const { sizes, loading } = this.state;
    return (
      <Container>
        <Header title="Selecionar um tamanho" />
        <SizeList
          ListHeaderComponent={() => loading && <ActivityIndicator size="small" color={colors.white} />}
          numColumns={2}
          data={sizes}
          keyExtractor={size => String(size.id)}
          renderItem={({ item: size }) => (
            <Size
              onPress={() => this.handleOnPressSize(size)}
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
              <Photo source={{ uri: size.photo_url }} />
              <Details>
                <Title>{size.description}</Title>
                <Price>{size.priceFormated}</Price>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...CartActions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes);
