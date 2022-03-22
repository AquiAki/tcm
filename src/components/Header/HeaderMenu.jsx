import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Badge } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import MenuIcon from "@material-ui/icons/Menu";
import {
  useNavigate
} from "react-router-dom";

const HeaderMenu = (props) => {

  const navigate = useNavigate();

  function toAbout (){
   navigate("/about");
  }

    function toContact() {
      navigate("/contact");
    }

  return (
    <>
      <IconButton onClick={toAbout}>
        <Badge color="secondary">
          <InfoIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={toContact}>
        <ContactMailIcon />
      </IconButton>

      <IconButton
        aria-label="Menu Items"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => props.handleDrawerToggle(e, true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default HeaderMenu;
