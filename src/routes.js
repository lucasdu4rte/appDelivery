import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import Repositories from '~/pages/Repositories';

const Routes = createAppContainer(createSwitchNavigator({ Login, Repositories }));

export default Routes;
