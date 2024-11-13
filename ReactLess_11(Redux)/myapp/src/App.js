import {Provider} from 'react-redux'
import { store } from './store';
import { Count } from './components/Count';
import String from './components/String';

function App() {
  return (
    <Provider store={store}>
      <Count/>
      <String/>
    </Provider>
  );
}

export default App;
