import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinearGradient from "react-native-linear-gradient";

import {
  Container,
  Input,
  Button,
  ButtonText,
  Error,
  ButtonSignup,
  ButtonTextSignup,
  Background,
  Logo
} from "./styles";

import fundoImage from "~/images/fundo.jpg";
import logoImage from "~/images/logo.png";
import { Creators as AuthActions } from "~/store/ducks/auth";
import { ActivityIndicator } from "react-native";

const Signup = ({ signupRequest, navigation, auth: { loading, error } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    signupRequest({ name, email, password });
  };

  const goLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container noPadding>
      <Background source={fundoImage} />
      <LinearGradient
        style={{ flex: 1 }}
        colors={["transparent", "rgba(0, 0, 0, 1)"]}
      >
        <Container backgroundColor="transparent">
          <Logo source={logoImage} />

          {error && <Error>Por favor, preencha todos os campos abaixo</Error>}

          <Input
            autoFocus
            value={name}
            onChangeText={text => setName(text)}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu nome completo"
          />

          <Input
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />

          <Input
            value={password}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <Button onPress={() => handleSubmit()}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <ButtonText>Cadastrar</ButtonText>
            )}
          </Button>
          <ButtonSignup onPress={() => goLogin()}>
            <ButtonTextSignup>Já tenho uma conta</ButtonTextSignup>
          </ButtonSignup>
        </Container>
      </LinearGradient>
    </Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
