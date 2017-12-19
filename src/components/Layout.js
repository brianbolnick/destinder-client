import React from "react";
import Header from "./Header.js";

// const layoutStyle = {
//   // display: 'flex', alignItems: 'center', justifyContent: 'center',
//   backgroundImage:
//     'url("https://www.toptal.com/designers/subtlepatterns/patterns/binding_dark.png")',
//   backgroundSize: "auto",
//   backgroundRepeat: "inherit",
//   color: "#f5f5f5"
// };
const layoutStyle = {
  // display: 'flex', alignItems: 'center', justifyContent: 'center',
  background:
    'linear-gradient(rgb(35, 37, 38), rgb(65, 67, 69))',
  backgroundSize: "auto",
  backgroundRepeat: "inherit",
  color: "#f5f5f5"
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header>{children}</Header>
  </div>
);

export default Layout;
