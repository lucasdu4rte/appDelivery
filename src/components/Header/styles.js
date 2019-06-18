import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from 'styled-components/native';

import { colors, metrics } from "~/styles";

export const Background = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
`;

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    // borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.lighter
  },

  icon: {
    color: colors.lighter
  }
});

export default styles
