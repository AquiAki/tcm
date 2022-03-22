import { ClosableDrawer } from "./Header";

const Point = (props) =>{
  
  function checkInfo(i){
    console.log(i);
  }

  return (
    <>
    {/* <ClosableDrawer toPoint={checkInfo}/> */}
      {props.content}
      {props.muscle}
    </>
  );
}

export default Point;