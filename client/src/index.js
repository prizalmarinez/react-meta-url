import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faGithubAlt,
    faGithub,
    faGithubSquare,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


library.add(
    faGithubAlt,
    faGithub,
    faGithubSquare,
    faFacebook,
    faArrowCircleRight
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
