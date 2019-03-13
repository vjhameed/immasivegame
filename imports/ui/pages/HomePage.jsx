import React, { Component } from 'react'
import Carousel from '../components/Carousel';
import GameContainer from '../components/GameContainer';
import NewsContainer from '../components/NewsContainer';
import Sidebar from '../components/Sidebar';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <div className="container mt-5 body-cont">
                    <NewsContainer />
                    <GameContainer colsize={3} />
                    <GameContainer colsize={3} />

                    <div className="row">
                        <div data-aos="fade-right" class="col-md-8">
                            <GameContainer colsize={6} />
                        </div>

                        <Sidebar />
                    </div>
                </div>
            </div>
        )
    }
}
