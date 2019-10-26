import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const useStyles = makeStyles({
    card: {
        width: 'auto',
    },
    media: {
        height: 260,
    },
});

const MetaCard = (props) => {
    const classes = useStyles();
    const metadata = props.urlData;

    const goToImage = () => {
        const url = metadata.image;
        window.open(url, '_blank');
    }

    const goToUrl = () => {
        const url = metadata.url;
        window.open(url, '_blank');
    }

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={goToImage}>
                <CardMedia
                    className={classes.media}
                    image={metadata.image}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {metadata.title}
                    <Button onClick={goToUrl}>
                        <FontAwesomeIcon icon={['fas', 'arrow-circle-right']} size="lg" />
                    </Button>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {metadata.description}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Learn More
                </Button> */}
                {/* <LearnMore urlData={props.urlData} /> */}
            </CardActions>
        </Card>
    )
}

export default MetaCard