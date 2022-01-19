import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import UserProvider from './contexts/userContext';

import Layout from './components/layout/Layout';

import Home from './pages/home/Home';
import Details from './pages/details/Details';
import NotFound from './pages/errors/notFound/NotFound';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/car/:id" element={<Details />} />
            <Route element={<NotFound />} />
          </Routes>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  </div>
);

export default App;
