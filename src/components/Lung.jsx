import defaultDataset from "../dataset";
import React, { useState } from "react";
import { Point } from "./index";
import lung from "/Users/akii/Desktop/tcm/src/assets/肺経.jpg";
import { useNavigate } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const Lung = (props) => {


  const lungData = defaultDataset.lung;
  const [open, setOpen] = useState(true)
  const navigate = useNavigate();

  return (
    <>
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>【経穴名】</TableCell>
              <TableCell align="right">【位置】</TableCell>
              <TableCell align="right">【特徴】</TableCell>
              <TableCell align="right">【筋肉】</TableCell>
              <TableCell align="right">【神経】</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lungData.map((datas, index) => (
              <TableRow
                key={index.toString()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {datas.content}
                </TableCell>
                <TableCell align="right">{datas.place}</TableCell>
                <TableCell align="right">{datas.point}</TableCell>
                <TableCell align="right">{datas.muscle}</TableCell>
                <TableCell align="right">{datas.nerve}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      {lungData.map((datas, index) => (
        <Card sx={{ maxWidth: 345 }} key={index.toString()}>
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
              <Typography variant="body2">
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

    // <div className="lung">
    //   {lungData.map((datas,index) => {
    //     return (
    //       <div key={index.toString()}>
    //         <Point
    //           content={datas.content}
    //           muscle={datas.muscle}
    //           onClick={changeUrl}
    //         />
    //       </div>
    //     );
    //   })}

    // </div>
  );
};

export default Lung;








// <div className="lung">
//       <img src={lung} alt={""} />
//       {lungData.map((datas, index) => {
//         return(



    //         <Card
    //           text={datas.content}
    //           id={datas.nextId}
    //           key={index.toString()}
    //           change={checkId}
    //           onClick={checkId}
    //           image={datas.image}
    //           content={datas.content}
    //           place={datas.place}
    //           point={datas.point}
    //           muscle={datas.muscle}
    //           nerve={datas.nerve}
    //         />
    //
    //     );
    //   })}

    //   {/* <img></img>
    //   <h1>つぼ名：</h1>
    //   <p>場所:</p>
    //   <p>ポイント:</p>
    //   <p>筋肉:</p>
    //   <p>神経:</p> */}
    // </div>