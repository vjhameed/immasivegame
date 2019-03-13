import React, { Component } from 'react'
import SearchBox from './SearchBox';
import SocialIcons from './SocialIcons';
import TopGames from './TopGames';

export default class Sidebar extends Component {
    render() {
        return (
            <div data-aos="fade-left" className="col-md-4 mb-5">

                <SearchBox />

                <SocialIcons />

                <TopGames title="Recent" />

                <TopGames title="Popular" />

            </div>
        )
    }
}
