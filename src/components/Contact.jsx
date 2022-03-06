import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Provider, useDispatch } from "react-redux";
import { push } from "connected-react-router";


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

const Contact = (props) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  return (
    <div className="about">
      <h1>コンタクト</h1>
      <p>
        コンタクトフォームはこちら
      </p>
      <Button className={classes.button}>ホームに戻る</Button>

      {/* <Button onClick={() => dispatch(push("/"))}>ホームに戻る</Button> */}
    </div>
  );
};

export default Contact;
