import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  PageTitle,
  CategoryList,
  Category,
  Cover,
  Info,
  Title,
  Description,
  PrepareTime,
  Count,
  ButtonMenu
} from "./styles";

import { Creators as TypesActions } from "~/store/ducks/types";

import Header from "~/components/Header";
import { colors } from "~/styles";
import { Text, ActivityIndicator } from "react-native";

class Categories extends Component {
  async componentDidMount() {
    const { loadTypesRequest } = this.props;
    loadTypesRequest();
  }

  handleCategoryPress = category => {
    const { navigation } = this.props;
    navigation.navigate("Products", { category });
  };

  render() {
    const { types } = this.props;

    return (
      <Container>
        <Header
          leftComponent={
            <ButtonMenu onPress={() => this.props.navigation.openDrawer()}>
              <Text style={{ color: colors.light }}>
                <Icon
                  name="bars"
                  size={16}
                  style={{ marginRight: 5, color: colors.light }}
                />{" "}
                Menu
              </Text>
            </ButtonMenu>
          }
          title="Pizzaria Don Juan"
        />
        <CategoryList
          ListHeaderComponent={() => types.loading && <ActivityIndicator size="small" color={colors.white} />}
          data={types.data}
          keyExtractor={ty => String(ty.id)}
          renderItem={({ item: category }) => (
            <Category
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
              <Cover source={{ uri: category.photo_url }} />
              <Info>
                <Title>{category.type}</Title>
                <Description>{category.description}</Description>
                <PrepareTime>
                  <Icon
                    name="clock-o"
                    size={16}
                    style={{ marginRight: 5, color: colors.darkTransparent }}
                  />
                  <Count>{`${category.prepare_time} mins`}</Count>
                </PrepareTime>
              </Info>
            </Category>
          )}
        />
        {/* {types.loading ? (
          <ActivityIndicator size="small" />
        ) : (
          types.data.map(ty => <Text key={ty.id}>{ty.type}</Text>)
        )} */}
      </Container>
    );
  }
}

Categories.navigationOptions = {};

const mapStateToProps = state => ({
  types: state.types
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TypesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
