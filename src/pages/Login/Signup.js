import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container, Input, Button, ButtonText, Error, ButtonSignup, ButtonTextSignup } from "./styles";
import { Creators as AuthActions } from "~/store/ducks/auth";
import { ActivityIndicator } from "react-native";
import { navigate } from "~/services/navigation";

const Signup = ({ signupRequest, auth: { loading, error } }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async () => {
    signupRequest({ name, email, password });
  }

  const goLogin = () => {
    navigate('Login')
  }

  return (
    <Container>
        {error && (
          <Error>Por favor, preencha todos os campos abaixo</Error>
        )}

        <Input
          value={name}
          onChangeText={text => setName(text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome"
        />

        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
        />

        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Digite sua senha"
        />

        <Button onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Cadastrar</ButtonText>
          )}
        </Button>
        <ButtonSignup onPress={goLogin}>
          <ButtonTextSignup>Já tenho uma conta</ButtonTextSignup>
        </ButtonSignup>
      </Container>
  )
}

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
