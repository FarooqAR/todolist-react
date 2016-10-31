import React from 'react';

export default class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <header>
                <h1>Todo App</h1>
                <p>Made Using React</p>
            </header>
        );
    }
}