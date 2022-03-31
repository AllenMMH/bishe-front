import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
// import ReactDOM from 'react-dom'
const Login = lazy(() => import('../login/index'));
const Home = lazy(() => import('../home/index'));
const App = () => (
  <Router>
     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
      </Routes>
    </Suspense>
  </Router>
)
export default App

