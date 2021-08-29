import React, {useState} from 'react';
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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [currentProject, setCurrentProject]= useState();
  const [projects]=useState([
      {
        name:'Budget Tracker',
        repo:'',
        site:''
      },{
        name:'Just Music',
        repo:'',
        site:''  
      },{
        name:'Password Generator',
        repo:'',
        site:''  
      },{
        name:'Weather Dashboard',
        repo:'',
        site:''  
      },{
        name:'Th TECH Blog',
        repo:'',
        site:''  
      },{
        name:'Workday Scheduler',
        repo:'',
        site:''  
      }
  ]);

  return (
      <div className="col-sm-4 mb-5">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See it in Action
        </Button>
        <Button size="small" color="primary">
          See the Code
        </Button>
      </CardActions>
    </Card>

    </div>
  );
}