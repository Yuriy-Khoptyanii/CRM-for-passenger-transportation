import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  HashRouter, Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { App, Context } from './App';
import { EnterForm } from './components/enterForm/EnterForm';
import { InformationPage } from './components/informationPage/InformationPage';

function PrivateRoute() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<EnterForm />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/InformationPage" element={<InformationPage />} />
        </Route>
        <Route index element={<EnterForm />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
