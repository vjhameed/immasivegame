import React, { Component } from 'react'
import NewsItem from './NewsItem';
import NewsShow from './NewsShow';
export default class NewsContainer extends Component {
    render() {
        return (
            <div className="news-section my-4">
                <div data-aos="fade-up" className="row content-news my-4 mx-0 mb-5">
                    <div className="col-md-6 p-0 over-y nano">
                        <div className="nano-content">
                            <NewsItem />
                            <NewsItem />
                            <NewsItem />
                            <NewsItem />
                            <NewsItem />
                        </div>
                    </div>
                    <div className="col-md-6 p-0 over-y nano">
                        <NewsShow />
                    </div>
                </div>
            </div>
        )
    }
}
