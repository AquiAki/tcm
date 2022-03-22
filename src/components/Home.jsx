import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {  useNavigate } from "react-router-dom";
import acupoints  from "/Users/akii/Desktop/tcm/src/assets/経絡経穴.jpg";
import yinyang from "/Users/akii/Desktop/tcm/src/assets/東洋医学.jpg";
import theory from "/Users/akii/Desktop/tcm/src/assets/理論と臨床.jpg";


import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";


const itemData = [
  {
    img: acupoints,
    title: "acupoints",
  },
  {
    img: yinyang,
    title: "yinyang",
  },
  {
    img: theory,
    title: "theory",
  },
  
];


const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "#FFB549",
      color: "FFB549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#FFB549",
        color: "#fff",
      },
    },
  })
);

const Home = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  function checkComponent (i){
    switch (i) {
      case "acupoints":
        navigate("/acupoints");
        break;
      case "yinyang":
        navigate("/tcm");
        break;
      case "theory":
        navigate("/theory");
        break;
      default:
    }
  }
    return (
      <div className="home">
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className="home-image"
                onClick={() => checkComponent(item.title)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
};

export default Home;
