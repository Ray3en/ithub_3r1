import {Provider} from 'react-redux'
import { persist, store } from './store';
import { Count } from './components/Count';
import String from './components/String';
import { Users } from './components/Users';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Count/>
        <String/>
        <Users/>
      </PersistGate>
    </Provider>
  );
}

export default App;
