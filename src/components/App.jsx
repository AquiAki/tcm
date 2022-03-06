import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  Header,
  Footer,
  Cards,
  Lists,
  About,
  Contact,
} from "./index";
import defaultDataset from "../dataset";


function App() {

const [currentId, setCurrentId] = useState("init");
const [initDatas, setInitDatas] = useState(defaultDataset[currentId]);
const [isOpen, setIsOpen] = useState(true);

function checkId(i){
  if(/^list_*/.test(i)){
    console.log("りすと");
    setCurrentId(i);
    setIsOpen(false)
  }else{
    setCurrentId(i);
  }
  
}

useEffect(()=>{
  setInitDatas(defaultDataset[currentId]);
},[currentId])

const [openAbout, setOpenAbout] = useState(false);
const [openContact, setOpenContact] = useState(false);

function getId(text){
  if (text === "About") {
    setOpenAbout(true);
    setOpenContact(false);
  } else if (text === "Contact") {
    setOpenContact(true);
    setOpenAbout(false);
  }else{
    setOpenAbout(false);
    setOpenContact(false);
  }
}

return (
  <div>
    <div>
      <Header getText={getId} />
    </div>
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              isOpen ? (
                <Cards initData={initDatas} change={checkId} />
              ) : (
                <Lists initData={initDatas} />
              )
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

    {openAbout && <About />}
    {openContact && <Contact />}

    <Footer />
  </div>
);
}

export default App;