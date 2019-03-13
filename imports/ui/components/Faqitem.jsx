import React, { Component } from 'react'

export default class Faqitem extends Component {
    render() {
        return (
            <div className="faq-item p-3">
                <span data-toggle="collapse" data-target="#colex1" className='d-inline-block'><i
                    className='fa fa-plus'></i></span> Question 1
                        <p id='colex1' className="collapse">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptatibus similique
                    rerum voluptatem officia aut iusto necessitatibus
                        </p>
            </div>
        )
    }
}
