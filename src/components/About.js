import React, { Component } from 'react';
import Poster from '../media/poster.jpg'

export default class About extends Component {
    state = {};
    render(){
        return (
        <div className="App-body" id="about">
            <p>
                Here you can find all of our info
            </p>
            <p>
                You can also send in your project ideas for our latest campaign
            </p>
            <img src={Poster} className="background"/>
        </div>
        )
    }
}
