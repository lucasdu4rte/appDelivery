import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActivityIndicator } from "react-native";

import {
  Container,
  Input,
  Button,
  ButtonText,
  Error,
  ButtonSignup,
  ButtonTextSignup
} from "./styles";
import { Creators as AuthActions } from "~/store/ducks/auth";
import { navigate } from "~/services/navigation";

class Login extends Component {

  state = { email: "lucasdu4rte@gmail.com", password: "11223344l" };

  handleSubmit = async () => {
    const { loginRequest } = this.props;
    const { email, password } = this.state;

    loginRequest({ email, password });
  };

  goSignup = () => {
    navigate("Signup");
  };

  render() {
    const { email, password } = this.state;
    const {
      auth,
      auth: { loading, error }
    } = this.props;

    return (
      <Container>
        {error && (
          <Error>Email ou senha incorreto, por favor tente novamente</Error>
        )}

        <Input
          value={email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
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
          <ButtonTextSignup>Criar Conta</ButtonTextSignup>
        </ButtonSignup>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
