/* eslint-disable import/no-cycle */
import React, { createContext } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { NavBar } from './components/navBar/NavBar';

const app = initializeApp({
  apiKey: 'AIzaSyDFW_OV_MBJIOiZ9RCX97P4Gz28N6vWB58',
  authDomain: 'crm-for-noname-digital.firebaseapp.com',
  projectId: 'crm-for-noname-digital',
  storageBucket: 'crm-for-noname-digital.appspot.com',
  messagingSenderId: '539792395634',
  appId: '1:539792395634:web:ff22c7362822735ebee1eb',
});

export const Context = createContext(null);

const auth = getAuth(app);
const firestore = getFirestore();

export const App: React.FC = () => {
  return (
    <Context.Provider value={{ auth, firestore }}>
      <div className="app">
        <NavBar />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </Context.Provider>
  );
};

// import ClockLoader from 'react-spinners/ClockLoader';

// <ClockLoader
//   color="#d63636"
// />
