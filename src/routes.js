import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "~/pages/Login";
import Categories from "~/pages/Categories";
import Signup from "~/pages/Login/Signup";
import Products from "~/pages/Products";
import Sizes from "~/pages/Sizes";
import Cart from "~/pages/Cart";
import Confirm from "~/pages/Confirm";
import Profile from "~/pages/Profile";

function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createStackNavigator(
      // createSwitchNavigator(
      {
        Categories,
        Login,
        Signup,
        Products,
        Sizes,
        Cart,
        Confirm,
        Profile
      },
      {
        initialRouteName:
          isLoggedIn
          ? // "Confirm"
            "Categories"
          :
          "Login",
          mode: 'modal',
          headerMode: 'none'
      }
    )
  );
}

export default createNavigator;
