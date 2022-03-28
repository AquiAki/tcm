import React, {useCallback, useState} from 'react';
import { Divider } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import TextInput from './TextInput';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import HomeIcon from "@material-ui/icons/Home";
import data from "/Users/akii/Desktop/tcm/src/dataset.js";
import {useNavigate} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import ちゅうふ from "/Users/akii/Desktop/tcm/src/assets/陰陽.png";


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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [searchWord, setSearchWord] = useState("")
  const [keyword, setKeyword] = useState("");

  const inputKeyword = useCallback((event)=>{ 
    setKeyword(event.target.value);
  },[setKeyword]);

  const pressEnter = (event) =>{
    console.log("aaa");
    if (event.key === "Enter"){
      console.log("click");
    }
  }

  const click = (event)=>{
    setIsOpen(true);
    if (keyword in data) {
      const word = data[keyword];
      setSearchWord(word);
      // navigate("/search");
      event.target.value = "";
      props.onClose(event);
      setKeyword("");
    }else{
    //  alert("正確にひらがなで検索してください \n");
     setKeyword("");
     setIsOpen(false);
    //  props.onClose(event);
    }
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

const closeSearch = ()=>{
  setIsOpen(false);
}

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
            </List>
          </div>
        </Drawer>
      </nav>
      {isOpen && (
        <div>
          <CloseIcon onClick={closeSearch} />
          <img src={keyword} alt="" />
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                {searchWord.route}
              </Typography>
              <Typography variant="h5" component="div">
                {searchWord.content}
              </Typography>
              <Typography sx={{ mb: 1.5 }}>{searchWord.point}</Typography>
              <Typography variant="body2">
                <br />
                【部位】: {searchWord.place}
                <br />
                【筋肉】: {searchWord.muscle}
                <br />
                【運動神経】: {searchWord.nerveMotorius}
                <br />
                【知覚神経】: {searchWord.nerveSensorius}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ClosableDrawer