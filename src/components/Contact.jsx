import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Provider, useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
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

const Contact = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();




  return (
    <div className="container">
      <h3>お問い合わせ</h3>
      <form
        action="https://getform.io/f/5cec1d8c-0126-4176-9704-fb51528720bb"
        method="POST"
      >
        <div>
          <label htmlFor="name">お名前</label>
          <input name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="content">お問い合わせ内容</label>
          <textarea name="content" type="text" rows="10" required></textarea>
        </div>
        <button className="contact-button" type="submit">
          送信する
        </button>
      </form>
    </div>
  );
};

export default Contact;
