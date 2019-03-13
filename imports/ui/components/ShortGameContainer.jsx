import React, { Component } from 'react'
import ShortGameItem from './ShortGameItem';

export default class ShortGameContainer extends Component {
    render() {
        return (
            <div>
                <h3 className="m nk-decorated-h-2 game-right-section"><span className='p-0'><span
                    className="text-main-1">Editor's</span>
                    Choice</span></h3>

                <div className="row">
                    <ShortGameItem />
                    <ShortGameItem />
                    <ShortGameItem />
                    <ShortGameItem />
                    <ShortGameItem />
                </div>
            </div>
        )
    }
}
