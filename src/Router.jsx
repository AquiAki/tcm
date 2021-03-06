import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  Header,
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
  Spleen,
  Heart,
  SmallIntestine,
  Bladder,
  Kidney,
  Pericardium,
  TripleEnergizer,
  Gallbladder,
  Liver,
  Governor,
  Conception,
} from "./components/index";


const Router = () => {


  const [searchText, setSearchText] = useState("");

  // function checkId(i) {
  //   if (/^list_*/.test(i)) {
  //     console.log(`idにlist_が入っている場合：${i}`);
  //     setCurrentId(i);
  //     setIsOpen(false);
  //     setOpenLists(true);
  //   } else {
  //     console.log(i);
  //     setCurrentId(i);
  //   }
  // }

  function checkSearch(i, searchWord) {
    setSearchText(searchWord);
  }



  return (
    <div>
      <BrowserRouter>
        <div>
          <Header searchToRouter={checkSearch} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="*" element={<Page404 />}></Route>
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
            <Route exact path="/spleen" element={<Spleen />}></Route>
            <Route exact path="/heart" element={<Heart />}></Route>

            <Route exact path="/smallintestine" element={<SmallIntestine />}></Route>
            <Route exact path="/bladder" element={<Bladder />}></Route>
            <Route exact path="/kidney" element={<Kidney />}></Route>

            <Route exact path="/pericardium" element={<Pericardium />}></Route>
            <Route exact path="/tripleenergizer" element={<TripleEnergizer />}></Route>
            <Route exact path="/gallbladder" element={<Gallbladder />}></Route>

            <Route exact path="/liver" element={<Liver />}></Route>
            <Route exact path="/governor" element={<Governor />}></Route>
            <Route exact path="/conception" element={<Conception />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
