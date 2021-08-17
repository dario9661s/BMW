import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    Width: "345",
    height:"360px",
    marginBottom:"10px"
  },
});

const ImgMediaCard: React.FC<{frontBumper:any}> = (props) => {
  const classes = useStyles();
console.log('====================================');
console.log(Object.keys(props.frontBumper)[0]);
console.log('====================================');
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="230"
          image={`/images/f30Solo/${Object.keys(props.frontBumper)[0]}.png`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {props.frontBumper[Object.keys(props.frontBumper)[0]].name}
          </Typography>
       
        </CardContent>
      </CardActionArea>
      <CardActions className="Price" style={{padding:"0"}}>
        <Button size="small" color="primary">
        ${props.frontBumper[Object.keys(props.frontBumper)[0]].price}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard