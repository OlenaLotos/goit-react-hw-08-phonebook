import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App.jsx';
import './index.css';
import store from 'Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store.store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
