import React from 'react';
import db from '../db';
import List from './List';
import ListItem from './ListItem';
export default class Main extends React.Component{
    
    constructor(){
        super();
        this.state = {todoList: null};
        var that = this;

        
        db.open().then(function(){
            that.refreshState();
        });
        // bind the methods to this Object(Main) as they're going to get called by other component
        this.deleteTodo = this.deleteTodo.bind(this);
        this.modifyTodo = this.modifyTodo.bind(this);
    }
    
    addTodo() {    
        var todoInput = document.getElementById("todo_input");
        var todoText = todoInput.value;
        
        var that = this;
        if(todoText.length > 0 && todoText !== null && todoText !== ""){
            
            db.todos.put({text: todoText, _id: String(Date.now())})
            .then(function(){
                todoInput.value = '';
                todoInput.focus();
            })
            .then(function(){
                that.refreshState();
            });
        }
        
    }
    deleteTodo(id){
        var that = this;
        db.todos.where("_id").equals(id).delete().then(function(){
            that.refreshState();
        });
    }
    modifyTodo(id,newObject){//newObject = {_id: time_in_milliseconds, text:string}
        var that = this;
        db.todos.where("_id").equals(id).modify(newObject).then(function(){
            that.refreshState();
        });
    }

    refreshState(){
        var that = this;

        db.todos.toArray().then(function(todos){
            var list = todos.map(function(e, i){
                return <ListItem key={i.toString()} time={e._id} text={e.text} deleteTodo = {that.deleteTodo} modifyTodo = {that.modifyTodo}/>;
            });
            that.setState({todoList: list.reverse()});
        });
    }
    render(){
        return (
            <div class="main">
                <div className="form">
                    <input type="text" id="todo_input" placeholder="Enter a Task"/>
                    <button onClick={this.addTodo.bind(this)}>Add</button>
                </div>
                <List list={this.state.todoList}/>
            </div>
        );
    }
}