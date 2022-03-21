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
  Card,
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
  Popup,

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
  const [openSearch, setOpenSearch] = useState(false);

  const [searchText, setSearchText] = useState("");

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

  function checkSearch(i, searchWord) {

    setOpenSearch(i);
    setSearchText(searchWord);
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header searchToRouter={checkSearch} />

          {!openSearch && <Popup />}

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
            <Route
              exact
              path="/largeintestine"
              element={<LargeIntestine />}
            ></Route>
            <Route exact path="/stomach" element={<Stomach />}></Route>
            <Route exact path="*" element={<Page404 />}></Route>
            <Route
              exact
              path="/search"
              element={
                <Popup
                  image={searchText.image}
                  content={searchText.content}
                  place={searchText.place}
                  point={searchText.point}
                  muscle={searchText.muscle}
                  nerve={searchText.nerve}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default Router;
