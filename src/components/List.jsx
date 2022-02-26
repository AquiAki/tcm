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

const List = (props)=> {

  const url = props.image
  return (
    <div>
      <img src={url} alt={props.content}/>
      <p>{props.content}</p>
      <p>{props.place}</p>
      <p>{props.point}</p>
      <p>{props.muscle}</p>
      <p>{props.nerve}</p>
    </div>
  );
}

export default List;