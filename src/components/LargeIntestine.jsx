import defaultDataset from "../dataset";
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

const LargeIntestine = () => {
  const classes = useStyles();
  const [largeIntestineData, setLargeIntestineData] = useState(
    defaultDataset.largeIntestine
  );

  function checkId(i) {
    setLargeIntestineData(defaultDataset[i]);

    // if (/^list_*/.test(i)) {
    //   setLungData(defaultDataset.list_chufu);
    //   console.log(lungData);
    // }
  }

  return (
    <div className="lung">
      {largeIntestineData.map((datas, index) => {
        return (
          <Card
            text={datas.content}
            id={datas.nextId}
            key={index.toString()}
            change={checkId}
            onClick={checkId}
            image={datas.image}
            content={datas.content}
            place={datas.place}
            point={datas.point}
            muscle={datas.muscle}
            nerve={datas.nerve}
          />
        );
      })}

      {/* <img></img>
      <h1>つぼ名：</h1>
      <p>場所:</p>
      <p>ポイント:</p>
      <p>筋肉:</p>
      <p>神経:</p> */}
    </div>
  );
};

export default LargeIntestine;
