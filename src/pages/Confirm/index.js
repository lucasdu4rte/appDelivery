import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, ActivityIndicator } from "react-native";
import { withFormik } from "formik";
import * as Yup from "yup";
import getCep from "cep-promise";
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

const debounceEvent = (callback, time = 250, interval) => (...args) =>
  clearTimeout(interval, (interval = setTimeout(callback, time, ...args)));

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

const Confirm = ({
  total,
  values,
  setFieldValue,
  errors,
  isSubmitting,
  handleSubmit
}) => {
  const [loadingCep, setLoadingCep] = useState(false);
  const totalFormated = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(total);

  const getAddress = debounceEvent(cepText => {
    if (cepText.length >= 8) {
      setLoadingCep(true);
      getCep(cepText).then(response => {
        console.tron.log(response);
        setFieldValue('street', response.street)
        setFieldValue('neighborhood', response.neighborhood)

        setLoadingCep(false);
      });
    }
  });

  return (
    <Container>
      <Header title="Confirmar Pedido" rightComponent={totalFormated} />
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
        <View style={{ flexDirection: "row" }}>
          <Input
            value={values.zip_code}
            style={{ width: "90%", ...shadowStyle }}
            placeholder="Qual seu CEP?"
            inlineImageLeft='search_icon'
            keyboardType="number-pad"
            onChangeText={text => {
              setFieldValue("zip_code", text);
              getAddress(text);
            }}
          />
          <View style={{ width: "10%", alignItems: "center", marginTop: 15 }}>
            {loadingCep && <ActivityIndicator />}
          </View>
        </View>
        {errors.zip_code && <Text>{errors.zip_code}</Text>}
        {/* STREET */}
        <View style={{ flexDirection: "row", width: "100%", ...shadowStyle }}>
          <Input
            value={values.street}
            style={{ width: "70%", marginRight: "5%", ...shadowStyle }}
            placeholder="Rua"
            onChangeText={text => setFieldValue("street", text)}
          />
          {/* NUMBER */}
          <Input
            value={values.number}
            style={{ width: "25%", ...shadowStyle }}
            placeholder="Nº"
            keyboardType="number-pad"
            onChangeText={text => setFieldValue("number", text)}
          />
        </View>
        {(errors.street || errors.number) && (
          <Text>Os campos Rua e Número são obrigatórios</Text>
        )}

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
    observation: "",
    zip_code: "",
    street: "",
    number: "",
    neighborhood: "",
    complement: ""
    // observation: "Retirar tomate",
    // zip_code: "13408022",
    // street: "Rua Dona Hilda",
    // number: "12",
    // neighborhood: "Paulicéia"
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
