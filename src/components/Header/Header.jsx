import React, { useState, useCallback } from "react";
import { createStyles, makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ClosableDrawer, HeaderMenu } from "./index";
import createStore from "../reducks/store/store";
import * as History from "history";
import { Provider, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import {useNavigate} from "react-router-dom";
import logo from "/Users/akii/Desktop/tcm/src/assets/Next鍼灸ロゴ.jpg";

const history = History.createBrowserHistory();

export const store = createStore(history);

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuBar: {
      backgroundColor: "#fff",
      color: "#444",
    },
    toolbar: {
      margin: "0 auto",
      maxWidth: 12024,
      width: "100%",
    },
    iconButtons: {
      margin: "0 0 0 auto",
    },
  })
);



export default function Header(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleDrawerToggle = useCallback(
    (event) => {
      if (
        event.type === "Keydown" &&
        (event.key === "Tab" || ErrorEvent.key === "Shift")
      ) {
        return;
      }
      setOpen(!open);
    },
    [setOpen, open]
  );

  function checkSearch(i, searchWord) {
    props.searchToRouter(i, searchWord);
  }

  // function checkKey(searchWord){
  //   console.log(searchWord);
  // }


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolbar}>
          <p className="webtitle" onClick={() => navigate("/")}>Next鍼灸</p>
          {/* <img
            alt="Logo"
            src={logo}
            width="80px"
            onClick={() => navigate("/")}
            role="button"
          /> */}
          <div className={classes.iconButtons}>
            <HeaderMenu handleDrawerToggle={handleDrawerToggle} />
          </div>
        </Toolbar>
        <ClosableDrawer
          open={open}
          onClose={handleDrawerToggle}
          searchInput={checkSearch}
        />
      </AppBar>
    </div>
  );
}









