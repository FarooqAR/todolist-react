import React from 'react';
import ListItem from './ListItem';
export default class List extends React.Component{
    constructor(){
        super();
        
    }
    //render list coming from Main.js
    render(){
        
        return (
            <ul>
                {this.props.list}            
            </ul>
        );
    }
}