import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <main className="contact">
                <div className="bg pb-5 pt-5">
                    <div className="container">
                    <div className="mt-5 card w-580 mx-auto p-5">
                        <header className="text-center">
                            <h1>Get Connected</h1>
                            <p>Let us know what you're thinking. Feel free to reach out.</p>
                        </header>
                        <section>
                            <form>

                                <div className="form-group mb-5 mt-4">
                                    <label htmlFor="nameInput">Your <strong>name.</strong></label>
                                    <input type="text" className="form-control border-top-0 border-left-0 border-right-0" id="nameInput" placeholder="Jon Dough" />
                                </div>

                                <div className="form-group mb-5">
                                    <label htmlFor="emailInput">Your <strong>email address</strong>.</label>
                                    <input type="email" className="form-control border-top-0 border-left-0 border-right-0" id="emailInput" aria-describedby="emailHelp" placeholder="jon@dough.com" />
                                </div>

                                <div className="form-group mb-5">
                                    <label htmlFor="messageInput">Your <strong>message</strong>.</label>
                                    <textarea className="form-control border-top-0 border-left-0 border-right-0" id="messageInput" rows="3" placeholder="Hello, Audivity!"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2">Send &nbsp;<i className="ion-android-arrow-forward"> </i></button>
                            </form>
                        </section>


                    </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;
