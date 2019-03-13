import React, { Component } from 'react'
import { withRouter } from "react-router";

class GameItem extends Component {
    render() {
        const { clsize } = this.props
        return (
            <div className={`col-md-${clsize} game-item`}>
                <a href="blog-article.html" className="nk-post-img">
                    <img src="https://cdn-html.nkdev.info/goodgames/assets/images/post-5-mid.jpg"
                        alt="He made his passenger captain of one" />
                </a>
                <h2 className="mt-3 nk-post-title h4"><a href="blog-article.html">He made his passenger captain of one</a>
                </h2>
                <div className="nk-post-text">
                    <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet
                      high, and she at
                  once took up the little golden key and hurried off to the garden door...</p>
                </div>
                <a onClick={() => this.props.history.push('/game')} href="blog-article.html"
                    className="nk-buton nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">PLAY
                NOW</a>
                <p className='post-date mt-1 float-right'>
                    By Hameed khan
              </p>
            </div>
        )
    }
}

export default withRouter(GameItem)
