import React, { Component } from 'react'
import Carousel from '../components/Carousel';
import TopadBanner from '../components/TopadBanner';
import GameContainer from '../components/GameContainer';
import CategoryContainer from '../components/CategoryContainer';

export default class CategoriesPage extends Component {
    render() {
        return (
            <div>
                <Carousel pageclass='cat-page' />
                <TopadBanner />
                <div className="container mt-5 body-cont">
                    <CategoryContainer />
                    <CategoryContainer />
                    <CategoryContainer />
                    <CategoryContainer />
                    <CategoryContainer />
                </div>
            </div>
        )
    }
}

