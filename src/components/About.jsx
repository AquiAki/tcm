import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Provider, useDispatch } from "react-redux";
import {push} from "connected-react-router";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";


const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "#FFB549",
      color: "red",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#FFB549",
        color: "#fff",
      },
    },
  })
);

const About = (props) => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  function goBackHome() {
    navigate("/");
  }


  return (
    <div className="about">
      <h1>このサイトについて</h1>
      <p>
        こんにちは。
        <br />
        このサイトは鍼灸の学生や鍼灸師に向けて作ったサイトです。
        <br />
        学校の勉強や復習の役に立てば幸いです。
      </p>
      <Button className={classes.button} onClick={goBackHome}>
        ホームに戻る
      </Button>

      {/* <Button onClick={() => dispatch(push("/"))}>ホームに戻る</Button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(About);



// import React from "react";
// import { useSelector } from "react-redux";

// function About() {
// const count = useSelector((state) => state.countReducer.count);
// const posts = useSelector((state) => state.postsReducer.posts);
// return (
//   <>
//     <div>Countコンポーネント:{count}</div>
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   </>
// );
// }
// export default About;
