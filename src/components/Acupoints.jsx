import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import lung from "/Users/akii/Desktop/tcm/src/assets/肺経.jpg";
import largeIntestine from "/Users/akii/Desktop/tcm/src/assets/大腸.jpg";
import stomach from "/Users/akii/Desktop/tcm/src/assets/胃経.jpg";
import spleen from "/Users/akii/Desktop/tcm/src/assets/脾臓.jpg";
import smallIntestine from "/Users/akii/Desktop/tcm/src/assets/小腸.jpg";
import heart from "/Users/akii/Desktop/tcm/src/assets/心.jpg";
import bladder from "/Users/akii/Desktop/tcm/src/assets/膀胱.jpg";
import kidney from "/Users/akii/Desktop/tcm/src/assets/腎臓.jpg";
import pericardium from "/Users/akii/Desktop/tcm/src/assets/心包.jpg";
import tripleEnergizer from "/Users/akii/Desktop/tcm/src/assets/三焦.jpg";
import gallbladder from "/Users/akii/Desktop/tcm/src/assets/胆.jpg";
import liver from "/Users/akii/Desktop/tcm/src/assets/肝.jpg";
import governor from "/Users/akii/Desktop/tcm/src/assets/督脈.jpg";
import conceptionVessel from "/Users/akii/Desktop/tcm/src/assets/任脈.jpg";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";


const itemData = [
  {
    img: lung,
    title: "lung",
  },
  {
    img: largeIntestine,
    title: "largeIntestine",
  },
  {
    img: stomach,
    title: "stomach",
  },
  {
    img: spleen,
    title: "spleen",
  },
  {
    img: heart,
    title: "heart",
  },
  {
    img: smallIntestine,
    title: "smallintestine",
  },
  {
    img: bladder,
    title: "bladder",
  },
  {
    img: kidney,
    title: "kidney",
  },
  {
    img: pericardium,
    title: "pericardium",
  },
  {
    img: tripleEnergizer,
    title: "tripleEnergizer",
  },
  {
    img: gallbladder,
    title: "gallbladder",
  },
  {
    img: liver,
    title: "liver",
  },
  {
    img: governor,
    title: "governor",
  },
  {
    img: conceptionVessel,
    title: "conceptionVessel",
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

const Acupoints = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [acuName, setAcName] = useState("")

  function checkComponent(i) {    
    switch (i) {
      case "lung":
        
        navigate("/lung");
        setAcName("lung")

        break;
      case "largeIntestine":
        navigate("/largeintestine");
        break;
      case "stomach":
        navigate("/stomach");
        break;
      case "spleen":
        navigate("/spleen");
        break;
      case "heart":
        navigate("/heart");
        break;
      case "smallintestine":
        navigate("/smallintestine");
        break;
      case "bladder":
        navigate("/bladder");
        break;
      case "kidney":
        navigate("/kidney");
        break;
      case "pericardium":
        navigate("/pericardium");
        break;
      case "tripleEnergizer":
        navigate("/tripleenergizer");
        break;
      case "gallbladder":
        navigate("/gallbladder");
        break;
      case "liver":
        navigate("/liver");
        break;
      case "governor":
        navigate("/governor");
        break;
      case "conceptionVessel":
        navigate("/conceptionvessel");
        break;

      default:
    }


    
  }

  useEffect(() => {
    setAcName("lung");

  }, [acuName]);


  return (
    <div className="home">
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="home-image"
              onClick={() => checkComponent(item.title)}
              key={index.toString()}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Acupoints;
