import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActivityIndicator } from "react-native";
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

import { Creators as AuthActions } from "~/store/ducks/auth";
import fundoImage from "~/images/fundo.jpg";
import logoImage from "~/images/logo.png";

class Login extends Component {
  state = { email: "lucasdu4rte@gmail.com", password: "11223344l" };

  handleSubmit = async () => {
    const { loginRequest } = this.props;
    const { email, password } = this.state;

    loginRequest({ email, password });
  };

  goSignup = () => {
    const { navigation } = this.props;

    navigation.navigate("Signup");
  };

  render() {
    const { email, password } = this.state;
    const {
      auth: { loading, error }
    } = this.props;

    return (
      <Container noPadding>
        <Background source={fundoImage} />
        <LinearGradient
          style={{ flex: 1 }}
          colors={["transparent", "rgba(0, 0, 0, 1)"]}
        >
          <Container backgroundColor="transparent">

            <Logo source={logoImage} />

            {error && (
              <Error>Email ou senha incorreto, por favor tente novamente</Error>
            )}

            <Input
              value={email}
              onChangeText={text => this.setState({ email: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              autoFocus
            />
            <Input
              value={password}
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              placeholder="Senha"
            />
            <Button onPress={this.handleSubmit}>
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <ButtonText>Entrar</ButtonText>
              )}
            </Button>
            <ButtonSignup onPress={this.goSignup}>
              <ButtonTextSignup>Criar conta gratuita</ButtonTextSignup>
            </ButtonSignup>
          </Container>
        </LinearGradient>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

// Login.navigationOptions = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
