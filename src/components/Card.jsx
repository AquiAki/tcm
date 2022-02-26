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



const Card = (props) => {
  const classes = useStyles();

  function changeId(){
     props.change(props.id);
  }

  return (
    <Button className={classes.button} variant="outlined" onClick={changeId}>
      {props.text}
    </Button>
  );
};

export default Card;
