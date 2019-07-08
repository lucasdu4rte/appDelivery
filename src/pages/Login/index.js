import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";

import { Container, Background, Logo } from "./styles";

import fundoImage from "~/images/fundo.jpg";
import logoImage from "~/images/logo.png";
import Login from "./Login";

const LoginContainer = (props) => (
  <Container noPadding>
    <Background source={fundoImage} />
    <LinearGradient
      style={{ flex: 1 }}
      colors={["transparent", "rgba(0, 0, 0, 1)"]}
    >
      <Container backgroundColor="transparent">
        <Logo source={logoImage} />

        <Login {...props} />
      </Container>
    </LinearGradient>
  </Container>
);

export default LoginContainer;
