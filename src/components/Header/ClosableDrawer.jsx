import React, {useCallback, useState, useEffect} from 'react';
import { Provider } from "react-redux";
import { Divider } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { AddCircle } from '@material-ui/icons';
import { History } from '@material-ui/icons';
import TextInput from './TextInput';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch } from "react-redux";
import { push } from 'connected-react-router';
import data from "/Users/akii/Desktop/tcm/src/dataset.js";
import { Popup } from "/Users/akii/Desktop/tcm/src/components/index.js";

import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Link,
  useNavigate
} from "react-router-dom";





const useStyles = makeStyles((theme)=>({
  drawer:{
    [theme.breakpoints.up('sm')]:{
      flexShrink:0,
      width: 256
    }
  },
  toobar: theme.mixins.toobar,
  drawerPaper:{
    width:256
  },
  searchField:{
    alignItems:'center',
    display: 'flex',
    marginLeft:32
  }
}));

const ClosableDrawer = (props) =>{
  const classes = useStyles()
  const {container} = props;
  const dispatch = useDispatch();
  const [path, setPath] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  const [searchWord, setSearchWord] = useState("")

  const [keyword, setKeyword] = useState("");


  const inputKeyword = useCallback((event)=>{ 
    setKeyword(event.target.value) 
  },[setKeyword]);

  
  const click = (event)=>{
    setIsOpen(true);

    const new_search = data[keyword];
    setSearchWord(new_search);
    navigate("/search");
    props.onClose(event);
    props.searchInput(true, searchWord);
  }


  const selectMenu = (event, path) => {
    if (path === "/") {
      navigate("/");
    } else if (path === "/tcm") {
      navigate("/tcm");
    } else if (path === "/theory") {
      navigate("/theory");
    } else if (path === "/acupoints") {
      navigate("/acupoints");
    } 

    props.onClose(event);
  }

  const menus = [
    {
      func: selectMenu,
      label: "Home",
      icon: <HomeIcon />,
      id: "home",
      value: "/",
    },
    {
      func: selectMenu,
      label: "経絡経穴",
      icon: <FiberManualRecordIcon />,
      id: "acupoints",
      value: "/acupoints",
    },
    {
      func: selectMenu,
      label: "東洋医学",
      icon: <FiberManualRecordIcon />,
      id: "tcm",
      value: "/tcm",
    },
    {
      func: selectMenu,
      label: "理論と臨床",
      icon: <FiberManualRecordIcon />,
      id: "theory",
      value: "/theory",
    },
    // {
    //   func: selectMenu,
    //   label: "胃",
    //   icon: <FiberManualRecordIcon />,
    //   id: "contact",
    //   value: "/contact",
    // },
    // {
    //   func: selectMenu,
    //   label: "脾",
    //   icon: <FiberManualRecordIcon />,
    //   id: "contact",
    //   value: "/contact",
    // },
    // {
    //   func: selectMenu,
    //   label: "心",
    //   icon: <FiberManualRecordIcon />,
    //   id: "contact",
    //   value: "/contact",
    // },
    // {
    //   func: selectMenu,
    //   label: "膀胱",
    //   icon: <FiberManualRecordIcon />,
    //   id: "contact",
    //   value: "/contact",
    // },
    // {
    //   func: selectMenu,
    //   label: "腎",
    //   icon: <FiberManualRecordIcon />,
    //   id: "contact",
    //   value: "/contact",
    // },
  ];

useEffect(() => {
  props.searchInput(true, searchWord);
}, [isOpen, searchWord]);


  return (
    <div>
      <nav className={classes.drawer}>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={props.open}
          onClose={(e) => props.onClose(e)}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <div>
            <div className={classes.searchField}>
              <TextInput
                fullWidth={false}
                label={"ひらがなで検索"}
                multiline={false}
                onChange={inputKeyword}
                required={false}
                rows={1}
                value={keyword}
                type={"text"}
              />
              <IconButton onClick={click}>
                <Search />
              </IconButton>
            </div>
            <Divider />

            {/* <div>
            <ul>
              <li>
                <NavLink to="/" onClick={(e) => props.onClose(e)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={(e) => props.onClose(e)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={(e) => props.onClose(e)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div> */}

            <List>
              {menus.map((menu) => (
                <ListItem
                  button
                  key={menu.id}
                  onClick={(e) => menu.func(e, menu.value)}
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.label} />
                </ListItem>
              ))}
              {/* 
            <ListItem button key="logout" onClick={() => getText()}>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary={"経穴"} />
            </ListItem> */}
            </List>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default ClosableDrawer