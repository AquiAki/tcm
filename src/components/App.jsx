// import { connect } from "react-redux";

// function App({ dispatch, count }) {
//   const increase = () => {
//     dispatch({ type: "INCREASE_COUNT" });
//   };
//   const decrease = () => {
//     dispatch({ type: "DECREASE_COUNT" });
//   };
//   return (
//     <div className="App">
//       <h1>Redux Learn</h1>
//       <p>Count: {count}</p>
//       <button onClick={increase}>Up</button>
//       <button onClick={decrease}>Down</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//     posts: state.posts,
//   };
// };

// export default connect(mapStateToProps)(App);


import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  NavLink,
  useHistory,
  useNavigate,
} from "react-router-dom";

import defaultDataset from "../dataset";
import { Header, Footer, Cards, Lists, About, Contact, Page404 } from "./index";
import { default as Router } from "/Users/akii/Desktop/tcm/src/Router";

function App() {

const [currentId, setCurrentId] = useState("init");
const [initDatas, setInitDatas] = useState(defaultDataset[currentId]);
const [isOpen, setIsOpen] = useState(true);
const [openLists, setOpenLists] = useState(false);
const [openHome, setOpenHome] = useState(false);
const [openAbout, setOpenAbout] = useState(false);
const [openContact, setOpenContact] = useState(false);

function checkId(event){
  console.log(event.target.value);
  // if(/^list_*/.test(i)){
  //   console.log(`idにlist_が入っている場合：${i}`);
  //   setCurrentId(i);
  //   setIsOpen(false);
  //   setOpenLists(true);
  // }else{
    
  //   setCurrentId(i);
  // }
}

function getId(text) {
  if (text === "About") {
    setIsOpen(false);
    setOpenAbout(true);
    setOpenContact(false);
    setOpenHome(false);
  } else if (text === "Contact") {
    setIsOpen(false);
    setOpenContact(true);
    setOpenAbout(false);
    setOpenHome(false);
  } else if (text=== "Home"){
    setIsOpen(false);
    setOpenAbout(false);
    setOpenContact(false);
    setOpenHome(true);
    setOpenLists(false);
    setInitDatas(defaultDataset["init"])
    console.log(initDatas);
  }
}

function toHome (){
  setInitDatas(defaultDataset["init"]);
  setIsOpen(true);
}

const [headerName, setHeaderName] = useState("")

function headerComponent(a) {
    setHeaderName(a.toLowerCase());
  }

useEffect(()=>{
  setInitDatas(defaultDataset[currentId]);
},[currentId])

return (
  <div className="wholeBody">
    <Router />
    
  </div>
);
}

export default App;

//  element={
//               isOpen ? (
//                 <Cards initData={initDatas} change={checkId} />
//               ) : (
//                 <Lists initData={initDatas} />
//               )
//             }

{
  /* <ul>
          <li>
            <NavLink to="/" onClick={toHome}>
              Top
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul> */
}

{
  /* {isOpen && <Cards initData={initDatas} change={checkId} />}
    {openLists && <Lists initData={initDatas} />}
    {openHome && <Cards initData={initDatas} change={checkId} />}
    {openAbout && <About />}
    {openContact && <Contact />} */
}
