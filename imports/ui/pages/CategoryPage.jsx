import React, { Component } from 'react'
import Carousel from '../components/Carousel';
import TopadBanner from '../components/TopadBanner';
import GameItem from '../components/GameItem';
import GameContainer from '../components/GameContainer';
import Sidebar from '../components/Sidebar';

export default class CategoryPage extends Component {
    render() {
        return (
            <div>
                <Carousel pageclass='cat-page' />
                <TopadBanner />

                <div className="container mt-5 body-cont">

                    <GameContainer colsize={3} />

                    <div className="row">
                        <div data-aos="fade-right" className="col-md-8">
                            {/* <GameContainer colsize={6} /> */}
                            <div className="row games-section">
                                <GameItem clsize={6} />
                                <GameItem clsize={6} />
                                <GameItem clsize={6} />
                                <GameItem clsize={6} />
                                <GameItem clsize={6} />
                                <GameItem clsize={6} />
                                <GameItem clsize={6} />
                                <GameItem clsize={6} />

                            </div>
                        </div>

                        <Sidebar />
                    </div>
                </div>
            </div>
        )
    }
}
