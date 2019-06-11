import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActivityIndicator } from "react-native";

import {
  Container,
  PageTitle,
  CategoryList,
  Category,
  Cover,
  Info,
  Title,
  Description,
  Count
} from "./styles";

import { Creators as TypesActions } from "~/store/ducks/types";

class Categories extends Component {
  async componentDidMount() {
    const { loadTypesRequest } = this.props;
    loadTypesRequest();
  }

  render() {
    const { types } = this.props;
    console.tron.log("types", types);

    return (
      <Container>
        <CategoryList
          ListHeaderComponent={() => <PageTitle>Pizzaria Don Juan</PageTitle>}
          data={types.data}
          keyExtractor={ty => String(ty.id)}
          renderItem={({ item: category }) => (
            <Category
              onPress={() => {}}
              style={{
                shadowColor: "#bdc3c7",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,

                elevation: 15,
              }}
            >
              <Cover source={{ uri: category.photo_url }} />
              <Info>
                <Title>{category.type}</Title>
                <Description>{category.description}</Description>
                <Count>{`10 mins`}</Count>
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

const mapStateToProps = state => ({
  types: state.types
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TypesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
