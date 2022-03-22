import { Header,Footer, Nocontent } from "./index";
import { default as Router } from "/Users/akii/Desktop/tcm/src/Router";
import MediaQuery from "react-responsive";

function App() {

return (
  <div className="wholeBody">

    {/* <MediaQuery query="(min-width: 767px)"> */}
      <Router />
      <Footer />
    {/* </MediaQuery>
    <MediaQuery query="(max-width: 767px)">
      <Nocontent />
    </MediaQuery> */}
  </div>
);
}

export default App;