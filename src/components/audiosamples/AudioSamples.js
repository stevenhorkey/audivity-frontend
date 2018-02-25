import React, { Component } from 'react';
import axios from 'axios';

import "./AudioSamples.css";

class AudioSamples extends Component {

    constructor(props) {
        super(props);
        //Init players for testing
        this.players = [
            {akey: 'DQSD'},
            {akey: 'DDFS'},
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
        var PlayersList = this.players.map(function(item) {
            return (
                <iframe width="100%" height="400" src={"http://localhost:8080/index.html?akey=" + item.akey} key={item.akey} frameBorder="0" allowFullScreen></iframe>
            );
          });

        return (
            <main className="audiosamples">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                        <div className="mt-5 card w-780 mx-auto p-5">
                            <header className="text-center">
                                <h1>Your audio samples are ready!</h1>
                                <p>Please preview all the samples and tell us which ones you like.</p>
                            </header>
                            <section className="players">
                            {PlayersList}
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default AudioSamples;
