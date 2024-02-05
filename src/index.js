import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
//sentry 두 줄 추가
import App from './App';

import store from './redux/config/ConfigStore';
import { Provider } from 'react-redux';
import { PageProvider } from './components/context/PageContext';
import { CookiesProvider } from 'react-cookie';

//sentry 분석 코드

//csrf 토큰
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>

  <CookiesProvider>
    <Provider store={store}>
      <PageProvider>
        <App />
      </PageProvider>
    </Provider>
  </CookiesProvider>
);