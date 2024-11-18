import {Provider} from 'react-redux'
import { store } from './store';
import { Count } from './components/Count';
import String from './components/String';
import { Users } from './components/Users';

function App() {
  return (
    <Provider store={store}>
      <Count/>
      <String/>
      <Users/>
    </Provider>
  );
}

export default App;
