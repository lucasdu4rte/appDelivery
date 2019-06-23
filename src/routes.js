import {
  createAppContainer,
  createSwitchNavigator
  // createStackNavigator
} from "react-navigation";

import Login from "~/pages/Login";
import Categories from "~/pages/Categories";
import Signup from "~/pages/Login/Signup";
import Category from "~/pages/Category";
import Sizes from "~/pages/Sizes";
import Cart from "~/pages/Cart";

function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    // createStackNavigator(
    createSwitchNavigator(
      { Categories, Login, Signup, Category, Sizes, Cart },
      {
        initialRouteName: isLoggedIn ? "Categories" : "Login"
      }
    )
  );
}

export default createNavigator;
