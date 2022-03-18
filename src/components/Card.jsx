import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  
  const [open, setOpen] = useState(true)

  function changeId() {
    props.change(props.id);
    setOpen(false);
  }

  const url = props.image;

  return (
    <div>
      {open && (
        <Button
          className={classes.button}
          variant="outlined"
          onClick={changeId}
        >
          {props.text}
        </Button>
      )}
      {!open && (
        <div>
          <img src={url} alt={props.content} />
          <p>{props.content}</p>
          <p>{props.place}</p>
          <p>{props.point}</p>
          <p>{props.muscle}</p>
          <p>{props.nerve}</p>
        </div>
      )}
    </div>
  );
};

export default Card;



  



