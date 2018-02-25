import React, { Component } from 'react';
import axios from 'axios';
import EmailForm from './EmailForm'

import "./SubmitEmail.css";

class SubmitEmail extends Component {

    state = {
        success: false
      }

    submit = values => {
        // print the form values to the console
        console.log(values)
        this.setState({ success: true })

        //Send registre rest request	
        axios.post('https://api.audivity.com/register_sample', {
            reqid: this.props.match.params.ReqID
        })
            .then(function (response) {
                console.log(response);
                //Request success
                this.setState({ success: true })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        const { success } = this.state;

        return (
            <main className="SubmitEmail">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                    <div className="mt-5 card w-580 mx-auto p-5">
                        <header className="text-center">
                        
                            
                            {success ? <h1><i className="ion-checkmark-circled"> </i> &nbsp; Operation success! </h1>:<h1><i className="ion-clock"> </i> &nbsp;We are working on creating fresh samples for you!</h1>}

                            {success ? <p> You free voice over sample are on its way, you’ll receive an email as soon as they are ready! </p>:<p>Submit your email address and name to receive your free samples</p>}
                            
                        </header>
                        <section>
                        <EmailForm onSubmit={this.submit} />
                            {/* <form>

                                <div className="form-group mb-5 mt-4">
                                    <label htmlFor="nameInput">Your <strong>name.</strong></label>
                                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" id="nameInput" placeholder="Jon Dough" />
                                </div>

                                <div className="form-group mb-5">
                                    <label htmlFor="emailInput">Your <strong>email address</strong>.</label>
                                    <input type="email" className="form-control border-top-0 border-left-0 border-right-0" id="emailInput" aria-describedby="emailHelp" placeholder="jon@dough.com" />
                                </div>

                                <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2">Send &nbsp;<i className="ion-android-arrow-forward"> </i></button>
                            </form> */}
                        </section>


                    </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SubmitEmail;
