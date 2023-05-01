import ReactDOM from 'react-dom/client';
import React from "react";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AuthProvider} from "./context/AuthStateContext";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
