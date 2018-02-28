import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react';
import Menu from '../template/menu.jsx';
import Routes from './routes.jsx';
// import About from '../about/about.jsx';

export default props => (
  <div className='container'>
    <Menu />
    <Routes />
  </div>
)