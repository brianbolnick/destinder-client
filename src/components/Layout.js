import React from "react";
import Header from "./Header.js";


const layoutStyle = {  
  background:
    'linear-gradient(rgb(35, 37, 38), rgb(65, 67, 69))',
  backgroundSize: "auto",
  backgroundRepeat: "inherit",
  color: "#f5f5f5",
  minHeight: '100vh',
  height: '100%'
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header>{children}</Header>
  </div>
);

export default Layout;
