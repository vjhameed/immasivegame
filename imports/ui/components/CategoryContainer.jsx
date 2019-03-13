import React, { Component } from 'react'
import GameItem from './GameItem';
import Heading from './Heading';
import { withRouter } from "react-router";


class CategoryContainer extends Component {
    render() {
        return (
            <div>
                <Heading />
                <div data-aos="fade-right" className="games-section">
                    <div className="row my-4 mb-5">
                        <GameItem clsize={3} />
                        <GameItem clsize={3} />
                        <GameItem clsize={3} />
                        <GameItem clsize={3} />
                        <button onClick={() => this.props.history.push('/category')} class='view-more-btn nk-buton nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1'>View More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CategoryContainer)