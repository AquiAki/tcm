import defaultDataset from "../dataset";
import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const Kidney = (props) => {
  const kidneyData = defaultDataset.kidney;

  return (
    <>
      {kidneyData.map((datas, index) => (
        <Card key={index.toString()} sx={{ maxWidth: 345 }}>
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

export default Kidney;
