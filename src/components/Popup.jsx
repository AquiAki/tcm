import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Popup(props) {



  return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom></Typography>
          <Typography variant="h5" component="div">
            {props.content}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{props.point}</Typography>
          <Typography variant="body2">
            {props.infos}
            <br />
            {props.nerve}

          </Typography>
        </CardContent>
      </Card>
  );
}