import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Categories from "~/pages/Categories";
import Signup from "~/pages/Login/Signup";

const Routes = createAppContainer(
  createSwitchNavigator({ Login, Signup, Categories })
);

export default Routes;
