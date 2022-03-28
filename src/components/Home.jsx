import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {  useNavigate } from "react-router-dom";
import acupoints  from "/Users/akii/Desktop/tcm/src/assets/経絡経穴.jpg";
import yinyang from "/Users/akii/Desktop/tcm/src/assets/東洋医学.jpg";
import theory from "/Users/akii/Desktop/tcm/src/assets/理論と臨床.jpg";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

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

  const messageList = [
    "調子はどう?",
    "今日は何を勉強する?",
    "東洋医学って楽しいよね",
    "勉強がんばってね!",
    "更新を楽しみにしててね",
    "気になることがあったら気軽に問い合わせてね",
  ];

  const [open, setOpen] = useState(false)
  const randomInt = Math.floor(Math.random() * messageList.length);
  const click = () =>{
    setOpen(true);
  }





    return (
      <div>
        <div className="intro">
          <h2>Next鍼灸へようこそ</h2>
          <p>東洋医学をわかりやすく、もっと身近に</p>
          <AccessibilityNewIcon onClick={click} />
          {open && <p style={{ color: "gray" }}>{messageList[randomInt]}</p>}
        </div>

        <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className="homeImage">
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={() => checkComponent(item.title)}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <div>
          <ul className="news-list">
            {/* <li className="item">
              <a href="/">
                <p className="date">2022/3/15</p>
                <p className="title">Next鍼灸がスタートしました</p>
              </a>
            </li> */}
            <li className="item">
              <a href="/lung">
                <p className="date">2022/3/24</p>
                <p className="title">経絡経穴の肺経を更新しました</p>
              </a>
            </li>
            <li className="item">
              <a href="/largeintestine">
                <p className="date">2022/3/25</p>
                <p className="title">経絡経穴の大腸経を更新しました</p>
              </a>
            </li>
            <li className="item">
              <a href="/stomach">
                <p className="date">2022/3/26</p>
                <p className="title">経絡経穴の胃経を更新しました</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Home;
