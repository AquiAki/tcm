import React, {useEffect, useState} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  Header,
  Footer,
  Cards,
  Card,
  List,
  Lists,
  About,
} from "./index";
import defaultDataset from "../dataset";
import { Button } from '@material-ui/core';

function App() {

const [currentId, setCurrentId] = useState("init");
const [initDatas, setInitDatas] = useState(defaultDataset[currentId]);
const [isOpen, setIsOpen] = useState(true);
const [isAbout, setIsAbout] = useState(false);

function checkId(i){
  if(/^list_*/.test(i)){
    console.log("りすと");
    setCurrentId(i);
    setIsOpen(false)
  }else{
    setCurrentId(i);
  }
  
}

function changeByHeader(text){
  if (text === "Home") {
    setInitDatas(defaultDataset["init"]);
    setIsOpen(true);
  }else{
    setIsAbout(true);
    setIsOpen(false);
  }
}

useEffect(()=>{
  setInitDatas(defaultDataset[currentId]);
},[currentId])

return (
  <div>
    {/* <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Header} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter> */}
    <Header changeScreen={changeByHeader} />

    {isOpen ? <Cards initData={initDatas} change={checkId} /> : <Lists initData={initDatas} />}
    {isAbout && <About />}

    <Footer />
  </div>
);
}

export default App;
