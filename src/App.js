import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
    const [ list, setTodos, ] = useState([
        {name:'todo0',checked:false,},
        {name:'todo1',checked:true,},
    ]);
    
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
                    
                    <TodoForm />
                </div>
            </article>
        </main>
    );
}

export default App;
