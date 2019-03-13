import React, { Component } from 'react'
import SidebarItem from './SidebarItem';

export default class TopGames extends Component {
    render() {
        const { title } = this.props
        return (
            <div className="nk-widget nk-widget-highlighted mt-3">
                <h4 className="nk-widget-title"><span><span className="text-main-1">Top</span> 3 {title}</span></h4>
                <div className="nk-widget-content">
                    <SidebarItem />
                    <SidebarItem />
                    <SidebarItem />
                </div>
            </div>

        )
    }
}
