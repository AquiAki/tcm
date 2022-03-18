import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card } from "./index";
import { useNavigate } from "react-router-dom";
import { Lung } from "./index";
import lung from "/Users/akii/Desktop/tcm/src/assets/肺.jpeg";
import largeIntestine from "/Users/akii/Desktop/tcm/src/assets/大腸.jpeg";
import stomach from "/Users/akii/Desktop/tcm/src/assets/胃.jpeg";

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

const Tcm = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const images = [
    {
      image: lung,
      value: "/lung",
      id: "lung",
    },
    {
      image: largeIntestine,
      value: "/contact",
      id: "largeIntestine",
    },
    {
      image: stomach,
      value: "/about",
      id: "stomach",
    },
  ];

  function checkComponent(i) {
    switch (i) {
      case "lung":
        navigate("/lung");
        break;
      case "largeIntestine":
        navigate("/contact");
        break;
      case "stomach":
        navigate("/about");
        break;
      default:
    }
  }
  return (
    <p>
    東洋医学のページは只今準備中です。<br/>
    しばらくお待ちください。
    </p>
    // <div className="home">
    //   {images.map((image, index) => (
    //     <button
    //       id={image.id}
    //       key={index}
    //       onClick={() => checkComponent(image.id)}
    //     >
    //       <img src={image.image} key={index} alt={""} />
    //     </button>
    //   ))}
    // </div>
  );
};

export default Tcm;
