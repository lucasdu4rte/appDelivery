import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActivityIndicator, View } from "react-native";

import {
  Input,
  Button,
  ButtonText,
  Error,
  ButtonSignup,
  ButtonTextSignup,
} from "./styles";

import { Creators as AuthActions } from "~/store/ducks/auth";

class Login extends Component {
  state = {
    // email: "lucasdu4rte@gmail.com",
    // password: "11223344l"

    email: "",
    password: ""
  };

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
      <View>
        {error && (
          <Error>Email ou senha incorreto, por favor tente novamente.</Error>
        )}

        <Input
          value={email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
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
      </View>
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
