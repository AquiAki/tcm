import defaultDataset from "../dataset";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";


const Lung = (props) => {

  const lungData = defaultDataset.lung;
  const navigate = useNavigate();

  return (
    <>
      {lungData.map((datas, index) => (
        <Card sx={{ maxWidth: 345 }} key={index.toString()}>
          <img src={datas.image} alt="" />
          <CardActionArea>
            {/* <CardMedia
              component="img"
              image={datas.image}
              alt=""
            /> */}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "gray" }}
              >
                {datas.content}
              </Typography>
              <Typography style={{ color: "#0d6efd" }}>
                {datas.point}
              </Typography>
              <Typography variant="body2">
                <br />
                【部位】 {datas.place}
                <br />
                【筋肉】 {datas.muscle}
                <br />
                【運動神経】 {datas.nerveMotorius}
                <br />
                【知覚神経】 {datas.nerveSensorius}
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default Lung;