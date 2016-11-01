import React from 'react';
export default class ListItem extends React.Component{
    constructor(){
        super();
    }
    deleteTodo(){
        var props = this.props;
        props.deleteTodo({_id: props.time, text:props.text});
    }
    modifyTodo(){
        var todo = {};
        todo._id = this.props.time;
        todo.text = prompt("Edit todo:",this.props.text);
        todo.text = todo.text === "" || todo.text === null ? this.props.text : todo.text;

        this.props.modifyTodo(todo);
    }
    render(){
        var props = this.props;
        var date = new Date(parseInt(props.time));
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        hours = hours > 9 ? hours : '0' + hours;
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = seconds > 9 ? seconds : '0' + seconds;
        var formattedDate = date.toDateString() + " " + hours + ":" + minutes + ":" + seconds;
        return (
            <li id={props.time}>
                <p className="todoText">{props.text}</p>
                <div>
                    <span className="time">{formattedDate}</span>
                    <div className="right">
                        <button className="btn-delete" onClick={this.deleteTodo.bind(this)}></button>
                        <button className="btn-edit" onClick={this.modifyTodo.bind(this)}></button>
                    </div>
                    
                </div>
            </li>
        );
    }
}