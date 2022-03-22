import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";


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

    </div>
  );
};
export default About;
