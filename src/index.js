import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import store from '~/store';

import Routes from '~/routes';
import { setNavigator } from '~/services/navigation';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
