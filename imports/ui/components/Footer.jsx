import React, { Component } from 'react'
import Contact from './Contact'
import Copyright from './Copyright'

export default class Footer extends Component {
    render() {
        return (
            <footer className="nk-footer">
                <Contact />
                <Copyright />
            </footer>
        )
    }
}
