import defaultDataset from "../dataset";
import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const Stomach = (props) => {
  const stomachData = defaultDataset.stomach;

  return (
    <>
      {stomachData.map((datas, index) => (
        <Card key={index.toString()}  sx={{ maxWidth: 345 }}>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              image={datas.image}
              alt=""
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {datas.content}
              </Typography>
              <Typography variant="body2" >
                {datas.place}
                <br />
                {datas.point}
                <br />
                {datas.muscle}
                <br />
                {datas.nerve}
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default Stomach;
