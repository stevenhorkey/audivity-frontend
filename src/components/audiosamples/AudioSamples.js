import React, { Component } from 'react';
import axios from 'axios';

import "./AudioSamples.css";

class AudioSamples extends Component {

    constructor(props) {
        super(props);
        //Init players for testing
        this.players = [
            { akey: 'DQSD' },
            { akey: 'DDFS' },
        ];
        // Get related audio players
        axios.post('https://api.audivity.com/sample_audios', {
            userid: this.props.match.params.userID
        })
            .then(function (response) {
                console.log(response);
                //success response
                this.players = response.players;

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var PlayersList = this.players.map(function (item, index) {
            return (
                <div className="player" key={item.akey} >
                    <iframe width="100%" height="280" src={"http://localhost:8080/index.html?akey=" + item.akey} frameBorder="0" allowFullScreen></iframe>
                    <div className="label">
                        Sample <b>#{index + 1}</b>
                    </div>

                </div>
            );
        });
        var ChoicesList = this.players.map(function (item, index) {
            return (
                <option value={item.akey} key={item.akey}>Sample #{index+1}</option>
            );
        });
        return (
            <main className="audiosamples">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                        <div className="mt-5 card w-780 mx-auto p-5">
                            <header className="text-center">
                                <h1><i className="ion-checkmark-circled"> </i> &nbsp; Your audio samples are ready!</h1>
                                <p>Please preview all the samples and tell us which ones you like.</p>
                            </header>
                            <section className="players">
                                {PlayersList}
                            </section>

                            <div className="form-group mb-5 choice">
                                <label htmlFor="aboutInput"><i className="ion-help-circled"> </i> &nbsp; Select your prefered audio</label>

                                <select className="custom-select bg-light border-top-0 border-left-0 border-right-0" id="aboutInput">
                                    {ChoicesList}
                                </select>
                                <button type="submit" className="mt-3 btn btn-primary text-uppercase px-3 pt-2">Submit &nbsp;<i className="ion-android-arrow-forward"> </i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default AudioSamples;
