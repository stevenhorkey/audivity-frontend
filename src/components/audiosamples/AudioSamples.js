import React, { Component } from 'react';
import axios from 'axios';

import "./AudioSamples.css";

class AudioSamples extends Component {

    constructor(props) {
        super(props);

        //bind 'this'
        this.save_prefered_audio = this.save_prefered_audio.bind(this);
        this.handleChange = this.handleChange.bind(this);

        //Init state
        this.state = {
            //Init preferd audio
            selected_audio: 0
        }

        //Init players for testing
        // this.players = [
        //     { akey: 'DQSD' },
        //     { akey: 'DDFS' },
        // ];

        var that = this;

        console.log(this.props.match.params.usrID);
        // Get related audio players
        axios.get('https://api.audivity.com/audio/sample_audios?rkey=' + that.props.match.params.usrID)
            .then(function (response) {
                //success response
                that.players = response.data.players;
                console.log(that.players);

                that.setState({ player_loaded: true, loaded: false })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    save_prefered_audio = () => {
        var that = this;
        if (that.state.selected_audio) {
            //Send registre rest request	
            axios.get('https://api.audivity.com/audio/preferd_audio_sample', {
                params: {
                    rkey: that.props.match.params.usrID,
                    selected_audio: that.state.selected_audio
                }
            }
            )
                .then(function (response) {
                    console.log(response);
                    //Request success
                    that.setState({ player_loaded: true, loaded: true })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }

    handleChange = (e) => {
        this.setState({ selected_audio: e.target.value });
    }

    render() {
        var PlayersList;
        var ChoicesList;

        const { player_loaded, loaded } = this.state;

        if (player_loaded) {
            PlayersList = this.players.map(function (item, index) {
                return (
                    <div className="player" key={item.akey} >
                        <iframe width="100%" height="280" src={"http://embed.audivity.com/index.html?akey=" + item.akey} frameBorder="0" allowFullScreen></iframe>
                        <div className="label">
                            Sample <b>#{index + 1}</b>
                        </div>

                    </div>
                );
            });

            ChoicesList = this.players.map(function (item, index) {
                return (
                    <option value={item.akey} key={item.akey}>Sample #{index + 1}</option>
                );
            });
        }

        return (
            <main className="audiosamples">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                        <div className="mt-5 card w-780 mx-auto p-5">
                            <header className="text-center">
                                {player_loaded && !loaded ? <h1><i className="ion-checkmark-circled"> </i> &nbsp; Your audio samples are ready!</h1> : null}
                                {loaded ? <h1><i className="ion-happy-outline"> </i> &nbsp; We’re glad you’ve enjoyed a sneakpeak of what Audivity can do!</h1> : null}

                                {player_loaded && !loaded ? <p>Please preview all the samples and tell us which ones you like.</p> : null}
                                {loaded ? <p><b>Sign Up</b> to join our exclusive partner program and learn how we can convert your blogs into polished and published digital audio to you more traffic, revenue, and loyal listeners.
            No contracts, No hidden costs. No need for audio recording, editing or publishing just sit back and enjoy.
        </p> : null}
                            </header>
                            {loaded ? <section>
                                <center>
                                    <button className="mt-3 btn btn-primary text-uppercase px-3 pt-2">Join/Sign Up &nbsp;<i className="ion-android-person-add" > </i></button>
                                </center>
                            </section> : null}
                            {player_loaded && !loaded ?
                                <section className="players">
                                    {PlayersList}
                                </section> : null}

                            {player_loaded && !loaded ?
                                <div className="form-group mb-5 choice">
                                    <label htmlFor="aboutInput"><i className="ion-help-circled"> </i> &nbsp; Select your prefered audio</label>

                                    <select className="custom-select bg-light border-top-0 border-left-0 border-right-0" id="aboutInput" value={this.state.selected_audio} onChange={this.handleChange}>
                                        <option value="" >I Prefer...</option>
                                        {ChoicesList}
                                    </select>
                                    <button onClick={this.save_prefered_audio} className="mt-3 btn btn-primary text-uppercase px-3 pt-2">Submit &nbsp;<i className="ion-android-arrow-forward" > </i></button>
                                </div> : null}

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default AudioSamples;
