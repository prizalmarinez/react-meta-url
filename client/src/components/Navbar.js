import React from 'react'
// material
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    const style = {
        marginLeft: 10
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography className="app-title" variant="h6" noWrap style={{ flex: 1 }}>
                        Meta-Url
                    </Typography>
                    <div>
                        <a className="github-link" href={'https://github.com/prizalmarinez?tab=repositories'} target="_blank">
                            <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                        </a>
                        <a style={style} className="github-link" href={'https://www.facebook.com/priz.louie.almarinez'} target="_blank">
                            <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
