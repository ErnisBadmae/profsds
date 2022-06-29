import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/store';
import ru_RU from 'antd/lib/locale/ru_RU';

import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //     <React.StrictMode>
    <Provider store={store}>
        <ConfigProvider locale={ru_RU}>
            <App />
        </ConfigProvider>
    </Provider>
    //     </React.StrictMode>
);
