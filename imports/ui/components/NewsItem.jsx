import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className="nk-news-box-item nk-news-box-item-active">
                <div className="nk-news-box-item-img">
                    <img src="https://cdn-html.nkdev.info/goodgames/assets/images/post-1-sm.jpg"
                        alt="Smell magic in the air. Or maybe barbecue" />
                </div>
                <h3 className="nk-news-box-item-title">Smell magic in the air. Or maybe barbecue</h3>

                <div className="nk-news-box-item-text">
                    <p>With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a
                      change between
                      to-day and yesterday! Now I am friendless and alone...</p>
                </div>
                <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar"></span> Sep 18, 2018</div>
            </div>

        )
    }
}
