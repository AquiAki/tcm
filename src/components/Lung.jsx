import defaultDataset from "../dataset";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card } from "./index";
import lung from "/Users/akii/Desktop/tcm/src/assets/肺流注.jpg";


const Lung = (props) => {

  const [lungData, setLungData] = useState(defaultDataset.lung);
  const [open, setOpen] = useState(true)

  function checkId(i) {
    setLungData(defaultDataset[i]);
    setOpen(false)
    // if (/^list_*/.test(i)) {
    //   setLungData(defaultDataset.list_chufu);
    //   console.log(lungData);
    // }
  }

  console.log(props.acName);

  
  return (
    <div className="lung">
      {open && <img className="lung-pic" src={lung} alt={""} />}
      {lungData.map((datas, index) => {
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

    </div>
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