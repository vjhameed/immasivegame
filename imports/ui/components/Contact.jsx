import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="my-5 py-4 row vertical-gap justify-content-center">
                <div className="col-md-8">
                    <div className="nk-widget">
                        <h4 className="nk-widget-title"><span className="text-main-1">Contact</span> With Us</h4>
                        <div className="nk-widget-content">
                            <form action="php/ajax-contact-form.php" className="nk-form nk-form-ajax"
                                noValidate="novalidate">
                                <div className="row vertical-gap sm-gap mb-3 mt-3">
                                    <div className="col-md-6">
                                        <input type="email" className="form-control required" name="email"
                                            placeholder="Email *" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control required" name="name"
                                            placeholder="Name *" />
                                    </div>
                                </div>
                                <div className="nk-gap"></div>
                                <textarea className="form-control required" name="message" rows="7"
                                    placeholder="Message *"></textarea>
                                <div className="nk-gap-1"></div>
                                <button className="nk-buton nk-btn-hover-color-main-1 mt-3">
                                    <span>Send</span>
                                    <span className="icon"><i className="ion-paper-airplane"></i></span>
                                </button>
                                <div className="nk-form-response-success"></div>
                                <div className="nk-form-response-error"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
