import React from 'react';
import Header from './Header.js';

const Layout = ({ children }) => (  
    <div>
        <Header >
            {children}
        </Header>
    </div>

)

export default Layout