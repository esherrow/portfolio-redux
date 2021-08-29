// import React from 'react';
// import Card from '../Card'
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image1 from '../../assets/projects/BudgetTracker.JPG'
import Image2 from '../../assets/projects/Just_Music_Login.JPG'
import Image3 from '../../assets/projects/pswdGenerator.png'
import Image4 from '../../assets/projects/WeatherDash.JPG'
import Image5 from '../../assets/projects/TECHblog.JPG'
import Image6 from '../../assets/projects/WorkDaySched.JPG'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Portfolio() {
  const classes = useStyles();
  return (
    <>
    <section className="my-5">
      <h1 id="portfolio">Portfolio</h1>
    </section>
    <div className="row">
      <div className="col-sm-4 mb-5">
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image1}
            title="Screenshoot of Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Budget Tracker
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://stark-bastion-00092.herokuapp.com/"><Button size="small" color="primary">
            See it in Action
          </Button></a>
          <a href="https://github.com/esherrow/budgetr-tracker"><Button size="small" color="primary">
            See the Code
          </Button></a>
        </CardActions>
      </Card>
    </div>
    <div className="col-sm-4 mb-5">
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image2}
            title="Screenshoot of Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              JustMusic
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://justmusic-3.herokuapp.com/"><Button size="small" color="primary">
            See it in Action
          </Button></a>
          <a href="https://github.com/dillin92/just-music"><Button size="small" color="primary">
            See the Code
          </Button></a>
        </CardActions>
      </Card>
    </div>   
    <div className="col-sm-4 mb-5">
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image3}
            title="Screenshoot of Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Password Generator
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="http://esherrow.github.io/password-generator/"><Button size="small" color="primary">
            See it in Action
          </Button></a>
          <a href="https://github.com/esherrow/password-generator"><Button size="small" color="primary">
            See the Code
          </Button></a>
        </CardActions>
      </Card>
    </div>  
    <div className="col-sm-4 mb-5">
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image4}
            title="Screenshoot of Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Weather Dashboard
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://esherrow.github.io/weather-dash/"><Button size="small" color="primary">
            See it in Action
          </Button></a>
          <a href="https://github.com/esherrow/weather-dash"><Button size="small" color="primary">
            See the Code
          </Button></a>
        </CardActions>
      </Card>
    </div>  
    <div className="col-sm-4 mb-5">
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image5}
            title="Screenshoot of Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              The TECH Blog
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://enigmatic-bastion-80011.herokuapp.com/"><Button size="small" color="primary">
            See it in Action
          </Button></a>
          <a href="https://github.com/esherrow/tech-blog"><Button size="small" color="primary">
            See the Code
          </Button></a>
        </CardActions>
      </Card>
    </div>  
    <div className="col-sm-4 mb-5">
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image6}
            title="Screenshoot of Application"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Workday Scheduler
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href="https://esherrow.github.io/workday-scheduler/"><Button size="small" color="primary">
            See it in Action
          </Button></a>
          <a href="https://github.com/esherrow/workday-scheduler"><Button size="small" color="primary">
            See the Code
          </Button></a>
        </CardActions>
      </Card>
    </div>
</div>
    </>
  );
}

export default Portfolio;