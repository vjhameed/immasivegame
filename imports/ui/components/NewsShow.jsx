import React, { Component } from 'react'

export default class NewsShow extends Component {
    render() {
        return (
            <div className="nano-content news-right" tabIndex="0" style={{ right: '-17px' }}>
                <div className="nk-news-box-item-image">
                    <img className='w-100 h-auto' src="https://cdn-html.nkdev.info/goodgames/assets/images/post-2.jpg" />
                    alt="Grab your sword and fight the Horde">
                                                                    <span className="nk-news-box-item-categories">
                        <span className="bg-main-1">Action</span>
                    </span>
                </div>
                <h3 className="nk-news-box-item-title">Grab your sword and fight the Horde</h3>
                <div className="nk-news-box-item-text">
                    <p>For good, too; though, in consequence of my previous emotions, I was still occasionally seized with
                      a stormy sob
                    . After we had jogged on for some little time, I asked the carrier...</p>
                </div>
                <a href="blog-article.html" className="nk-news-box-item-more">Read More</a>
            </div>

        )
    }
}
