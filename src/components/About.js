import React, { Component } from 'react';
import Poster from '../media/poster.jpg'

export default class About extends Component {
    state = {};
    render(){
        return (
        <div className="App-body" id="about">
            <img src={Poster} className="background"/>
            <div className="text-block">
                <p>
                    Here you can find all of our info
                    You can also send in your project ideas for our latest campaign. Currently a fully repsonsive basic web site.
                    No routing done yet though.
                </p>
            </div>

        </div>
        )
    }
}
