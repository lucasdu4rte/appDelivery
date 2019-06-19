import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import headerImage from "~/images/header-background.png"
import styles, { Background } from "./styles";

import { withNavigation } from 'react-navigation';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleGoCart = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  render() {
    const { title, leftComponent } = this.props;
    return (
      <View style={styles.container}>
        <Background source={headerImage} />

        <View style={styles.left}>
          <TouchableOpacity
            hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
            onPress={this.handleBack}
          >
            <Icon name="arrow-left" size={16} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{title}</Text>
        {leftComponent ? <Text style={styles.title}>
          {leftComponent}
        </Text> :
        <TouchableOpacity onPress={() => this.handleGoCart()}>
          <Icon name="shopping-bag" size={16} style={styles.icon} />
        </TouchableOpacity>
      }
      </View>
    );
  }
}

export default withNavigation(Header);
