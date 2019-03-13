import React, { Component } from 'react'
import GameItem from './GameItem';
import Heading from './Heading';

export default class GameContainer extends Component {
    render() {
        const { colsize } = this.props
        return (
            <div>
                <Heading />
                <div data-aos="fade-right" className="games-section">
                    <div className="row my-4 mb-5">
                        <GameItem clsize={colsize} />
                        <GameItem clsize={colsize} />
                        <GameItem clsize={colsize} />
                        <GameItem clsize={colsize} />
                    </div>
                </div>
            </div>
        )
    }
}
