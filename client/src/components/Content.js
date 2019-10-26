import React, { useState } from 'react'
import { Container, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import axios from 'axios'
import ServerApi from '../api/ServerApi'
// components
import MetaCard from './MetaCard'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));

const Content = () => {
    const [urlData, setUrlData] = useState({
        title: 'Google',
        image: 'https://www.vmalcreative.co.uk/wp-content/uploads/2015/09/template4-1.png',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        url: 'https://www.google.com/'
    })
    const [urlLink, setUrlLink] = useState('')
    const [submitBtn, setSubmitBtn] = useState(false)

    const getUrlMetadata = (e) => {
        e.preventDefault()
        setSubmitBtn(true)
        ServerApi.get(`/urlmetadata?id=${urlLink}`).then(response => {
            setUrlData(response.data)
            setSubmitBtn(false)
        })
    }

    const classes = useStyles();

    return (
        <div >
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className="content-space-top">
                            <form onSubmit={getUrlMetadata}>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Link Url here.."
                                    placeholder="ie > https://www.google.com"
                                    margin="normal"
                                    variant="outlined"
                                    value={urlLink} onChange={e => setUrlLink(e.target.value)}
                                    fullWidth
                                />
                                <div>
                                    <Button className={submitBtn ? 'hidden' : ''} variant="contained" type="submit" color="primary" fullWidth value="submit">
                                        Search
                                    </Button>
                                    <Grid container justify="center" className={!submitBtn ? 'hidden' : ''}>
                                        <CircularProgress className={classes.progress} />
                                    </Grid>
                                </div>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="card-mt-30">
                            <MetaCard urlData={urlData} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            {/* <Container maxWidth="sm" >
                <div className="content-space-top">
                    <div className="pb-1">
                        <MetaCard urlData={urlData} />
                    </div>
                    <form onSubmit={getUrlMetadata}>
                        <TextField
                            id="outlined-with-placeholder"
                            label="Enter Link Url here.."
                            placeholder="ie > https://www.google.com"
                            margin="normal"
                            variant="outlined"
                            value={urlLink} onChange={e => setUrlLink(e.target.value)}
                            fullWidth
                        />
                        <div>
                            <Button className={submitBtn ? 'hidden' : ''} variant="contained" type="submit" color="primary" fullWidth value="submit">
                                Search
                            </Button>
                            <Grid container justify="center" className={!submitBtn ? 'hidden' : ''}>
                                <CircularProgress className={classes.progress} />
                            </Grid>
                        </div>
                    </form>
                </div>
            </Container> */}
        </div >
    )
}

export default Content