import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "#FFB549",
      color: "FFB549",
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

  return (
    <div>
      <h1>このサイトについて</h1>
      <p>こんにちは。このサイトは鍼灸の学生や鍼灸師に向けて作ったサイトです。</p>
    </div>
  );
};

export default About;
