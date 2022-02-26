import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { List } from "./index";

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

const Lists = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.initData.map((datas, index) => {
        return (
          <List
            image={datas.image}
            content={datas.content}
            place={datas.place}
            point={datas.point}
            muscle={datas.muscle}
            nerve={datas.nerve}
            key={index.toString()}
            change={props.change}
          />
        );
      })}
    </div>
  );
};

export default Lists;
