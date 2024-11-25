import { Provider } from 'react-redux'
import { store } from './store';
import Users from './components/User';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users/>
      </div>
    </Provider>
  );
}

export default App;
