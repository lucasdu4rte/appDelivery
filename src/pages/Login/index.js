import React, { Component } from "react";

import { Container, Input, Button, ButtonText } from "./styles";
import api from "~/services/api";

class Login extends Component {
  state = { email: "", password: "" };

  handleSubmit = async () => {
    const { email, password } = this.state;

    try {
      await api.post("/sessions", {
        email,
        password
      });
    } catch (error) {
      console.tron(error);
    }
  };
  render() {
    const { email } = this.state;
    return (
      <Container>
        <Input
          value={email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}

export default Login;
