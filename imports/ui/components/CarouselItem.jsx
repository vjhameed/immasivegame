import React, { Component } from 'react'

export default class CarouselItem extends Component {
    render() {
        // const { title } = props
        return (
            <div>
                <div className='img-div'
                    style={{ backgroundImage: 'url(https://www.vainglorygame.com/wp-content/uploads/2019/02/letter-1.png)' }}>
                </div>
                <div className="shadow shadow-top"></div>
                <div className="shadow shadow-bottom"></div>
                <div className="content z3">
                    <h1 className="white-color scroll-triggered scroll-trigger-group">Vainglory: Coming To a Platform Near You</h1>
                    <a href="https://www.vainglorygame.com/news/vainglory-coming-platform-near/"
                        className="button button-big scroll-triggered scroll-trigger-group" tabIndex="0">PLAY NOW</a>
                </div>
            </div>

        )
    }
}
