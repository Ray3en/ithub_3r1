import { Provider } from 'react-redux'
import { store } from './store';
import Users from './components/User';
import Footer from './components/Footer';
import './index.css'
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <Users/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
