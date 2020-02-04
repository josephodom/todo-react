import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import uuid from 'uuid/v4';

function App() {
    let loadedTodos = null;
    
    if(!(loadedTodos = localStorage.getItem('list'))){
        loadedTodos = [];
    }else{
        loadedTodos = JSON.parse(loadedTodos);
    }
    
    const [ list, setList, ] = useState(loadedTodos);
    
    // Save
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [ list, ]);
    
    function createTodo(e){
        if(e){
            e.preventDefault();
        }
        
        const field = document.getElementById('todo-input');
        const todo = {
            key: uuid(),
            name: field.value,
            done: false,
        };
        
        if(!todo.name){
            alert(`You cannot enter a blank todo item`);
            return;
        }
        
        setList(currentList => {
            return [ ...currentList, todo, ];
        });
        
        field.value = '';
    }
    
    function checkTodo(id){
        const currentList = [ ... list, ];
        const itemEdit = currentList.find(item => item.key === id);
        
        itemEdit.done = !itemEdit.done;
        
        setList(currentList);
    }
    
    return (
        <main>
            <header>
                <div className="container">
                    <h1>React Todo List</h1>
                </div>
            </header>
            
            <hr />
            
            <article>
                <div className="container">
                    <h2>To Do</h2>
                    
                    <ul>
                        <TodoList list={list} checkTodo={checkTodo} />
                    </ul>
                    
                    <hr />
                    
                    <TodoForm createTodo={createTodo} />
                </div>
            </article>
        </main>
    );
}

export default App;
