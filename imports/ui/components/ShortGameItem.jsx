import React, { Component } from 'react'

export default class ShortGameItem extends Component {
    render() {
        return (
            <div className="col-md-12 game-item">
                <a href="blog-article.html" className="nk-post-img">
                    <img className='short-img'
                        src="https://cdn-html.nkdev.info/goodgames/assets/images/post-5-mid.jpg"
                        alt="He made his passenger captain of one" />
                    <span className='short-name'>Glory world</span>
                </a>
            </div>
        )
    }
}
