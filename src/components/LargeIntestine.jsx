// import defaultDataset from "../dataset";
// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import { makeStyles, createStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(() =>
//   createStyles({
//     button: {
//       borderColor: "#FFB549",
//       color: "FFB549",
//       fontWeight: 600,
//       marginBottom: "8px",
//       "&:hover": {
//         backgroundColor: "#FFB549",
//         color: "#fff",
//       },
//     },
//   })
// );

// const LargeIntestine = () => {
//   const classes = useStyles();
//   const [largeIntestineData, setLargeIntestineData] = useState(
//     defaultDataset.largeIntestine
//   );

//   function checkId(i) {
//     setLargeIntestineData(defaultDataset[i]);

//     // if (/^list_*/.test(i)) {
//     //   setLungData(defaultDataset.list_chufu);
//     //   console.log(lungData);
//     // }
//   }

//   return (<p>大腸</p>)
  
// };

// export default LargeIntestine;


import defaultDataset from "../dataset";
import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const LargeIntestine = (props) => {
  const largeintestineData = defaultDataset.large_intestine;

  return (
    <>
      {largeintestineData.map((datas, index) => (
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

export default LargeIntestine;