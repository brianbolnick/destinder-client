import React from 'react';
import Header from './Header.js';

const layoutStyle = {
    // display: 'flex', alignItems: 'center', justifyContent: 'center',
    backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/ep_naturalblack.png")',
    backgroundSize: 'auto',
    backgroundRepeat: 'inherit',
    color: '#f5f5f5'
  }

const Layout = ({ children }) => (  
    <div style={layoutStyle}>
        <Header >
            {children}
        </Header>
    </div>

)

export default Layout