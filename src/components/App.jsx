import React, {useEffect, useState} from 'react';
import { Header, Footer, Cards, Card } from "./index";
import defaultDataset from "../dataset";
import { Button } from '@material-ui/core';

function App() {

const [currentId, setCurrentId] = useState("init");
const [initDatas, setInitDatas] = useState(defaultDataset[currentId]);

function checkId(i){
  setCurrentId(i);
}

useEffect(()=>{
  setInitDatas(defaultDataset[currentId]);
},[currentId])

return (
  <div>
    <Header />
    <div>
      <Cards initData={initDatas} change={checkId}/>
    </div>
    <Footer />
  </div>
);
}

export default App;
