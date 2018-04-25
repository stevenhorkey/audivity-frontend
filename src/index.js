import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './assets/ionicons.css';

// Components
import Contact from './components/contact/Contact';
import Homepage from './components/homepage/Homepage';
import SubmitArticle from './components/submitarticle/SubmitArticle';
import SubmitEmail from './components/submitemail/SubmitEmail';
import UploadAudio from './components/uploadaudio/UploadAudio';
import AudioSamples from './components/audiosamples/AudioSamples';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import Team from './containers/team/Team';

// Reducers
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware()(createStore);





ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/submitArticle" component={SubmitArticle}/>
                    <Route path="/submitEmail/:ReqID" component={SubmitEmail}/>
                    <Route path="/uploadAudio/:ReqID" component={UploadAudio}/>
                    <Route path="/audioSamples/:usrID" component={AudioSamples}/>
                    <Route path="/" component={SubmitArticle}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
