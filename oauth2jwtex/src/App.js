import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './persist-store';
import Login from './component/Login';
import Logout from './component/Logout';
import User from './component/User';
import Oauth from './component/Oauth';

export const persistor = persistStore(store);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exect path="/oauth/redirect/:token" element={<Oauth />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/user" element={<User />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
