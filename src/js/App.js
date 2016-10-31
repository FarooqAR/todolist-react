import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){

        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}