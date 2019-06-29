import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from "react-navigation";

// StackNavigator
import Login from "~/pages/Login";
import Signup from "~/pages/Login/Signup";

// StackNavigator
import Categories from "~/pages/Categories";
import Products from "~/pages/Products";
import Sizes from "~/pages/Sizes";
import Cart from "~/pages/Cart";
import Confirm from "~/pages/Confirm";

// Drawer
import Profile from "~/pages/Profile";

const AuthStack = createStackNavigator(
  {
    Login,
    Signup,
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
)

const MainStack = createStackNavigator(
  {
    Categories,
    Products,
    Sizes,
    Cart,
    Confirm,
  },
  {
    initialRouteName: "Categories",
    headerMode: "none"
  }
)

const Drawer = createDrawerNavigator({
  Home: MainStack,
  Carrinho: Cart,
  Perfil: Profile,
  Sair: Login,
}, {
  initialRouteName: "Home"
})

function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createStackNavigator(
      {
        Drawer,
        AuthStack,
      },
      {
        initialRouteName: isLoggedIn ? "Drawer" : "AuthStack",
        mode: "modal",
        headerMode: "none"
      }
    )
  );
}

export default createNavigator;
