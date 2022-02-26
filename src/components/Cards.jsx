import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card } from "./index";



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



const Cards = (props) => {

  const classes = useStyles();

  return (
    <div>
      {props.initData.map((datas, index) => {
        return (
          <Card 
            text={datas.content}
            id={datas.nextId}
            key={index.toString()}
            change={props.change}
          />
        );
      })}
    </div>
  );
};

export default Cards;