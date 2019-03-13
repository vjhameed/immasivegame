import React, { Component } from 'react'
import TopadBanner from '../components/TopadBanner';
import GameWindow from '../components/GameWindow';
import ShortGameContainer from '../components/ShortGameContainer';

export default class GamePage extends Component {
    render() {
        return (
            <div>

                <div className='container mt-5 pt-5 body-cont'>
                    <TopadBanner />

                    <h3 class="mt-3 game-header-top nk-decorated-h-2" data-aos="fade-up"><span><span
                        class="text-main-1">Destroyer</span>
                        World</span></h3>
                </div>
                <GameWindow />

                <div class="container mt-2 mb-4 body-cont">
                    <div data-aos="fade-up"
                        class="author-section card card-1 w-100 p-3 d-flex justify-content-between mb-5 align-items-center flex-row">

                        <div class="row">
                            <div class="col-md-8">
                                <div>
                                    <span class='w-100'>Published On <i class='fa fa-calender'></i> jun, 15 2019 </span>
                                    <span class='author-name'>By Hameed Khan</span>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolorem praesentium
                                        suscipit
                                        quam, nisi nihil quis? Rem dicta aperiam laborum eligendi ad? Expedita ipsa placeat
                                        laudantium earum nam natus sequi?
                                </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class='d-flex justify-content-end'>
                                    <span class="btn-full btn-material">
                                        <img src="images/fullscreen.svg" alt="" />
                                    </span>
                                    <span class="btn-share btn-material">
                                        <img src="images/share.svg" alt="" />
                                    </span>
                                    <span class="btn-embed btn-material">
                                        img
                                </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="games-section">
                        <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3" data-aos="fade-up">
                                <ShortGameContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
