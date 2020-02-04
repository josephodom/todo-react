import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
    const [ list, setList, ] = useState([]);
    
    function createTodo(e){
        if(e){
            e.preventDefault();
        }
        
        const field = document.getElementById('todo-input');
        const todo = {
            key: '',
            name: '',
            done: false,
        };
        
        todo.name = field.value;
        todo.key = `${Math.floor(Math.random() * 8888) + 1111}-${new Date().getTime()}`;
        
        setList(currentList => {
            return [ ...currentList, todo, ];
        });
        
        field.value = '';
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
                        <TodoList list={list} />
                    </ul>
                    
                    <hr />
                    
                    <TodoForm createTodo={createTodo} />
                </div>
            </article>
        </main>
    );
}

export default App;
