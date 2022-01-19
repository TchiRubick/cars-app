import React from 'react';

import './Layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <div>
      {children}
    </div>
    <div className="layout__footer">
      © copyright Ritchi
    </div>
  </div>
);

export default Layout;
