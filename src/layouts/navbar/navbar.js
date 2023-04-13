import * as React from "react";
import { Button } from 'react-bootstrap';
import "./style.css";
import SwipeableTemporaryDrawer from "../../components/sidebar";

const Navbar = () => {
  const handleClick = () => {
    // Lógica para acionar o componente SwipeableTemporaryDrawer
  }
  return (
    <Button
    onClick={handleClick}
    className="acionador-menu"
  >
      <SwipeableTemporaryDrawer />
  </Button>
  );
}

export default Navbar;
