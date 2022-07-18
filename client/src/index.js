import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
