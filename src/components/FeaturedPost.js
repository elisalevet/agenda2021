import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {post.name.first} {post.name.last}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {post.gender}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                <strong> Email:</strong> {post.email} <br />
                <strong>Cell-phone:</strong> {post.cell} <br />
                <strong>Location: </strong> {post.location.country} <br />
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
