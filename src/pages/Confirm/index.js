import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, ActivityIndicator } from "react-native";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CartActions } from "~/store/ducks/cart";

import {
  Container,
  ButtonsContainer,
  ButtonGoOrder,
  ButtonTextGoOrder,
  ObservationInput,
  Input,
  FormContent
} from "./styles";

import Header from "~/components/Header";
// import { colors } from "~/styles";

import api from "~/services/api";

const shadowStyle = {
  shadowColor: "#bdc3c7",
  shadowOffset: {
    width: 0,
    height: 7
  },
  shadowOpacity: 0.6,
  shadowRadius: 9.51,
  elevation: 15
};

const Confirm = props => {
  // handleConfirmPress = async () => {
  // const { items, total } = this.props;
  // const {navigation} = this.props
  // console.tron.log(items);
  // await api.post("/orders", {
  //   total,
  //   observation: "Retirar tomate",
  //   zip_code: "13408022",
  //   address: "Rua Dona Hilda",
  //   number: "12",
  //   complement: "",
  //   neighborhood: "Paulicéia",
  //   products: items
  // });
  // navigation.navigate('Sizes', { category })
  // };
  const {
    total,
    values,
    setFieldValue,
    errors,
    isSubmitting,
    handleSubmit
  } = props;
  console.tron.log("props", props);
  return (
    <Container>
      <Header
        title="Confirmar Pedido"
        rightComponent={
          "R$" +
          Number(total)
            .toFixed(2)
            .replace(".", ",")
        }
      />
      {/* Observation */}
      <FormContent>
        <ObservationInput
          value={values.observation}
          multiline={true}
          numberOfLines={10}
          placeholder="Alguma observação?"
          style={shadowStyle}
          onChangeText={text => setFieldValue("observation", text)}
        />
        {/* CEP */}
        <Input
          value={values.zip_code}
          style={{ width: "100%", ...shadowStyle }}
          placeholder="Qual seu CEP?"
          onChangeText={text => setFieldValue("zip_code", text)}
        />
        {errors.zip_code && <Text>{errors.zip_code}</Text>}
        {/* STREET */}
        <View style={{ width: "100%", ...shadowStyle }}>
          <Input
            value={values.street}
            style={{ width: "80%", ...shadowStyle }}
            placeholder="Rua"
            onChangeText={text => setFieldValue("street", text)}
          />
          {errors.street && <Text>{errors.street}</Text>}
          {/* NUMBER */}
          <Input
            value={values.number}
            style={{ width: "20%", ...shadowStyle }}
            placeholder="Nº"
            onChangeText={text => setFieldValue("number", text)}
          />
          {errors.number && <Text>{errors.number}</Text>}
        </View>
        {/* NEIGHBORHOOD */}
        <Input
          value={values.neighborhood}
          style={{ width: "100%", ...shadowStyle }}
          placeholder="Bairro"
          onChangeText={text => setFieldValue("neighborhood", text)}
        />
        {errors.neighborhood && <Text>{errors.neighborhood}</Text>}
        <ButtonsContainer>
          <ButtonGoOrder
            // onPress={() => navigation.navigate("Profile")}
            onPress={() => handleSubmit()}
          >
            <View>
              {isSubmitting ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <ButtonTextGoOrder>FINALIZAR</ButtonTextGoOrder>
                  <Icon
                    name="chevron-right"
                    size={14}
                    color="#fff"
                    style={{ marginLeft: 10 }}
                  />
                </View>
              )}
            </View>
          </ButtonGoOrder>
        </ButtonsContainer>
      </FormContent>
    </Container>
  );
};

const mapStateToProps = state => ({
  items: state.cart,
  total: state.cart.reduce((acc, currentItem) => currentItem.price + acc, 0)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CartActions }, dispatch);

const FormWrapConfirm = withFormik({
  mapPropsToValues: () => ({
    // observation: "",
    // zip_code: "",
    // street: "",
    // number: "",
    // neighborhood: ""
    // complement: "",
    observation: "Retirar tomate",
    zip_code: "13408022",
    street: "Rua Dona Hilda",
    number: "12",
    neighborhood: "Paulicéia"
  }),
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    zip_code: Yup.string().required("Este campo é obrigatório"),
    street: Yup.string().required("Este campo é obrigatório"),
    number: Yup.string().required("Este campo é obrigatório"),
    neighborhood: Yup.string().required("Este campo é obrigatório")
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    console.tron.log(values);
    try {
      const { data } = await api.post("/orders", {
        total: props.total,
        observation: values.observation,
        zip_code: values.zip_code,
        address: values.street,
        number: values.number,
        complement: "",
        neighborhood: values.neighborhood,
        products: props.items
      });
      props.navigation.navigate("Profile", { order: data });
    } catch (error) {
      console.tron.log(error.message);
      setSubmitting(false);
      setErrors({ message: error.message });
    }

    // apiService.post('/authenticate', values)
    //   .then(/* sucesso */)
    //   .catch(err => {
    //     setSubmitting(false);
    //     setErrors({ message: err.message });
    //   });
  }
})(Confirm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormWrapConfirm);
