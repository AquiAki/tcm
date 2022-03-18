import React, { useState } from "react";
import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import {
  Header,
  Footer,
  Cards,
  Lists,
  About,
  Contact,
  Page404,
  Home,
  Lung,
  Acupoints,
  Tcm,
  Theory,
  LargeIntestine,
  Stomach,
  
} from "./components/index";

import defaultDataset from "./dataset";

const Router = () => {

  const [currentId, setCurrentId] = useState("init");
  const [initDatas, setInitDatas] = useState(defaultDataset[currentId]);
  const [isOpen, setIsOpen] = useState(true);
  const [openLists, setOpenLists] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  function checkId(i) {
    if (/^list_*/.test(i)) {
      console.log(`idにlist_が入っている場合：${i}`);
      setCurrentId(i);
      setIsOpen(false);
      setOpenLists(true);
    } else {
      console.log(i);
      setCurrentId(i);
    }
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />

          {/* 
          <ul>
            <li>
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul> */}

          <Routes>
            {/* <Route
              exact
              path="/"
              element={
                isOpen ? (
                  <Cards initData={initDatas} change={checkId} />
                ) : (
                  <Lists initData={initDatas} />
                )
              }
            ></Route> */}
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/acupoints" element={<Acupoints />}></Route>
            <Route exact path="/tcm" element={<Tcm />}></Route>
            <Route exact path="/theory" element={<Theory />}></Route>
            <Route exact path="/lung" element={<Lung />}></Route>
            <Route exact path="/largeintestine" element={<LargeIntestine />}></Route>
            <Route exact path="/stomach" element={<Stomach />}></Route>
            <Route exact path="*" element={<Page404 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Router;
