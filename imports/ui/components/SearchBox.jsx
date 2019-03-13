import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div className="nk-widget">
                <div className="nk-widget-content">
                    <form action="#" className="nk-form nk-form-style-1" noValidate="novalidate">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type something..." />
                            <button className="input-append-style nk-btn nk-btn-color-main-1"><span
                                className="fa fa-search"></span></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
